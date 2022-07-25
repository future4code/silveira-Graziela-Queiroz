import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "../pages/Movie";
import DetailMovie from "../pages/MovieDetail";



export const Router = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route index element={ <Movie/>} />
          <Route path="/detalheDosFilmes/:filmes" element={ <DetailMovie />} />
        </Routes>
      </BrowserRouter>
    
  );
};

// Criando as rotas da paginas