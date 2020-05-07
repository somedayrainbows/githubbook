import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <h1>{t('about')} GithubBook</h1>
      <p>{t('welcome_message')}</p>
  <p>{t('version')} 1.0.0</p>
    </>
  )
}

export default About
