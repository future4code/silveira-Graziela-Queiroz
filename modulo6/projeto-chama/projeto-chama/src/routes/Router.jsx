import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chama from "../pages/chama/Chama";
import ChamaDetail from "../pages/chamaDetail/ChamaDetail";



export const Router = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={ < Chama/>} />
            <Route path="ChamaDetail" element={ < ChamaDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
};