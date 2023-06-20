import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Root