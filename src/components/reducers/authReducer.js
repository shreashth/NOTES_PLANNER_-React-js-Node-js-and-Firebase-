

const LOGIN = 'LOGIN';

const LOGIN_ERROR = 'LOGIN_ERROR'

const SIGNUP = 'SIGNUP'

const SIGNUP_ERROR = 'SIGNUP_ERROR'



export const authReducer = (state={authLoginMessage:null, authSignUpMessage:null}, action)=>{

    switch(action.type){

        case LOGIN:
            
        console.log(action.payload)
        let createdAt =  new Date(action?.payload?.metadata?.createdAt?.seconds * 1000).toString()

        let lastLoginAt =  new Date(action?.payload?.metadata?.lastLoginAt?.seconds * 1000).toString()


        let loginData = {uid: action?.payload?.uid,userProfile: action?.payload?.userProfile,accessToken: action?.payload?.accessToken, registeredEmail: action?.payload?.email, lastLogin: action?.payload?.metadata?.lastLoginAt, createdAt: action?.payload?.metadata?.createdAt }

        localStorage.setItem('profile', JSON.stringify({...loginData}))

        return {...state,...loginData}




        case LOGIN_ERROR:

            console.log(action?.payload)
            return {...state, authLoginMessage:action?.payload?.error?.code}




        case SIGNUP: 
        // console.log(action.payload)
      
        const userProfile = action?.payload?.data?.userProfile
        const userData = action?.payload?.data?.user
        let signUpData = {uid: userData?.uid, userProfile: userProfile, expirationTime:userData?.stsTokenManager?.expirationTime, accessToken: userData?.stsTokenManager?.accessToken, registeredEmail: userData?.email, lastLogin: userData?.lastLoginAt, createdAt: userData?.createdAt }



        localStorage.setItem('profile', JSON.stringify({...signUpData}))


            return {...state, ...signUpData}



        


        case SIGNUP_ERROR:

            console.log(action.payload)

            return {...state, authSignUpMessage:action.payload.error.code}



         default:
             return state   


    }



}