import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeRange, fetchArticle } from '../actions/'

let App = ({ value, dispatch }) => (
	<div>
		<input
			type="number"
			onChange={(e) => {
				dispatch(changeRange(e.target.value))
			}
			}
		/>
		<button
			onClick={() => {
				dispatch(fetchArticle(value))
			}}
			style={{
				width: `${value}px`,
				height: `${value}px`,
				borderRadius: '100%'
			}}
			className="circle"
		/>
	</div>
)

const mapStateToProps = (state) => {
	return {
		value: state
	}
}

App = connect(mapStateToProps)(App)

export default App
