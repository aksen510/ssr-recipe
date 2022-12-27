import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
// import RedPage from "./pages/RedPage";
// import BluePage from "./pages/BluePage";
// import UsersPage from "./pages/UsersPage";
import loadable from "@loadable/component";

const RedPage = loadable(() => import("./pages/RedPage"));
const BluePage = loadable(() => import("./pages/BluePage"));
const UsersPage = loadable(() => import("./pages/UsersPage"));

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users/*" element={<UsersPage />} />
      </Routes>
    </div>
  );
};

export default App;
