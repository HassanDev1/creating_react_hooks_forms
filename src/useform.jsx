import {useState} from 'react';

const useForm = (callBack) => {
    const [values, setvalues] = useState({userName :"", password :""})
    const handleSubmit=(event)=>{
      event.preventDefault();
      callBack()
    }
  
    const handleChange=event=>{
      const{name,value}= event.target;
      setvalues({...values,[name]:value});
    }
    return { 
        handleSubmit,
        handleChange,
        values
    };
}
 
export default useForm;
