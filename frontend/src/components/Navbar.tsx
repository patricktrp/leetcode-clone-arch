import styles from './Navbar.module.css'
import { useAuth0 } from '@auth0/auth0-react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { MdOutlineLogout } from 'react-icons/md'

export type NavbarProps = {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

const Navbar = ({ toggleDarkMode, isDarkMode }: NavbarProps): JSX.Element => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    return (
        <nav className={styles['navbar-layout']}>
            <div className={styles['navbar-inner-layout']}>
                <Link className={styles['navbar-icon']} to="/"><SiLeetcode size="1.8em" /></Link>

                <ul className={styles['navigation-list']}>
                    <li><Link className={styles['navigation-list-link']} to="problems">Problems</Link></li>
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isDarkMode ? <BsFillSunFill onClick={toggleDarkMode} size="1.4em" /> : <BsFillMoonFill onClick={toggleDarkMode} size="1.4em" />}
                    {isAuthenticated ?
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={user?.picture} alt="" className={styles['user-picture']} />
                            <MdOutlineLogout className={styles['logout-button']} size="1.8em" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} />
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