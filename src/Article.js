import React from 'react';
// import moment from 'moment';
const Article = ({ title, length, date, snippet }) => {
	return (
		<article className='post'>
			<h2>{title}</h2>
			<div className='post-info'>
				<span>
					{date.toLocaleDateString('en-gb', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						timeZone: 'utc',
					})}
				</span>
				<span>{length} min read</span>
			</div>
			<p>{snippet}</p>
		</article>
	);
};

export default Article;
