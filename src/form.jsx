import React from 'react';
import useForm from './useform'

const Form = () => {
    const {handleSubmit,handleChange,values} = useForm(callbackFunction);
    function callbackFunction(){
      console.log('submitted successfully')
    }
    return (  
        <form onSubmit={handleSubmit} >
        <input type="userName" name="userName" placeholder="Enter user name" value={values.userName } onChange={handleChange}/>
        <input type="password" name="password" placeholder="Enter password"   value={values.password} onChange={handleChange}/>
        <button >Sign In</button>
      </form>
    );
}
 
export default Form;