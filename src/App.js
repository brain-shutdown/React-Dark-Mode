import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function getStorageTheme() {
	return localStorage.getItem('theme') || 'light-theme';
}

function App() {
	const [theme, setTheme] = useState(getStorageTheme());

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<main className={theme}>
			<nav>
				<div className='nav-center'>
					<h1>Over Reacted</h1>
					<button
						className='btn'
						onClick={() => {
							if (theme === 'light-theme') {
								setTheme('dark-theme');
							} else {
								setTheme('light-theme');
							}
						}}>
						toggle
					</button>
				</div>
			</nav>
			<section className='articles'>
				{data.map((article) => {
					return <Article key={article.id} {...article} />;
				})}
			</section>
		</main>
	);
}

export default App;
