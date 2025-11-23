// components/About.jsx
import portfolioMe from '../images/portfolio_me.jpg'

const About = () => {
	const features = [
		{
			title: 'Сертифицированный специалист',
			description: 'Дипломы и сертификаты международного образца',
		},
		{
			title: 'Индивидуальный подход',
			description: 'Учитываю особенности каждого клиента',
		},
		{
			title: 'Комфортная атмосфера',
			description: 'Уютный кабинет, релаксирующая музыка',
		},
	]

	return (
		<section id='about' className='py-20 px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='relative order-2 md:order-1'>
						<div className='w-full h-80 md:h-96 rounded-3xl shadow-xl overflow-hidden'>
							<img src={portfolioMe} alt='Мастер энергомассажа' className='w-full h-full object-cover' />
						</div>
					</div>
					<div className='space-y-6 order-1 md:order-2'>
						<h2 className='text-3xl md:text-4xl font-light text-gray-800'>Обо мне</h2>
						<p className='text-gray-600 leading-relaxed'>Я практикую массаж уже более 7 лет. За это время я помогла сотням людей обрести гармонию с собой, избавиться от хронических болей и стресса.</p>
						<p className='text-gray-600 leading-relaxed'>Моя специализация — энергомассаж, который сочетает в себе классические техники и работу с энергетическими центрами тела. Я верю, что настоящее исцеление начинается с внутреннего баланса.</p>
						<div className='space-y-4 pt-4'>
							{features.map((feature, index) => (
								<div key={index} className='flex items-start gap-3'>
									<div className='w-2 h-2 bg-amber-700 rounded-full mt-2'></div>
									<div>
										<div className='font-medium text-gray-800'>{feature.title}</div>
										<div className='text-sm text-gray-600'>{feature.description}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
