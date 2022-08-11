import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../pages/Login/login'
import Signup from '../pages/Signup/signup'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={< Login />} />
                    <Route path="signup" element={< Signup />} />
                    {/* <Route path="registerpage" element={} />
                    <Route path="listrestaurant"element={}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}    

export default Router;