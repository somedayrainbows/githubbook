import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import { useTranslation } from 'react-i18next';
// implement i18n HOC here for translation

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const { t } = useTranslation('common');
	
	const { searchUsers, clearUsers, users } = githubContext;
	const { setAlert } = alertContext;

	const [text, setText] = useState('');

	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert(t('empty_search_error_message'), 'light');
			// msg, type (args); light is a grey color
		} else {
			searchUsers(text);
			setText('');
		}
	};

	const clearButton = (
		<button className='btn btn-light btn-block' onClick={clearUsers}>
			{t('clear')}
		</button>
	);

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder={t('common:search_users_placeholder')}
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value={t('common:search_button_text')}
					className='btn btn-dark btn-block'
				/>
			</form>
			{users.length > 0 && clearButton}
		</div>
	);
};

export default Search;
