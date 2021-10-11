import React , {useState,useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {signIn, signUp} from '../actions/authActions'
import {useDispatch, useSelector} from 'react-redux'







function SignUp() {
    const authMessageFromRedux = useSelector(state=> state.auth.authSignUpMessage) 
const [authMessage, setAuthMessage] = useState(authMessageFromRedux)

    const history = useHistory()   

    const dispatch = useDispatch()

    const [signUpForm, setSignUpForm] = useState({email: '', password: '',first_name:'', last_name:''})


const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(signUp(signUpForm, history))

    console.log(signUpForm)
}

const handleChange=(e)=>{

 setSignUpForm({...signUpForm, [e.target.id]: e.target.value })

}

useEffect(()=>{

    setAuthMessage(authMessageFromRedux)


    setTimeout(()=>{
        // console.log(authMessage,'hello')
       
       setAuthMessage(null)
    },10000)
},[authMessageFromRedux])





return (
    <div className="container" >
        <form onSubmit={handleSubmit} className="white" style={{margin:'5%',marginLeft:'30%',width:'50%',textAlign:'center',padding: '30px'}}>

         

            <h5 className="grey-text text-darken-3" >Sign Up</h5>
            <br/>
            <div className="input-field">
                <label htmlFor="First Name">First Name</label>
                <input name="first_name"  type="text" id="first_name" onChange={handleChange} />
        
            </div>
            <div className="input-field">
                <label htmlFor="last_name">Last Name</label>
                <input name="last_name"  type="text" id="last_name" onChange={handleChange} />
        
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input name="email"  type="email" id="email" onChange={handleChange} />
        
            </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input name="password" type={signUpForm.password.length>0 ? 'password': 'text'} id="password" onChange={handleChange} /> 
        </div>  
            
            <br/>
            <div className="button" style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>
            <div className="red-text center">
                     {authMessage}
                 </div>
            <br/>

        </form>  
    </div>
)
}

export default SignUp
