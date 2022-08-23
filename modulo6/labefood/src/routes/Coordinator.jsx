
export const goToSignup = (navigate) => {
    navigate("/signup");
 
}
export const goToLogin = (navigate) => {
    navigate("/");
 
}

export const goToAddress = (navigate) => {
    navigate("/address");
 
}

export const goToRestaurant = (navigate) => {
    navigate("/restaurant");
 
}

export const goToDetailRestaurant = (navigate, id) => {
    navigate(`/detailRestaurant/${id}`);
 
}

export const goToEditProfile = (navigate) => {
    navigate(`/editProfile`);
 
}
export const goToEditAddress = (navigate) => {
    navigate("/editAddress");
};

