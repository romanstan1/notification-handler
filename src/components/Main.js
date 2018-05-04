import React, { Component } from 'react';
import {connect} from 'react-redux'

// curl -X POST -H "Authorization: key=AAAAgDqojms:APA91bEpE1orvJ_OGqmcpfrvMphVeL47KDccfy6n226n2Equ8GIamYQeFDYqEv5gMR8oXAZcQH8CkGlOjTVX9Zyj06MVz5LRM8h2ixO_cv84yhlm4HXA4uQbYyXQ6ik1PI8pVSRotsc8" -H "Content-Type: application/json" -d '{
  // "notification": {
  //   "title": "Success!",
  //   "body": "Your order has been placed",
  //   "icon": "https://vignette.wikia.nocookie.net/logopedia/images/f/fd/Specsavers-logo.png/revision/latest\?cb\=20160721075621",
  //   "click_action": "/index.html"
  // },
//   "to": "/topics/ecomm"
// }' "https://fcm.googleapis.com/fcm/send"

class Main extends Component {

  state ={
    title:'Success!',
    body: "You're order has been placed",
    icon:'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/11083663_10152789631617404_5212765031692940321_n.png?_nc_cat=0&oh=b9b6b907f29cc99e9827eda4d6f4c066&oe=5B5CAB8C'
  }

  handlePush = () => {
    const {icon, body, title} = this.state
    fetch(`https://serene-ocean-70888.herokuapp.com/notification`,
    {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:"title=" + title + "&body="  + body + "&icon="  + icon
    })
    .then(res => res.json())
    .then(res => {
      console.log("res",res)
    })
    .catch(error => {
      console.log("error:  ",error)
    })
  }

  changeTitle = (e) => {
    this.setState({title: e.target.value})
  }

  changeBody = (e) => {
    this.setState({body: e.target.value})
  }

  changeIcon = (e) => {
    this.setState({icon: e.target.value})
  }

  render() {
    const {title, body, icon} = this.state
    return (
      <div id='main'>
        <h3>Spec Ecomm Demo Notifications</h3>
        <label> Notification Title</label>
        <input onChange={this.changeTitle} value={title} type="text" />
        <label> Notification Body</label>
        <input onChange={this.changeBody} value={body} type="text" />
        <label> Icon URL</label>
        <input onChange={this.changeIcon} value={icon} type="text" />
        <div className='button' onClick={this.handlePush}>Push Notification</div>
      </div>
    )
  }
}

export default connect(state => ({
}))(Main)
