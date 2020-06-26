import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../../components/users/Search';
import Users from '../../components/users/Users';

export const Home = () => {
	const { t } = useTranslation('greetings')
	
	return (
		<>
			<h2>{t('greeting')}!</h2>
			<p>{t('welcome')}</p>
			<Search />
			<Users />
		</>
	);
};

export default Home;
