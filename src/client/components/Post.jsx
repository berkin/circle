import React from 'react'

const Post = (props) => (
	<div>
		<h1>{props.content.title}</h1>
		<p>{props.content.body}</p>
	</div>
)

export default Post
