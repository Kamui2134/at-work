import React from 'react'
import './Input.css'

export default function Input({ data, inputName, setData }) {
	const handleChange = event => {
		setData(event.target.value) // Обновляем значение с помощью переданной функции
	}
	return (
		<div className='input-container'>
			<h2 className='text-1 semibold'>{inputName}</h2>
			<input
				className='input text-2 medium'
				type='text'
				value={data}
				onChange={handleChange}
			/>
		</div>
	)
}
