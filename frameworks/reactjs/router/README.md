# ReactJS
## Router
- Setup
    - `npm i react-router-dom` 
- Simple Router
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