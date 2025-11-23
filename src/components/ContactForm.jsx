// components/ContactForm.jsx
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { contacts, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../config/contacts'

const ContactForm = () => {
	const [formData, setFormData] = useState({ name: '', phone: '', telegram: '@', message: '', service: '' })
	const [formStatus, setFormStatus] = useState('')

	// Слушаем событие выбора услуги
	useEffect(() => {
		const handleServiceSelect = event => {
			setFormData(prev => ({ ...prev, service: event.detail }))
		}

		window.addEventListener('selectService', handleServiceSelect)
		return () => window.removeEventListener('selectService', handleServiceSelect)
	}, [])

	// Функция отправки в Telegram
	const sendToTelegram = async () => {
		if (!formData.name || !formData.phone) {
			setFormStatus('error')
			setTimeout(() => setFormStatus(''), 3000)
			return
		}

		setFormStatus('sending')

		const message = `🔔 НОВАЯ ЗАЯВКА С САЙТА

👤 Имя: ${formData.name}
✈️ Telegram: ${formData.telegram}
📱 Телефон: ${formData.phone}
${formData.service ? `💆‍♀️ Услуга: ${formData.service}` : ''}
💬 Сообщение: ${formData.message || 'Не указано'}

⏰ Дата: ${new Date().toLocaleString('ru-RU')}`

		try {
			const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: TELEGRAM_CHAT_ID,
					text: message,
					parse_mode: 'HTML',
				}),
			})

			if (response.ok) {
				setFormStatus('success')
				setFormData({ name: '', phone: '', telegram: '@', message: '', service: '' })
				setTimeout(() => setFormStatus(''), 5000)
			} else {
				throw new Error('Failed to send')
			}
		} catch (error) {
			setFormStatus('error')
			setTimeout(() => setFormStatus(''), 5000)
		}
	}

	return (
		<section id='contact' className='py-20 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>Свяжитесь со мной</h2>
					<p className='text-gray-600'>Выберите удобный способ связи или оставьте заявку</p>
				</div>

				{/* Быстрые контакты */}
				<div className='grid md:grid-cols-2 gap-4 mb-12'>
					<a href={`https://wa.me/${contacts.whatsapp}`} target='_blank' rel='noopener noreferrer' className='bg-green-500 text-white p-6 rounded-2xl hover:bg-green-600 transition shadow-lg hover:shadow-xl text-center'>
						<MessageCircle className='w-8 h-8 mx-auto mb-2' />
						<div className='font-medium'>WhatsApp</div>
					</a>
					<a href={`https://t.me/${contacts.telegram}`} target='_blank' rel='noopener noreferrer' className='bg-blue-500 text-white p-6 rounded-2xl hover:bg-blue-600 transition shadow-lg hover:shadow-xl text-center'>
						<Send className='w-8 h-8 mx-auto mb-2' />
						<div className='font-medium'>Telegram</div>
					</a>
				</div>

				{/* Форма обратной связи */}
				<div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12'>
					<h3 className='text-2xl font-light text-gray-800 mb-6 text-center'>Или оставьте заявку</h3>
					<div className='space-y-6'>
						{/* Выбранная услуга (если есть) */}
						{formData.service && (
							<div className='bg-amber-50 border-2 border-amber-200 rounded-xl p-4'>
								<div className='flex items-center justify-between'>
									<div>
										<div className='text-sm text-amber-700 font-medium'>Выбранная услуга:</div>
										<div className='text-lg text-gray-800 font-medium'>{formData.service}</div>
									</div>
									<button onClick={() => setFormData({ ...formData, service: '' })} className='text-amber-700 hover:text-amber-800 text-sm underline'>
										Изменить
									</button>
								</div>
							</div>
						)}

						<div>
							<label className='block text-gray-700 mb-2 font-medium'>Ваше имя *</label>
							<input type='text' value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition' placeholder='Анна' required />
						</div>
						<div>
							<label className='block text-gray-700 mb-2 font-medium'>Ваш Telegram *</label>
							<input type='text' value={formData.telegram} onChange={e => setFormData({ ...formData, telegram: e.target.value })} className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition' placeholder='@username' required />
						</div>
						<div>
							<label className='block text-gray-700 mb-2 font-medium'>Телефон *</label>

							<IMaskInput mask='+{7} (000) 000-00-00' value={formData.phone} onAccept={value => setFormData({ ...formData, phone: value })} className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition' placeholder='+7 (___) ___-__-__' required />
						</div>

						<div>
							<label className='block text-gray-700 mb-2 font-medium'>Сообщение</label>
							<textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows='4' className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition' placeholder='Расскажите о ваших пожеланиях или вопросах...' />
						</div>
						<button onClick={sendToTelegram} disabled={formStatus === 'sending'} className='w-full px-8 py-4 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50'>
							{formStatus === 'sending' ? (
								'Отправка...'
							) : (
								<>
									<Send className='w-5 h-5' />
									Отправить заявку
								</>
							)}
						</button>
						{formStatus === 'success' && <div className='text-center text-green-600 font-medium bg-green-50 p-4 rounded-xl'>✓ Заявка отправлена! Я свяжусь с вами в ближайшее время.</div>}
						{formStatus === 'error' && <div className='text-center text-red-600 font-medium bg-red-50 p-4 rounded-xl'>✗ Ошибка отправки. Попробуйте связаться через WhatsApp или Telegram напрямую.</div>}
					</div>
					<div className='mt-10 pt-10 border-t border-gray-200'>
						<div className='grid md:grid-cols-2 gap-6'>
							<div className='flex items-center gap-3'>
								<Mail className='w-6 h-6 text-amber-700' />
								<div>
									<div className='text-sm text-gray-600'>Email</div>
									<div className='font-medium text-gray-800'>{contacts.email}</div>
								</div>
							</div>
							<div className='flex items-center gap-3'>
								<MapPin className='w-6 h-6 text-amber-700' />
								<div>
									<div className='text-sm text-gray-600'>Адрес</div>
									<div className='font-medium text-gray-800'>{contacts.address}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactForm
