import React from 'react'
import axios from 'axios';





export const signIn =  ({email, password},history) => async(dispatch) => {

    

    try{

        const user = await axios.post('http://localhost:5000/signin', {email, password})
    
        


        dispatch({type: 'LOGIN', payload: user?.data})

        history.push('/')

        

    }catch(err){
        console.log(err.message)
        dispatch({type: 'LOGIN_ERROR', payload: err?.response?.data})
    }


    // console.log(user)
}


export const signOut = (history)=> async(dispatch) => {


    try{

        const response= await axios.get('http://localhost:5000/signout')
     
        console.log(response)
        localStorage.removeItem('profile')

        history.push('/')

        

    }catch(err){
        console.log(err)
    }


}



export const signUp =  ({email, password,first_name,last_name},history) => async(dispatch) => {

    

    try{

        const user = await axios.post('http://localhost:5000/signup', {email, password,first_name,last_name})
    
        // console.log(user)
    
        dispatch({type: 'SIGNUP', payload: user})


        history.push('/')

        

    }catch(err){
        // console.log(err.response.data)
        dispatch({type: 'SIGNUP_ERROR', payload: err?.response?.data})

    }


    // console.log(user)
}


