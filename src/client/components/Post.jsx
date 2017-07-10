import React from 'react'
import PropTypes from 'prop-types'

const Post = props => (
	<div>
		<blockquote>
			<h1>{props.content.title}</h1>
			<p>{props.content.body}</p>
		</blockquote>
	</div>
)

Post.propTypes = {
	content: PropTypes.shape({
		title: PropTypes.string,
		body: PropTypes.string,
	}).isRequired
}

export default Post
