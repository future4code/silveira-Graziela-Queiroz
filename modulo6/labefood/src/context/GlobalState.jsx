import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import {BASE_URL } from "../constants/url";
import { useForm } from "../hooks/useForm";

const GlobalState = (props) => {
    const [form, setForm] = useState([]);

    const states = {};
    const setters = {};
    const requests = {};


    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};
export default GlobalState;