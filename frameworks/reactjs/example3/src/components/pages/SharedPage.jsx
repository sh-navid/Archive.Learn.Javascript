import { Link, Outlet } from "react-router-dom"

const SharedPage = () => {
    return (<>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/settings">Settings</Link>
        <span> | </span>
        <Link to="/admin">Admin</Link>
        <hr/>

        <Outlet />
    </>)
}

export default SharedPage