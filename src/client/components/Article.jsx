import React from 'react'

const Article = (props) => (
	<div>
		<h1>{props.content.title}</h1>
		<p>{props.content.content}</p>
	</div>
)

export default Article
