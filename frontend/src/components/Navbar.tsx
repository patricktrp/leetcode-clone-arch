import styles from './Navbar.module.css'
import { useAuth0 } from '@auth0/auth0-react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

export type NavbarProps = {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

const Navbar = ({ toggleDarkMode, isDarkMode }: NavbarProps): JSX.Element => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    return (
        <nav className={styles['navbar-layout']}>
            <div className={styles['navbar-inner-layout']}>
                <SiLeetcode size="1.8em" />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isDarkMode ? <BsFillSunFill onClick={toggleDarkMode} size="1.4em" /> : <BsFillMoonFill onClick={toggleDarkMode} size="1.4em" />}
                    {isAuthenticated ?
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={user?.picture} alt="" className={styles['user-picture']} />
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                        </div> :
                        <div>
                            <button onClick={() => loginWithRedirect()}>Login</button>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar