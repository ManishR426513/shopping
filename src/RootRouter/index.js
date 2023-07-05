import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home"
import PublicRoute from "./PublicRoute"
import ProductDetail from "../Components/ProductDetail";
import ProductCategory from "./ProductCategory";



function RootRouter(){
    return(
        <>
          <Router>
           <Routes>
         <Route path="/" element={<PublicRoute><Home/></PublicRoute>} />
         <Route path="/product/:id" element={<PublicRoute><ProductDetail /></PublicRoute>} />
         <Route path="/category/:id" element={<PublicRoute><ProductCategory /></PublicRoute>} />
      
         </Routes>
         </Router>
        
        </>
    )
}
export default RootRouter