import React from 'react';
import LoginPage from "../pages/loginPage/LoginPage"
import PaginaPost from "../pages/paginaPost/PaginaPost"
import PaginaFeed from "../pages/paginaFeed/PaginaFeed"
import TelaCadastro from "../pages/telaCadastro/TelaCadastro";
import ErrorPage from '../pages/errorPage/ErrorPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "../components/header/Headers";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/posts/:id/comments" element={<PaginaPost />} />
                <Route path="/paginafeed" element={<PaginaFeed />} />
                <Route path="/telaCadastro" element={<TelaCadastro />} />
                <Route path="*" element={<ErrorPage />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router