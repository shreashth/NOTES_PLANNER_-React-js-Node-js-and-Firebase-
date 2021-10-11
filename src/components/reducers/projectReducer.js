const initialState=[]

let CREATE_PROJECT = 'CREATE_PROJECT'

let GET_PROJECTS = 'GET_PROJECTS'

let DELETE_PROJECT = 'DELETE_PROJECT'

export const projectReducer = (state=initialState,action) =>{
    

    switch(action.type){

        case CREATE_PROJECT:
            console.log(action.payload)

                return [action.payload,...state]

        case GET_PROJECTS:

            // for(let project of action.payload){

            //     if(!project.firebaseId){
            //         project.firebaseId = Math.floor(Math.random()*1000000)
            //     }

            // }


            return  [...action.payload]



        case DELETE_PROJECT:

            
            return state.filter((project)=>(project.firebaseId !== action.payload))

        default:
            return state
    }


}