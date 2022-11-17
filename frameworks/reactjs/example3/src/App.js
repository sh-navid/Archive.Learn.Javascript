import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import AdminPage from "./components/pages/AdminPage";
import HomePage from "./components/pages/HomePage"
import PageNotFound from "./components/pages/PageNotFound";
import SettingPage from "./components/pages/SettingPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="settings" element={<SettingPage />}></Route>
          <Route path="admin" element={<AdminPage/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;