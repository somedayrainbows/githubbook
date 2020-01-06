import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    //eslint-disable-next-line
  }, [])

    const { 
      name, 
      avatar_url, 
      location, 
      bio, 
      blog, 
      company,
      login, 
      html_url, 
      followers, 
      following, 
      public_repos, 
      public_gists, 
      hireable 
    } = user

    if (loading) return <Spinner  />

  return (
    <>
      <Link to='/' className='btn btn-light'>Back to search</Link>
      Hireable: {' '}
      {hireable ? <i className='fas fa-check text-success'></i> : <i className='fas fa-times-circle text-danger'></i> }
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} /> 
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && <><h3>Bio</h3><p>{bio}</p></>}
          <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
          <ul>
            <li>
              {login && <>Username: {login}</>}
            </li>
            <li>
              {company && <>Username: {company}</>}
            </li>
            <li>
              {blog && <>Username: {blog}</>}
            </li>
          </ul>
        </div>  
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </>
  )
}

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
}

export default User
