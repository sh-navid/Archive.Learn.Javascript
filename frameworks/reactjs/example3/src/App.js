import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from "./components/pages/AdminPage";
import HomePage from "./components/pages/HomePage"
import SharedPage from "./components/pages/SharedPage";
import PageNotFound from "./components/pages/PageNotFound";
import SettingPage from "./components/pages/SettingPage"

function App() {
  return (
    <>
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
    </>
  );
}

export default App;