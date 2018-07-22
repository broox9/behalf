import React from 'react'
import { connect } from 'react-redux'

import PrayerForm from './components/PrayerForm'
import LoginForm from './components/LoginForm'

import { getUsers } from './state/actions/users.actions'
import { getPrayers } from './state/actions/prayers.actions'


const PrayerItem = props => (
  <li>{props.user} - {props.title}<br />{props.description}</li>
)

const UserItem = props => (
  <li>{`${props.fname} ${props.lname}`}<br />{`${props.email} - ${props.uuid}`}</li>
)



class App extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const prayerItems = this.props.prayers.map((item, index) => <PrayerItem {...item} key={item.uuid} />)
    let userItems = this.props.users.map((item, index) => <UserItem {...item} key={index} />)
    console.log(this.props)
    return (
      <div id="app">
        <h1>Prayer Admin Panel</h1>
        <LoginForm />
        <strong>Users</strong>
        <ul>
          {userItems}
        </ul>

        <strong>Prayers</strong>
        <button onClick={this.props.getPrayers}>GET PRAYERS</button>
        <ul>
          {prayerItems}
        </ul>

        <PrayerForm savePrayer={this.savePrayer} />
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  prayers: state.prayers
})

export default connect(mapStateToProps, { getUsers, getPrayers })(App)





