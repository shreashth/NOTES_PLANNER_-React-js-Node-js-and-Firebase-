import axios from 'axios'






export const getNotification = ()=> async (dispatch) =>{


    try{
            const notification = await axios.get('http://localhost:5000/getnotifications')



            console.log(notification.data)

            dispatch({type: 'GET_NOTIFICATION', payload: notification?.data})


    }catch(error){

    }




}