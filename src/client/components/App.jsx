import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/App.scss'
import Post from './Post'
import { changeRange, fetchArticle } from '../actions/'
import { getIsFetching } from '../reducers'

const App = ({ value, post, isFetching, dispatch }) => {
	const isValid = value >= 0 && value < 100

	return (
		<div className="container">
			<div className="form-input">
				<label htmlFor="selector" className="form-input__label">Enter post id:</label>
				<input
					id="selector"
					className={isValid ? 'selector' : 'selector error'}
					type="number"
					onChange={
						(e) => {
							dispatch(changeRange(e.target.value))
						}
					}
				/>
			</div>
			<div className="circle-container">
				{isValid &&
					<button
						onClick={
							() => {
								dispatch(fetchArticle(value))
							}
						}
						style={{
							width: `${value}px`,
							height: `${value}px`,
						}}
						className="circle"
					/>
				}
			</div>
			<Post content={post} isFetching={isFetching} />
		</div>
	)
}

const mapStateToProps = state => ({
	value: parseInt(state.value, 10),
	post: state.post,
	isFetching: getIsFetching(state)
})

const AppComponent = connect(mapStateToProps)(App)

App.propTypes = {
	value: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	post: PropTypes.shape({
		title: PropTypes.string,
		body: PropTypes.string,
	}).isRequired
}

export default AppComponent
