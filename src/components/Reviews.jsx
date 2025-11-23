// components/Reviews.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  // Массив путей к изображениям отзывов
  const reviewImages = [
    '/src/images/reviews/reviews_1.jpg',
    'src/images/reviews/reviews_2.jpg',
    'src/images/reviews/reviews_3.jpg',
    'src/images/reviews/reviews_4.jpg',
    'src/images/reviews/reviews_5.jpg',
    'src/images/reviews/reviews_6.jpg',
    'src/images/reviews/reviews_7.jpg',
    'src/images/reviews/reviews_8.jpg',
    'src/images/reviews/reviews_9.jpg',
    'src/images/reviews/reviews_10.jpg',
    'src/images/reviews/reviews_11.jpg',
    'src/images/reviews/reviews_12.jpg',
    'src/images/reviews/reviews_13.jpg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Обработка свайпов
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Обработка клавиш
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600">Реальные отзывы людей, которые уже посетили мои сеансы</p>
        </div>

        {/* Карусель */}
        <div className="relative max-w-4xl mx-auto">
          {/* Контейнер карусели */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviewImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full flex items-center justify-center p-2"
                >
                  <div className="relative w-full">
                    <img
                      src={image}
                      alt={`Отзыв ${index + 1}`}
                      className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации для десктопа */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow-lg transition z-10"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow-lg transition z-10"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          {/* Счётчик */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium">
            {currentIndex + 1} / {reviewImages.length}
          </div>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-6">
          {reviewImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-amber-700'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>

        {/* Подсказки управления */}
        <div className="text-center mt-4">
          <div className="text-sm text-gray-500">
            <span className="hidden md:inline">Используйте стрелки ← → для навигации</span>
            <span className="md:hidden">Свайпайте влево или вправо</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;