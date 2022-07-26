export const irParaHome = (navigate) => {  
     navigate("/");
}

export const irParaDetalhes = (navigate, filmes) => { 
    navigate(`/detailMovie/${filmes}`)}
     

export const voltar = (navigate) => {  
     navigate(-1)}

// pagina Home - vai aparecer os botões com o genero dos filmes
// detalhes - vai aparecer detalhes dos filmes
// voltar ( voltar para a pagina inicial ou seja, Home)



