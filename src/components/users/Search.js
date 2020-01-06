import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText]  = useState('')

  const onChange = (e) => setText(e.target.value)
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Oops, you forgot to search for something...', 'light')
      // msg, type (args); light is a grey color
    } else {
      searchUsers(text)
      setText('')      
    }
  }

  const clearButton = <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
  
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="search users"  value={text} onChange={onChange} />
        <input type="submit" value="search" className="btn btn-dark btn-block" />
      </form>
      { showClear && clearButton }
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
