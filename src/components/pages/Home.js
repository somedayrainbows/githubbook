import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../../components/users/Search';
import Users from '../../components/users/Users';

export const Home = () => {
	const { t, i18n } = useTranslation()
	
	const changeLanguage = desiredLang => i18n.changeLanguage(desiredLang)

	return (
		<>
			<button onClick={() => changeLanguage('es')}>
				{t('es')}
			</button>
			<button onClick={() => changeLanguage('de')}>
				{t('de')}
			</button>
			<button onClick={() => changeLanguage('en')}>
				{t('en')}
			</button>
			{/* {console.log(i18n.exists)} */}
			<h2>{t('greeting', 'Hello')}</h2>
			<p>{t('welcome', 'Welcome')}</p>
			<Search />
			<Users />
		</>
	);
};

export default Home;
