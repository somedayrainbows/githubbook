import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ icon, title }) => {
  const { t, i18n } = useTranslation()
	
	const handleClick = desiredLang => i18n.changeLanguage(desiredLang)
  
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
        <li>
          <button onClick={() => handleClick('es')}>
            {t('spanish')}
          </button>
          <button onClick={() => handleClick('de')}>
            {t('german')}
          </button>
          <button onClick={() => handleClick('en')}>
            {t('english')}
          </button>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github___Book',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
