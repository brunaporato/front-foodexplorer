import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Menu } from "../pages/Menu";
import { EditDish } from "../pages/EditDish";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/foods/:id" element={<Details />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/editdish/:id" element={<EditDish />} />
    </Routes>
  )
}