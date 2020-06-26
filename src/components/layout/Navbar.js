import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ icon, title }) => {
  const { t, i18n } = useTranslation(['common', 'labels'])
	
	const handleClick = desiredLang => i18n.changeLanguage(desiredLang)
  
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
        <li className="link">
          <Link to='/'>{t('home')}</Link>
        </li>
        <li className="link">
          <Link to='/about'>{t('about')}</Link>
        </li>
        <li>
          {i18n.language === 'en' && 
            <>
              <button className='btn btn-light' onClick={() => handleClick('es')}>
                {t('labels:spanish')}
              </button>
              <button className='btn btn-light' onClick={() => handleClick('de')}>
                {t('labels:german')}
              </button>
            </>
          }
          {i18n.language === 'de' && 
            <>
              <button className='btn btn-light' onClick={() => handleClick('es')}>
                {t('labels:spanish')}
              </button>
              <button className='btn btn-light' onClick={() => handleClick('en')}>
              {t('labels:english')}
              </button>
            </>
          }
          {i18n.language === 'es' && 
            <>
              <button className='btn btn-light' onClick={() => handleClick('en')}>
                {t('labels:english')}
              </button>
              <button className='btn btn-light' onClick={() => handleClick('de')}>
                {t('labels:german')}
              </button>
            </>
          }
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
