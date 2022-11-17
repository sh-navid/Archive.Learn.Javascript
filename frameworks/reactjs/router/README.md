# ReactJS
## Router
- Setup
    - `npm i react-router-dom` 
- ![](../../../-/2.png) [Simple Router](../example3/src/App.js)
    ~~~js
    import { BrowserRouter, Routes, Route } from "react-router-dom"

    function App() {
    return (
        <>
        <BrowserRouter>
            <Routes path="/">
                <Route index element={<HomePage />}></Route>
                <Route path="settings" element={<SettingPage />}></Route>
                <Route path="admin" element={<AdminPage />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
    }
    ~~~
    > To test it
    - http://localhost:3000/
    - http://localhost:3000/settings
    - http://localhost:3000/admin
    - http://localhost:3000/hello
- ![](../../../-/2.png) [Route with shared page](../example3/src/App.js)
    ~~~js
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SharedPage />}>
            <Route index element={<HomePage />}></Route>
            <Route path="settings" element={<SettingPage />}></Route>
            <Route path="admin" element={<AdminPage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    ~~~
    - And SharedPage
    ~~~js
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
    ~~~
- Outlet
    > Renders the current selected route