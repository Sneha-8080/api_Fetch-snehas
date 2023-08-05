import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";

import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Greet } from "./components/Greet";
import { UserList } from "./components/UserList";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import "./components/common.css"


function App() {

  return (
   <div className="main">
    
    <BrowserRouter>
     <Nav/>
     <Routes>
      {/* <Route path="/"/> */}
      <Route path="/home" element={<Home/>}>
      <Route index element={<Contact/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
      <Route path="/greet" element={<Greet/>}/>
      <Route path="/users" element={<UserList/>}/>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
     </Routes>
    </BrowserRouter>
    
   </div>
  )
}

export default App
