import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(['greetings', 'common', 'labels']); 

  return (
    <>
      <h1>{t('common:about')} GithubBook</h1>
      <p>{t('greetings:welcome_message')}</p>
  <p>{t('labels:version')} 1.0.0</p>
    </>
  )
}

export default About;