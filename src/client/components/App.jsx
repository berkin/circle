import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/App.scss'
import Post from './Post'
import { changeRange, fetchArticle } from '../actions/'

const App = ({ value, post, dispatch }) => (
	<div className="container">
		<div className="form-input">
			<label htmlFor="selector" className="form-input__label">Enter post id:</label>
			<input
				id="selector"
				className="selector"
				type="number"
				onChange={
					(e) => {
						dispatch(changeRange(e.target.value))
					}
				}
			/>
		</div>
		<div className="circle-container">
			<button
				onClick={
					() => {
						dispatch(fetchArticle(value))
					}
				}
				style={{
					width: `${value}px`,
					height: `${value}px`,
					borderRadius: '100%'
				}}
				className="circle"
			/>
		</div>
		<Post content={post} />
	</div>
)

const mapStateToProps = state => ({
	value: parseInt(state.value, 10),
	post: state.post,
})

const AppComponent = connect(mapStateToProps)(App)

App.propTypes = {
	value: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
}

export default AppComponent
