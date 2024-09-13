import React from 'react'
import './EditPage.css'
import backArrow from 'assets/icons/backarrow.svg'
import temporary from 'assets/images/temporary.jpg'
import { Link } from 'react-router-dom'

export default function EditPage() {
	return (
		<main className='editPage'>
			<div className='container'>
				<Link to='/'>
					<div className='back-link-container'>
						<img className='icon' src={backArrow} alt='back-arrow' />
						<h2 className='headline'>Назад</h2>
					</div>
				</Link>
				<div className='main-content'>
					<div className='avatar-container'>
						<img className='avatar' src={temporary} alt='avatar' />
						<div className='profile-data'>
							<p className='text-2 semibold'>Данные профиля</p>
							<p className='text-2 medium description'>Рабочее пространство</p>
							<p className='text-2 medium description'>Приватность</p>
							<p className='text-2 medium description'>Безопасность</p>
						</div>
					</div>
					<div className='edit-container'></div>
				</div>
			</div>
		</main>
	)
}
