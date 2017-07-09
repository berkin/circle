import React from 'react'

const Post = (props) => (
	<div>
		<blockquote>
			<h1>{props.content.title}</h1>
			<p>{props.content.body}</p>
		</blockquote>
	</div>
)

export default Post
