import React, { useEffect, useState } from 'react'
import './EditPage.css'
import backArrow from 'assets/icons/backarrow.svg'
import temporary from 'assets/images/temporary.jpg'
import { Link } from 'react-router-dom'
import Input from 'shared/Input/Input'
import Button from 'shared/Button/Button'
import PopUp from 'shared/PopUp/PopUp'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from 'stores/User/editUser.js'

export default function EditPage() {
	const user = useSelector(state => state.editUser.user)
	const dispatch = useDispatch()
	const [name, setName] = useState(user.name)
	const [username, setUsername] = useState(user.username)
	const [email, setEmail] = useState(user.email)
	const [city, setCity] = useState(user.address.city)
	const [phone, setPhone] = useState(user.phone)
	const [company, setCompany] = useState(user.company.name)
	const [isLoading, setIsLoading] = useState(true)
	const [isActivePopUp, setIsActivePopUp] = useState(false)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	const saveEdit = () => {
		if (
			name === '' ||
			username === '' ||
			email === '' ||
			city === '' ||
			phone === '' ||
			company === ''
		) {
			return
		}
		fetch(`https://jsonplaceholder.typicode.com/users/1`, {
			method: 'PUT', 
			headers: {
				'Content-Type': 'application/json', 
			},
			body: JSON.stringify({
				name: name,
				username: username,
				email: email,
				city: city,
				phone: phone,
				company: company,
			}),
		})
			.then(response => {
				response.json()
        setIsActivePopUp(true)
        setTimeout(() => {
          setIsActivePopUp(false)
        }, 4000)
			})
			.catch(error => {
				console.error('Ошибка при загрузке данных:', error)
			})
	}

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
					<div className='edit-container'>
						<div className='title-container'>
							<h1 className='title'>Данные профиля</h1>
						</div>
						<Input inputName={'Имя'} data={name} setData={setName} />
						<Input
							inputName={'Никнейм'}
							data={username}
							setData={setUsername}
						/>
						<Input inputName={'Почта'} data={email} setData={setEmail} />
						<Input inputName={'Город'} data={city} setData={setCity} />
						<Input inputName={'Телефон'} data={phone} setData={setPhone} />
						<Input
							inputName={'Название компании'}
							data={company}
							setData={setCompany}
						/>
						<div className='button-container'>
							<Button onClick={saveEdit} />
						</div>
					</div>
				</div>
			</div>
			<PopUp active={isActivePopUp} setActive={setIsActivePopUp} />
		</main>
	)
}
