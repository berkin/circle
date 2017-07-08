import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import { connect } from 'react-redux'
import { changeRange, fetchArticle } from '../actions/'

const App = ({ value, article, dispatch }) => (
	<div>
		<input
			type="number"
			onChange={
				(e) => {
					dispatch(changeRange(e.target.value))
				}
			}
		/>
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
		<Article content={article} />
	</div>
)

const mapStateToProps = state => ({
	value: parseInt(state.value, 10),
	article: state.article,
})

const AppComponent = connect(mapStateToProps)(App)

App.propTypes = {
	value: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
}

export default AppComponent
