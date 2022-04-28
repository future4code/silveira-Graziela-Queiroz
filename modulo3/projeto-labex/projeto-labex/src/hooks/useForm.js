import {useState} from "react";
import useForm from "./hooks/useForm";

const useForm = (initialState) =>{
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const {name,value } = event.target;
    setForm({...form,[name]: value });

  };
    const CleanFields = () => {
        setForm(initialState);
    };

    return { form, onChange, CleanFields};



};

  export default useForm;