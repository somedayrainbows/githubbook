import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../../components/users/Search';
import Users from '../../components/users/Users';

export const Home = () => {
	const { t, i18n } = useTranslation(['translation'])
	
	const changeLanguage = desiredLang => i18n.changeLanguage(desiredLang)

	return (
		<>
			<button type="button" onClick={() => changeLanguage('es')}>
				{t('translation:es')}
			</button>
			<button type="button" onClick={() => changeLanguage('de')}>
				{t('translation:de')}
			</button>
			<button type="button" onClick={() => changeLanguage('en')}>
				{t('translation:en')}
			</button>
			<h2>{t('translation:greeting', 'Hello')}</h2>
			<p>{t('translation:welcome', 'Welcome')}</p>
			<Search />
			<Users />
		</>
	);
};

export default Home;
