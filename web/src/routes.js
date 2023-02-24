import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu"
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Channel from "./pages/Channel";
import Withdraw from "./pages/Withdraw"
import Credit from "./pages/Credit";
import Consortia from "./pages/Consortia";
import Loan from "./pages/Loan"
import Work from "./pages/Work";
import Policy from "./pages/Policy";
import Use from "./pages/Use"
import Report from "./pages/Report"
import Sugestion from "./pages/Sugestion"
import Doubt from "./pages/Doubt";
import Cookies from "./components/Cookies";
import Benefit from "./pages/Benefit";
import RealEstate from "./pages/RealEstate";

const generalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>}  path="/"/>
        <Route element={<About/>} path="/sobrenos" />
        <Route element={<Products/>} path="/produtos"/>
        <Route element={<Contacts/>} path="/contatos"/>
        <Route element={<Channel/>} path="/canaldeetica"/>
        <Route element={<Withdraw/>} path="/saqueaniversario"/>
        <Route element={<Credit/>} path="/creditoconsignado"/>
        <Route element={<RealEstate/>} path="/creditoimobiliario"/>
        <Route element={<Consortia/>} path="/consorcios"/>
        <Route element={<Loan/>} path="/portabilidadeemprestimo"/>
        <Route element={<Benefit/>} path="cartaobeneficio"/>
        <Route element={<Work/>} path="/trabalheconosco"/>
        <Route element={<Policy/>} path="/politicaprivacidade"/>
        <Route element={<Use/>} path="/termosdeuso"/>
        <Route element={<Report/>} path="/relato"/>
        <Route element={<Sugestion/>} path="/sugestao"/>
        <Route element={<Doubt/>} path="/duvida"/>
        <Route element={<Menu/>} path="/Menu"/>
        <Route element={<Cookies/>} path="/aceitarcookies"/>
      </Routes>
    </BrowserRouter>
  );
};

export default generalRoutes;
