export const goToLogin = (navigate) =>{
 navigate("/")
}

export const goToPost = (navigate, id) =>{
    navigate(`/posts/${id}/comments`)
}

export const goToFeed = (navigate) =>{
    navigate("/paginafeed")
}

export const goToCadastro = (navigate) =>{
    navigate("/telaCadastro")
}

export const goToComentario = (navigate,id) =>{
    navigate(`/comentario/${id}`)
}