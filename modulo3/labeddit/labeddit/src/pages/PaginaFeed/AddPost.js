import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const AddPost = () => {
   useProtectedPage()
   return(
     <div>
       <h1>AddPost</h1>
     </div>
   )
}

export default AddPost