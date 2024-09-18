import React from 'react'
import './Loader.css'

export default function Loader({isLoading}) {
	return (
		<div className={isLoading ? 'loader-container active' : 'loader-container'}>
			<div class='loader' />
		</div>
	)
}
