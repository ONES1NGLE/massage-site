// components/Services.jsx
import React, { useState } from 'react';
import { X, Clock, DollarSign, Info } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Классический массаж',
      description: 'Глубокая проработка мышц, снятие напряжения и усталости',
      price: '3000₽',
      duration: '60 мин',
      fullDescription: 'Классический массаж — это проверенная временем техника, направленная на глубокую проработку всех групп мышц. Во время сеанса используются различные приёмы: поглаживание, растирание, разминание и вибрация.',
      benefits: [
        'Снятие мышечного напряжения и спазмов',
        'Улучшение кровообращения и лимфотока',
        'Устранение болей в спине и суставах',
        'Повышение общего тонуса организма',
        'Глубокое расслабление и снятие стресса'
      ],
      process: 'Сеанс начинается с лёгких поглаживающих движений для разогрева мышц. Затем мастер переходит к более интенсивной проработке проблемных зон. Завершается массаж успокаивающими приёмами для закрепления эффекта.'
    },
    {
      title: 'Энергетический массаж',
      description: 'Балансировка энергетических центров, работа с чакрами',
      price: '4000₽',
      duration: '90 мин',
      fullDescription: 'Энергетический массаж сочетает в себе классические техники и работу с энергетическими центрами тела. Это глубокая практика, направленная на восстановление энергетического баланса и гармонизацию внутреннего состояния.',
      benefits: [
        'Балансировка энергетических центров (чакр)',
        'Снятие энергетических блоков',
        'Восстановление внутренней гармонии',
        'Улучшение эмоционального состояния',
        'Повышение жизненной энергии и тонуса'
      ],
      process: 'Сеанс проходит в спокойной атмосфере с использованием ароматических масел и расслабляющей музыки. Мастер работает не только с физическим телом, но и с энергетическими каналами, помогая восстановить естественный поток энергии.'
    },
    {
      title: 'Массаж лица и головы',
      description: 'Омоложение, снятие стресса, улучшение цвета лица',
      price: '2500₽',
      duration: '45 мин',
      fullDescription: 'Массаж лица и головы — это деликатная техника, которая помогает не только расслабиться, но и заметно улучшить состояние кожи. Воздействие на биологически активные точки способствует омоложению и улучшению цвета лица.',
      benefits: [
        'Улучшение цвета и тонуса кожи лица',
        'Разглаживание мелких морщин',
        'Снятие напряжения с мышц лица и шеи',
        'Устранение головных болей',
        'Глубокое расслабление и улучшение сна'
      ],
      process: 'Массаж начинается с очищения кожи и нанесения специального масла. Мастер деликатно прорабатывает все зоны лица, шеи и волосистой части головы, уделяя особое внимание точкам напряжения. Сеанс завершается успокаивающей маской.'
    }
  ];

  const scrollToSection = (id, serviceName = null) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Передаём выбранную услугу в форму через custom event
      if (serviceName) {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('selectService', { detail: serviceName }));
        }, 500);
      }
    }
  };

  return (
    <>
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту. Все техники массажа направлены на восстановление и гармонизацию
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-gray-800">{service.title}</h3>
                  <span className="text-sm text-amber-800 bg-amber-100 px-3 py-1 rounded-full">{service.duration}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-light text-amber-800">{service.price}</span>
                  <button 
                    onClick={() => {
                      scrollToSection('contact', service.title);
                    }}
                    className="text-amber-700 hover:text-amber-800 font-medium"
                  >
                    Записаться →
                  </button>
                </div>
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full mt-4 px-4 py-2 border-2 border-amber-700 text-amber-700 rounded-xl hover:bg-amber-700 hover:text-white transition flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full my-8 relative animate-fadeIn">
            {/* Заголовок */}
            <div className="sticky top-0 bg-gradient-to-r from-amber-100 to-stone-100 p-6 rounded-t-3xl border-b border-amber-200">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 pr-12">{selectedService.title}</h3>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2 text-amber-800">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">{selectedService.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-sm font-medium">{selectedService.price}</span>
                </div>
              </div>
            </div>

            {/* Контент */}
            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Описание */}
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Описание</h4>
                <p className="text-gray-600 leading-relaxed">{selectedService.fullDescription}</p>
              </div>

              {/* Польза */}
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Польза от процедуры</h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Как проходит */}
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Как проходит сеанс</h4>
                <p className="text-gray-600 leading-relaxed">{selectedService.process}</p>
              </div>
            </div>

            {/* Кнопка записи */}
            <div className="sticky bottom-0 bg-white p-6 border-t border-gray-200 rounded-b-3xl">
              <button
                onClick={() => {
                  setSelectedService(null);
                  scrollToSection('contact', selectedService.title);
                }}
                className="w-full px-8 py-4 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition shadow-lg hover:shadow-xl"
              >
                Записаться на процедуру
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;