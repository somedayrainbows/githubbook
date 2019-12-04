import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired
  }

  onChange = (e) => this.setState({ text: e.target.value })
  
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.text === '') {
      this.props.setAlert('Oops, you forgot to search for something...', 'light')
    } else {
      this.props.searchUsers(this.state.text)
      this.setState({ text: '' })      
    }
  }

  render() {
    const { showClear, clearUsers } = this.props
    const clearButton = <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="search users"  value={this.state.text} onChange={this.onChange} />
          <input type="submit" value="search" className="btn btn-dark btn-block" />
        </form>
        { showClear && clearButton }
      </div>
    )
  }
}

export default Search
