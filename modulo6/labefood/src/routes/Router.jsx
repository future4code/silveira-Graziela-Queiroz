
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Address from "../pages/Address/address";
import DetailRestaurant from "../pages/DetailRestaurant/DetailRestaurant";
import EditAddress from "../pages/EditAddress/EditAddress";
import Login from '../pages/Login/login'
import Restaurant from '../pages/Restaurant/restaurant'
import Signup from '../pages/Signup/signup'
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={< Login />} />
                    <Route path="/signup" element={< Signup />} />
                    <Route path="/address" element={ <Address />}/>
                    <Route path="/restaurant" element={ <Restaurant />}/>
                    <Route path="/detailRestaurant/:id" element={ <DetailRestaurant />}/>
                    <Route path="profile" element={<Profile />} />
                    <Route path="/editProfile" element={ <EditProfile />}/>
                    <Route path="/editAddress" element={<EditAddress />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}    

export default Router;