import React from 'react'
import { connect } from 'react-redux'

import { createPrayer } from '../state/actions/prayers.actions'

class PrayerForm extends React.Component {

  state = {
    title: '',
    description: '',
    isPublic: false,
    isPinned: false,
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('FORM SUBMIT', this.state)
    this.props.createPrayer(this.state)
    this.form.reset();
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
        <h3>New Form</h3>
        <p>
          <label htmlFor="title">
            <input id="title" placeholder="title" onChange={this.handleChange} />
          </label>
        </p>

        <textarea id="description" onChange={this.handleChange} placeholder="description"></textarea>

        <fieldset>
          <label htmlFor="isPublic">
            <input type="checkbox" id="isPublic" value={this.state.isPublic} onChange={this.handleChange} />
            make public?
          </label>

          <br />

          <label htmlFor="isPinned">
            <input type="checkbox" id="isPinned" value={this.state.isPinned} onChange={this.handleChange} />
            pin to the top?
          </label>
        </fieldset>


        <button>Save Prayer</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  prayers: state.prayers || []
})

export default connect(mapStateToProps, { createPrayer })(PrayerForm)
