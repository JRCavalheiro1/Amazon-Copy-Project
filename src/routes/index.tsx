import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
import {Login, Register, Menu, Painel} from "../pages/index";
import { Hero } from "../pages/Menu/components/Hero/Hero";


export const Routes = () => {
    return (    
        <BrowserRouter>
            <Switch>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/signin" element={<Login/>}/>
                <Route path="/menu" element={<Menu/>}> 
                    <Route path="/menu" element={<Hero/>}/>
                    <Route path="painel-items" element={<Painel/>}/> 
                       
                </Route>
                
                <Route path="*" Component={()=> <Navigate to="/signup"/> }/> 
            </Switch>
        </BrowserRouter>
    )
}