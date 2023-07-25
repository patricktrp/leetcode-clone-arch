import { useAuth0 } from '@auth0/auth0-react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import styles from './Navbar.module.css'

export type NavbarProps = {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }): JSX.Element => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    return (
        <nav className={styles['navbar-layout']}>
            <div className={styles['navbar-inner-layout']}>
                <Link className={styles['navbar-icon']} to="/"><SiLeetcode size="1.8em" /></Link>

                <ul className={styles['navigation-list']}>
                    <li><Link className={styles['navigation-list-link']} to="problems">Problems</Link></li>
                </ul>

                <ul className={styles['menu-list']}>
                    <li>{isDarkMode ? <BsFillSunFill onClick={toggleDarkMode} size="1.4em" style={{ marginRight: '10px' }} /> : <BsFillMoonFill onClick={toggleDarkMode} size="1.4em" style={{ marginRight: '10px' }} />}</li>
                    <li>{isAuthenticated ?
                        <DropdownMenu logout={logout} picture={user?.picture} /> :
                        <div>
                            <button onClick={() => loginWithRedirect()}>Login</button>
                        </div>}
                    </li>
                </ul>
            </div >
        </nav >
    )
}

export default Navbar