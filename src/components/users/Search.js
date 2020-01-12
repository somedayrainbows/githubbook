import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Search = ({ showClear, setAlert }) => {
  const githubContext = useContext(GithubContext)
  const [text, setText]  = useState('')

  const onChange = (e) => setText(e.target.value)
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Oops, you forgot to search for something...', 'light')
      // msg, type (args); light is a grey color
    } else {
      githubContext.searchUsers(text)
      setText('')      
    }
  }

  const clearButton = <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
  
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
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
