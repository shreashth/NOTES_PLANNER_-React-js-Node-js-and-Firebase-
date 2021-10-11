import React,{useEffect,useState} from 'react';
import {Link,useLocation} from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignedOutLinks from './SignedOutLinks'
import {useDispatch} from 'react-redux'
import {getNotification} from '../actions/notificationActions'


const localPro= localStorage.getItem('profile') 



const Navbar = ()=>{

const location = useLocation()

const dispatch = useDispatch()

dispatch(getNotification())

 
    // console.log('hello navbar')
    const [userProfile,setUserProfile] = useState(localPro)


    useEffect(()=>{

        setUserProfile(JSON.parse(localStorage.getItem('profile')));
        // console.log(userProfile);
     },[location])

 const link = userProfile ? <SignInLinks /> : <SignedOutLinks />




return(

    
    <div className="navbar" style={{height:'10%'}}> 
    <nav className="nav-wrapper blue darken-2 "   style={{display:'flex', justifyContent:'space-between',flexWrap:'wrap'}}>

    <div style={{marginLeft:'5%'}}>
            <Link to ="/"  style={{fontWeight:'800', fontSize:'200%'}}><b> Planner</b></Link>
    </div>


            <div style={{marginRight:'5%'}}>
                {link}
            </div>
    </nav>
        </div>

)




}


export default Navbar