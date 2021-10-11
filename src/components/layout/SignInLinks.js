import React from 'react';
import {NavLink} from 'react-router-dom'
import {signOut} from '../actions/authActions'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'




const SignedInLinks = ()=>{
    const profile = JSON.parse(localStorage.getItem('profile'))

    const userProfile =  profile?.userProfile
    // console.log(userProfile)
    const dispatch = useDispatch()
    const history = useHistory()

const logout= async()=>{
   dispatch(signOut(history))

  
}


return(

    <ul className="right" >
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><NavLink onClick={logout} to='/'>Log Out</NavLink></li>

        <li><NavLink to="/" className='btn btn-floating pink lighten-1'>{userProfile && userProfile?.firstName?.charAt(0)+userProfile?.lastName?.charAt(0)}</NavLink></li>




    </ul>




)




}


export default SignedInLinks


// style={{display: 'flex',flexDirection:'row'}}
// style={{marginRight:'3%',position:'absolute'}}