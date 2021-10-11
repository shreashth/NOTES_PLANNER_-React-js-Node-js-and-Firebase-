import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

export let NotificationDisplay= 'block'


function Notification() {

    const location = useLocation() 

    const Notifications = useSelector(state=>state.notification)

    const [displayNotification, setDisplayNotification] = useState(NotificationDisplay)

    const delNotification = () => {
        NotificationDisplay = 'none'
        setDisplayNotification('none')
    }
    let creationTime = (x)=>  new Date(x).toString()



    return (
        <div className="card z-depth-0 project-summary" style={{width:'90%',margin:'9%',padding:'1%',display:displayNotification}}>
        <div className="card-content grey-text text darken-3" style={{textAlign:'center'}}>
        <b> Notification </b>
        </div>
       
       
         {Notifications.length ? Notifications.map((notification,i)=>(
        <div style={{display: 'flex', flexDirection:'column',margin:'5%'}} key={i}>
            
              <span className="red-text">{notification?.authorName}: </span>
               <span className="black-text"> {notification?.content }</span>            
               <span className="black-text">At - {creationTime(notification?.createdAt?.seconds*1000)}</span>
               <br/>
               <br/>
        </div>
          )) : <h6>No Notifications</h6> }

      
      
        <div id="projectSummaryButton">

            <p className="grey-text">{}</p>

            <button className="btn btn-blue" id="deleteButton" onClick={delNotification}><i className="material-icons">delete</i></button>

        </div>

        
    </div>
    )
}

export default Notification
