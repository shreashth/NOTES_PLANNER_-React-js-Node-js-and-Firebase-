import React ,{useState,useEffect} from 'react'
import {signIn} from '../actions/authActions'
import {useHistory} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'






function SignIn() {

const authMessageFromRedux = useSelector(state=> state.auth.authLoginMessage) 
const [authMessage, setAuthMessage] = useState(authMessageFromRedux)

 const history = useHistory()   

const [signInForm, setSignInForm] = useState({email: '', password: ''})

const dispatch = useDispatch()



const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signInForm)
    
    dispatch(signIn(signInForm, history))

    setSignInForm({email: '', password:''})
}

const handleChange=(e)=>{

   setSignInForm({...signInForm, [e.target.id] : e.target.value})
}



useEffect(()=>{

    setAuthMessage(authMessageFromRedux)


    setTimeout(()=>{
        // console.log(authMessage,'hello')
       
       setAuthMessage(null)
    },10000)
},[authMessageFromRedux])






let accessToken=null;

if(localStorage.getItem('profile')){

   accessToken= JSON.parse(localStorage.getItem('profile')).accessToken
}

if(accessToken) return <Redirect to='/' />



return (
    <>
            
    <div className="container " >
        <form onSubmit={handleSubmit} className="white" style={{marginTop:'5%',marginLeft:'30%',width:'50%',textAlign:'center',padding: '30px'}}>
            <h5 className="grey-text text-darken-3" >Sign In</h5>
            <br/>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input name="email"  type="email" id="email" value={signInForm.email} onChange={handleChange} />
        
            </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input name="password" type={signInForm.password.length>0 ? 'password': 'text'} id="password" value={signInForm.password } onChange={handleChange} /> 
        </div>  
            
            <div className="button" style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <button className="btn pink lighten-1 z-depth-0">Log In</button>
            </div>
              <br/>          
            <div className="red-text center">
                    {  authMessage}
                </div>

        </form>  
    </div>
    </>
)
}

export default SignIn
