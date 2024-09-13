import React, { useEffect, useState } from 'react'
import './MainPage.css'
import temporary from 'assets/images/temporary.jpg'
import dotsMenu from 'assets/icons/dots-menu.svg'
import { Link } from 'react-router-dom'

export default function MainPage() {
	const [users, setUsers] = useState([])
	const [archive, setArchive] = useState([])
	// активное drop-menu
	const [currentDropMenu, setCurrentDropMenu] = useState(null)

	const transferToArchive = () => {
		setArchive(prevArchive => {
			let newArchive = []
			newArchive = users.filter(user => {
				return user.id === currentDropMenu
			})
			return [...prevArchive, ...newArchive]
		})
		setUsers(prevUsers => {
			let newUsers = []
			newUsers = prevUsers.filter(user => {
				return user.id !== currentDropMenu
			})
			console.log(newUsers)
			return newUsers
		})
		setCurrentDropMenu(null)
	}
	const transferFsromArchive = () => {
		setArchive(prevArchive => {
			let newArchive = []
			newArchive = prevArchive.filter(user => {
				return user.id !== currentDropMenu
			})
			return newArchive
		})
		setUsers(prevUsers => {
			let newUsers = []
			newUsers = archive.filter(user => {
				return user.id === currentDropMenu
			})
			console.log(newUsers)
			return [...prevUsers, ...newUsers]
		})
		setCurrentDropMenu(null)
	}

	const hideUser = () => {
		setUsers(prevUsers => {
			let newUsers = []
			newUsers = prevUsers.filter(user => {
				return user.id !== currentDropMenu
			})
			console.log(newUsers)
			return newUsers
		})
		setCurrentDropMenu(null)
	}

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'GET',
		})
			.then(response => response.json())
			.then(data => {
				setUsers(data.slice(0, 6))
			})
			.catch(error => {
				console.error('Ошибка при загрузке данных:', error)
			})
	}, [])

	return (
		<main className='mainPage' onClick={e => setCurrentDropMenu(null)}>
			<div className='container'>
				<div className='title-container'>
					<h1 className='title'>Активные</h1>
				</div>
				<ul className='cards-container'>
					{users.map(user => (
						<li className='card' key={user.id}>
							<img className='card-img' src={temporary} alt='user-img' />
							<div className='card-info'>
								<div className='card-head'>
									<div className='headline-container'>
										<h2 className='headline accent'>{user.username}</h2>
										<div
											className={
												currentDropMenu === user.id
													? 'drop-menu active'
													: 'drop-menu'
											}
										>
											<button
												className='drop-btn'
												onClick={e => {
													e.stopPropagation()
													currentDropMenu !== user.id
														? setCurrentDropMenu(user.id)
														: setCurrentDropMenu(null)
												}}
											>
												<img src={dotsMenu} className='icon' alt='dots-menu' />
											</button>
											<div className='drop-content'>
												<Link className='text-2 medium' to='/edit'>
													Редактировать
												</Link>
												<button
													className='text-2 medium'
													onClick={transferToArchive}
												>
													Архивировать
												</button>
												<button className='text-2 medium' onClick={hideUser}>
													Скрыть
												</button>
											</div>
										</div>
									</div>
									<p className='text-2 medium '>
										{user.company.name}
									</p>
								</div>
								<small className='caption' style={{ lineHeight: '19px' }}>
									{user.address.city}
								</small>
							</div>
						</li>
					))}
				</ul>
				<div className='title-container'>
					<h1 className='title'>Архив</h1>
				</div>
				<ul className='cards-container'>
					{archive.map(user => (
						<li className='card' key={user.id}>
							<img className='card-img archive' src={temporary} alt='user-img' />
							<div className='card-info'>
								<div className='card-head'>
									<div className='headline-container'>
										<h2 className='headline'>{user.username}</h2>
										<div
											className={
												currentDropMenu === user.id
													? 'drop-menu active'
													: 'drop-menu'
											}
										>
											<button
												className='drop-btn'
												onClick={e => {
													e.stopPropagation()
													currentDropMenu !== user.id
														? setCurrentDropMenu(user.id)
														: setCurrentDropMenu(null)
												}}
											>
												<img src={dotsMenu} className='icon' alt='dots-menu' />
											</button>
											<div className='drop-content'>
												<button
													className='text-2 medium'
													onClick={transferFsromArchive}
												>
													Активировать
												</button>
											</div>
										</div>
									</div>
									<p
										className='text-2 medium archive'
									>
										{user.company.name}
									</p>
								</div>
								<small
									className='caption archive'
									style={{ lineHeight: '19px' }}
								>
									{user.address.city}
								</small>
							</div>
						</li>
					))}
				</ul>
			</div>
		</main>
	)
}
