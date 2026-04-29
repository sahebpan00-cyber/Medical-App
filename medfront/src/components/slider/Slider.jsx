import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';
import { FaCalendarAlt, FaStethoscope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const bannerData = [
    {
      id: 1,
      title: "Your Health, Our Priority",
      subtitle: "Book Doctor Appointments Anytime, Anywhere",
      description: "Experience premium healthcare with certified doctors, modern facilities, and 24/7 emergency support.",
      background: "linear-gradient(135deg, rgba(14, 165, 165, 0.8) 0%, rgba(16, 185, 129, 0.8) 100%)",
      image: null
    },
    {
      id: 2,
      title: "Expert Medical Care",
      subtitle: "Trusted by Thousands of Patients",
      description: "Access to 500+ certified doctors and comprehensive healthcare services at your fingertips.",
      background: "linear-gradient(135deg, rgba(6, 182, 212, 0.8) 0%, rgba(14, 165, 165, 0.8) 100%)",
      image: null
    }
  ];

  return (
    <section className="slider-section">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id} className="slider-slide">
            <div 
              className="slide-background"
              style={{ background: slide.background }}
            >
              {/* Animated Background Decoration */}
              <div className="slide-decoration-1"></div>
              <div className="slide-decoration-2"></div>

              {/* Content */}
              <div className="slide-content">
                <div className="container">
                  <div className="slide-text-group">
                    <h1 className={`slide-title ${activeSlide === bannerData.indexOf(slide) ? 'animate' : ''}`}>
                      {slide.title}
                    </h1>
                    <h2 className={`slide-subtitle ${activeSlide === bannerData.indexOf(slide) ? 'animate' : ''}`}>
                      {slide.subtitle}
                    </h2>
                    <p className={`slide-description ${activeSlide === bannerData.indexOf(slide) ? 'animate' : ''}`}>
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className={`slide-buttons ${activeSlide === bannerData.indexOf(slide) ? 'animate' : ''}`}>
                      <button className="btn btn-primary btn-lg btn-white">
                        <FaCalendarAlt size={18} />
                        Book Appointment
                      </button>
                      <Link to={"/doctors"} className="btn btn-secondary btn-lg btn-outline-white">
                        <FaStethoscope size={18} />
                        Find a Doctor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
