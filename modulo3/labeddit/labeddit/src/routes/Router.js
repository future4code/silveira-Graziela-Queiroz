import React from 'react';
import LoginPage from "../pages/LoginPage/LoginPage"
import PaginaPost from "../pages/PaginaPost/PaginaPost"
import PaginaFeed from "../pages/PaginaFeed/PaginaFeed"
import TelaCadastro from "../pages/TelaCadastro/TelaCadastro";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "..components/Header/Header";
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