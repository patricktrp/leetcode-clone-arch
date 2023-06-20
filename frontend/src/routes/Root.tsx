import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Root = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = (): void => {
        if (isDarkMode) {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        setIsDarkMode(darkmode => !darkmode)
    }

    return (
        <>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Outlet />
        </>
    )
}

export default Root