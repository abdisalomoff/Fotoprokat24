import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useLogin = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({
        password:'',
        email:'',
    })
    
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      };
    
      const validatePassword = (password) => {
        return password.length >= 4;
      };
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        let formValid = true
        const userRegister = JSON.parse(localStorage.getItem('userRegister'))
        const updateError ={
            email:validateEmail(email)?'':'Invalid email adress!',
            password:validatePassword(password)?'':'Password should be more than 4 signs!',
        } 
        
        Object.keys(updateError).forEach((key)=>{
            if(updateError[key]){
                formValid = false
            }
        })
        
        if(!formValid){
            setError(updateError)
            return
        }
        
        if(userRegister.email === email && userRegister.password === password){
            navigate('/')
            const userLogin ={
                email,
                password,
            }

        localStorage.setItem('userLogin',JSON.stringify(userLogin))
        } else {
            const checkMatchingEmail = (email)=>{
                return (userRegister.email == email?true:false)
            }
            const checkMatchingPassword = (password)=>{
                return (userRegister.password == password?true:false)
            }
            const matchingError ={
                email:checkMatchingEmail(email)?'':'Email do not match',
                password:checkMatchingPassword(password)?'':'Passwords do not match',
            } 
            
            setError(matchingError)
            return
        }
        
    }
    
    return {handleSubmit, error, handleEmailChange: (e) => {
        setEmail(e.target.value.trim())
    },
    handlePasswordChange:(e)=>{
        setPassword(e.target.value.trim())
    }
}
}

export default useLogin;