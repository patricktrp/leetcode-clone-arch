import { LogoutOptions } from '@auth0/auth0-react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'
import styles from './DropdownMenu.module.css'

export interface DropdownMenuProps {
    logout: (options?: LogoutOptions) => void,
    picture?: string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ logout, picture }): JSX.Element => {
    return (
        <Dropdown.Root>
            <Dropdown.Trigger asChild>
                <img src={picture} alt="" className={styles['user-picture']} />
            </Dropdown.Trigger>

            <Dropdown.Portal>
                <Dropdown.Content className={styles["DropdownMenuContent"]} sideOffset={5}>
                    <Dropdown.Item className={styles["DropdownMenuItem"]}>
                        <Link to="/profile">Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles["DropdownMenuItem"]} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Logout
                    </Dropdown.Item>
                    <Dropdown.Arrow className={styles["DropdownMenuArrow"]} />
                </Dropdown.Content>
            </Dropdown.Portal>
        </Dropdown.Root>
    )
}

export default DropdownMenu