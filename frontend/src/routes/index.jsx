import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import ListaDePlugins from "../pages/ListaDePlugins";
import Homepage from "../pages/Homepage";
import PluginPage from "../pages/PlugInModel";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plugin" element= {<PluginPage /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plugins" element={<ListaDePlugins />} />
      </Routes>
    </Router>
  );
};