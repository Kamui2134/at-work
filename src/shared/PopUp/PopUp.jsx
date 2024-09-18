import React from 'react'
import './PopUp.css'
import cross from 'assets/icons/cross.svg'
import checkedBox from 'assets/icons/Checked-box.svg'

export default function PopUp({ active, setActive }) {
	return (
		<div
			className={active ? 'popUp active' : 'popUp'}
			onClick={() => setActive(false)}
		>
			<div className='popUp-content' onClick={e => e.stopPropagation()}>
				<img
					onClick={() => setActive(false)}
					className='cross'
					src={cross}
					alt='cross'
				/>
				<img className='checkedBox' src={checkedBox} alt='checked-Box' />
                <h2 className='headline'>Изменения сохранены!</h2>
			</div>
		</div>
	)
}
