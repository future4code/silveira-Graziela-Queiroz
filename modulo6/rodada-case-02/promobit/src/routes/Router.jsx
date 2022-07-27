import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "../pages/movie/Movie";
import DetailMovie from "../pages/movieDetail/MovieDetail";

export const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={ <Movie />} />
          <Route path="/detalheDosFilmes/:filmes" element={ <DetailMovie />} />
        </Routes>
      </BrowserRouter>
  );
};

// Criando as rotas da paginas