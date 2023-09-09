import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="Details/:id" element = {<Details />}/>
    </Routes>
    </BrowserRouter>
    </>
}