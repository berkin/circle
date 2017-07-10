import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => {
	if (props.isFetching) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<blockquote>
				<h1>{props.content.title}</h1>
				<p>{props.content.body}</p>
			</blockquote>
		</div>
	)
}

Post.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	content: PropTypes.shape({
		title: PropTypes.string,
		body: PropTypes.string,
	}).isRequired
}

export default Post
