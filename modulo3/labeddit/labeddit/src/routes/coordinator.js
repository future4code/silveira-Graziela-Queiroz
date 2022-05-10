export const goToLogin = (navigate) =>{
 navigate.push("/")
}

export const goToPost = (navigate,id) =>{
    navigate.push(`/posts/${id}/comments`)
}

export const goToFeed = (navigate) =>{
    navigate.push("/paginafeed")
}

export const goToCadastro = (navigate) =>{
    navigate.push("/telaCadastro")
}