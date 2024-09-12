import React from 'react'
import logo from 'assets/icons/logo.svg'
import heart from 'assets/icons/heart.svg'
import bell from 'assets/icons/bell.svg'
import temporary from 'assets/images/temporary.jpg'
import './Header.css'

export default function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='logo-container'>
					<img src={logo} />
					<h1 className='h1 logo'>
						at-<b>work</b>
					</h1>
				</div>
				<div className='profile-container'>
					<div className='links-container'>
						<a href='#'>
							<img className='icon' src={bell} alt='favorites' />
						</a>
						<a href='#'>
							<img className='icon' src={heart} alt='favorites' />
						</a>
					</div>
					<div className='avatar-container'>
						<img className='avatar' src={temporary} alt='avatar' />
						<p className='text-2 semibold'>Ivan1234</p>
					</div>
				</div>
			</div>
		</header>
	)
}
