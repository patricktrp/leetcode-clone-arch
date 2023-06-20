import styles from './Navbar.module.css'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = (): JSX.Element => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    return (
        <nav className={styles['navbar-layout']}>
            {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Login</button>}
            {isAuthenticated && JSON.stringify(user)}
            {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
        </nav>
    )
}

export default Navbar