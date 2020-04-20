import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// implement i18n HOC here for translation

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const { searchUsers, clearUsers, users } = githubContext;
	const { setAlert } = alertContext;

	const [text, setText] = useState('');

	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Oops, you forgot to search for something...', 'light');
			// msg, type (args); light is a grey color
		} else {
			searchUsers(text);
			setText('');
		}
	};

	const clearButton = (
		<button className='btn btn-light btn-block' onClick={clearUsers}>
			Clear
		</button>
	);

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='search users'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{users.length > 0 && clearButton}
		</div>
	);
};

export default Search;
