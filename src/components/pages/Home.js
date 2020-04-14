import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../../components/users/Search';
import Users from '../../components/users/Users';

export const Home = () => {
	const { t } = useTranslation()
	return (
		<>
			<p>{t('welcome', 'Hello')}</p>
			<Search />
			<Users />
		</>
	);
};

export default Home;
