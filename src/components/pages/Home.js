import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../../components/users/Search';
import Users from '../../components/users/Users';

export const Home = () => {
	const { t } = useTranslation()
	
	return (
		<>
			{/* {console.log(i18n.exists)} */}
			<h2>{t('greeting', 'Hello')}</h2>
			<p>{t('welcome', 'Welcome')}</p>
			<Search />
			<Users />
		</>
	);
};

export default Home;
