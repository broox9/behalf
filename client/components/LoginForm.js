import React from 'react'

export default class LoginForm extends React.Component {

  state = {
    uid: '',
    pwd: '',
  }


  setUid = e => this.setState({ uid: e.target.value })

  setPwd = e => this.setState({ pwd: e.target.value })

  submitForm = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {

    return (
      <form onSubmit={this.submitForm}>
        <fieldset>
          <p>
            <input type="text" name="username" placeholder="user name" onInput={this.setUid} />
          </p>
          <p>
            <input type="password" name="password" placeholder="password" onInput={this.setPwd} />
          </p>
          <button>Submit</button>
        </fieldset>
      </form>
    )
  }
}
