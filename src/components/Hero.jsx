// components/Hero.jsx
import { Heart, MessageCircle, Send, Users } from 'lucide-react'
import { contacts, siteData } from '../config/contacts'
import portfolioMe from '../images/portfolio_me.jpg'

const Hero = () => {
	return (
		<section id='home' className='pt-24 pb-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='space-y-6'>
						<div className='inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm'>✨ Мастер-гармонизатор</div>{' '}
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight'>
							Тело, Энергия, <br />и Сознание{' '}
						</h1>{' '}
						<p className='text-lg text-gray-600 leading-relaxed'>Холистическая практика, объединяющая психосоматику, телесную терапию и биоэнергетику для освобождения от блоков и восстановления внутреннего потока жизни.</p>
						{/* Кнопки быстрой связи */}
						<div className='flex flex-wrap gap-3 pt-4'>
							<a href={`https://wa.me/${contacts.whatsapp}`} target='_blank' rel='noopener noreferrer' className='px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition shadow-lg hover:shadow-xl flex items-center gap-2'>
								<MessageCircle className='w-5 h-5' />
								WhatsApp
							</a>
							<a href={`https://t.me/${contacts.telegram}`} target='_blank' rel='noopener noreferrer' className='px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition shadow-lg hover:shadow-xl flex items-center gap-2'>
								<Send className='w-5 h-5' />
								Telegram
							</a>
						</div>
						<div className='flex gap-8 pt-6'>
							<div className='flex items-center gap-2'>
								<Users className='w-5 h-5 text-amber-700' />
								<div>
									<div className='font-semibold text-gray-800'>{siteData.stats.clients}</div>
									<div className='text-sm text-gray-600'>Клиентов</div>
								</div>
							</div>
							<div className='flex items-center gap-2'>
								<Heart className='w-5 h-5 text-amber-700' />
								<div>
									<div className='font-semibold text-gray-800'>{siteData.stats.experience}</div>
									<div className='text-sm text-gray-600'>Опыта</div>
								</div>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className='h-full h-80 md:h-93 rounded-3xl shadow-xl overflow-hidden'>
							<img src={portfolioMe} alt='Мастер энергомассажа' className='w-full h-full object-cover' />
						</div>
						<div className='absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-40'></div>
						<div className='absolute -top-6 -left-6 w-32 h-32 bg-stone-300 rounded-full blur-3xl opacity-40'></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
