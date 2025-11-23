// components/Header.jsx
import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const scrollToSection = id => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
		setIsMenuOpen(false)
	}

	const menuItems = [
		{ id: 'home', label: 'Главная' },
		{ id: 'services', label: 'Услуги' },
		{ id: 'about', label: 'Обо мне' },
		{ id: 'reviews', label: 'Отзывы' },
		{ id: 'contact', label: 'Контакты' },
	]

	return (
		<nav className='fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<a
						className='flex items-center space-x-2 cursor-pointer'
						onClick={() => scrollToSection('home')} // Функция прокрутки на "Главную"
						href='#home' // Добавляем href для семантики
						title='На главную'
					>
						<Sparkles className='w-6 h-6 text-amber-700' /> <span className='text-xl font-light text-gray-800'>Энергомассаж</span>{' '}
					</a>

					{/* Desktop Menu */}
					<div className='hidden md:flex space-x-8'>
						{menuItems.map(item => (
							<button key={item.id} onClick={() => scrollToSection(item.id)} className='text-gray-600 hover:text-amber-700 transition'>
								{item.label}
							</button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden'>
						{isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className='md:hidden bg-white border-t'>
					<div className='px-4 py-3 space-y-3'>
						{menuItems.map(item => (
							<button key={item.id} onClick={() => scrollToSection(item.id)} className='block w-full text-left py-2 text-gray-600'>
								{item.label}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}

export default Header
