import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"

import {Login, Register, Menu} from "../pages/index";


export const Routes = () => {
    return (    
        <BrowserRouter>
            <Switch>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/signin" element={<Login/>}/>
                <Route path="/menu" element={<Menu/>} />
                <Route path="*" Component={()=> <Navigate to="/signup"/> }/> 
            </Switch>
        </BrowserRouter>
    )
}