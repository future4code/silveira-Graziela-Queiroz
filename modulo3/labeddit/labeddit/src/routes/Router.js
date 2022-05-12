import React from 'react';
import LoginPage from "../pages/loginPage/LoginPage"
import PaginaPost from "../pages/paginaPost/PaginaPost"
import FeedPage from "../pages/paginaFeed/FeedPage"
import TelaCadastro from "../pages/telaCadastro/TelaCadastro";
import ErrorPage from '../pages/errorPage/ErrorPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "../components/header/Header";

const Router = ({buttonHeader, setButtonHeader}) => {
    return (
        <BrowserRouter>
            <Header buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>
            <Routes>
                <Route index element={<LoginPage buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>} />
                <Route path="/posts/:id/comments" element={<PaginaPost />} />
                <Route path="/paginafeed" element={<FeedPage buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>} />
                <Route path="/telaCadastro" element={<TelaCadastro />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router