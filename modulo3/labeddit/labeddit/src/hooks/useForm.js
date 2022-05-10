import {useState} from 'react'

const useForm =(initialState) =>{
    const [form,setform] = useState (initialState)

    const handleInputChange = (event) => {
        const{value,name} = event.target
        setform({...form,[name]:value})
    }
     const clear = () => {
         setform(initialState)
     }

     return [form,handleInputChange,clear]
}  


export default useForm