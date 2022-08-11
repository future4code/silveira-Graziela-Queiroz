import React, { useEffect } from "react";
// import FeedPage from "../Pages/FeedPagePasta/FeedPage";
import { useNavigate } from "react-router-dom";

const useUnprotectedPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            navigate("/listRestaurant")
        }
    }, [])
}

export default useUnprotectedPage;