


const GET_NOTIFICATION = 'GET_NOTIFICATION';



export const notificationReducer =(state=[], action) =>{


    switch(action.type){
        case GET_NOTIFICATION:
            console.log(action.payload)

            return [...action.payload]




         default:
             return state   
    }


}