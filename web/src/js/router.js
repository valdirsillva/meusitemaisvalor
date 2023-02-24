import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Footer from "./pages/About";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Footer }  path="./pages/about" exact />
        
       </BrowserRouter>
   )
}

export default Routes;