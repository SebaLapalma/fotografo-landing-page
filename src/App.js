import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const FotografoLanding = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent('Nuevo mensaje desde la web');
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\n\nMensaje:\n${formData.mensaje}`
    );
    
    window.location.href = `mailto:e.sebastian.lapalma@gmail.com?subject=${subject}&body=${body}`;
    
    alert('Se abrirá tu cliente de correo. ¡Gracias por contactar!');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openGallery = (galleryIndex) => {
    setSelectedGallery(galleryIndex);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery !== null) {
      const totalImages = galleryItems[selectedGallery].fullGallery.length;
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (selectedGallery !== null) {
      const totalImages = galleryItems[selectedGallery].fullGallery.length;
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  const galleryItems = [
    {
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      title: 'Retratos',
      desc: 'Fotografía profesional de retratos',
      fullGallery: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=800&fit=crop'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop',
      title: 'Bodas',
      desc: 'Momentos especiales capturados',
      fullGallery: [
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
      title: 'Eventos',
      desc: 'Cobertura completa de eventos',
      fullGallery: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=400&fit=crop',
      title: 'Fotografía Comercial',
      desc: 'Productos y publicidad',
      fullGallery: [
        'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
      title: 'Paisajes',
      desc: 'Naturaleza y exteriores',
      fullGallery: [
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop',
      title: 'Familia',
      desc: 'Sesiones familiares memorables',
      fullGallery: [
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542359649-31e03cd4d909?w=1200&h=800&fit=crop'
      ]
    }
  ];

  const services = [
    { icon: '📸', title: 'Retratos', desc: 'Sesiones de retratos profesionales en estudio o locación. Capturamos tu esencia única.' },
    { icon: '💍', title: 'Bodas', desc: 'Cobertura completa de tu día especial. Cada momento, cada emoción preservada.' },
    { icon: '🎉', title: 'Eventos', desc: 'Eventos corporativos, fiestas y celebraciones. Profesionalismo garantizado.' },
    { icon: '🏢', title: 'Comercial', desc: 'Fotografía de productos, publicidad y contenido para redes sociales.' }
  ];

  return (
    <div className="font-sans text-gray-800">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .whatsapp-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>

      <header className="fixed top-0 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg z-50">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-widest">SLP FOTO</div>
          <ul className="flex gap-8">
            <li><button onClick={() => scrollToSection('inicio')} className="hover:text-yellow-500 transition-colors font-medium">Inicio</button></li>
            <li><button onClick={() => scrollToSection('galeria')} className="hover:text-yellow-500 transition-colors font-medium">Galería</button></li>
            <li><button onClick={() => scrollToSection('servicios')} className="hover:text-yellow-500 transition-colors font-medium">Servicios</button></li>
            <li><button onClick={() => scrollToSection('contacto')} className="hover:text-yellow-500 transition-colors font-medium">Contacto</button></li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&h=900&fit=crop)'
          }}
        />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInUp">Sebastian Lapalma</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeInUp animate-delay-200">Fotógrafo Profesional | Capturando momentos únicos</p>
          <button 
            onClick={() => scrollToSection('contacto')} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 hover:shadow-2xl animate-fadeInUp animate-delay-400"
          >
            Contactar
          </button>
        </div>
      </section>

      <section id="galeria" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Galería de Trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => openGallery(index)}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
                <p className="text-sm mt-2 text-yellow-400">Click para ver más →</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedGallery !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
          >
            <X size={40} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-yellow-500 transition-colors"
          >
            <ChevronLeft size={50} />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={galleryItems[selectedGallery].fullGallery[currentImageIndex]}
              alt={`${galleryItems[selectedGallery].title} ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold mb-2">
                {galleryItems[selectedGallery].title}
              </h3>
              <p className="text-gray-300 mb-4">
                Imagen {currentImageIndex + 1} de {galleryItems[selectedGallery].fullGallery.length}
              </p>
              <div className="flex justify-center gap-2">
                {galleryItems[selectedGallery].fullGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-yellow-500 w-8' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-yellow-500 transition-colors"
          >
            <ChevronRight size={50} />
          </button>
        </div>
      )}

      <section id="servicios" className="py-20 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg text-center shadow-lg hover:-translate-y-3 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contacto</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block font-bold mb-2 text-gray-900">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-bold mb-2 text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block font-bold mb-2 text-gray-900">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block font-bold mb-2 text-gray-900">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors resize-y"
            />
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 hover:shadow-xl"
          >
            Enviar Mensaje
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              title="Instagram"
            >
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              title="Facebook"
            >
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              title="X (Twitter)"
            >
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              title="LinkedIn"
            >
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400">&copy; 2025 Sebastian Lapalma - Fotógrafo Profesional. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/5493454019821"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 whatsapp-bounce"
        title="Contactar por WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.164 0 0 7.164 0 16C0 18.777 0.722 21.403 2.022 23.684L0.691 31.309L8.564 29.997C10.769 31.174 13.303 31.838 16 31.838C24.836 31.838 32 24.674 32 15.838C32 7.002 24.836 0 16 0ZM16 29.186C13.536 29.186 11.189 28.548 9.138 27.423L8.624 27.118L3.733 28.267L4.902 23.502L4.566 22.964C3.321 20.847 2.652 18.484 2.652 16C2.652 8.626 8.626 2.652 16 2.652C23.374 2.652 29.348 8.626 29.348 16C29.348 23.374 23.374 29.186 16 29.186ZM23.338 19.503C22.957 19.313 21.057 18.38 20.705 18.256C20.353 18.132 20.095 18.07 19.837 18.451C19.579 18.832 18.836 19.694 18.607 19.952C18.378 20.21 18.149 20.243 17.768 20.053C17.387 19.863 16.142 19.462 14.671 18.154C13.519 17.129 12.739 15.867 12.51 15.486C12.281 15.105 12.483 14.896 12.673 14.707C12.846 14.534 13.054 14.257 13.244 14.028C13.434 13.799 13.496 13.632 13.62 13.374C13.744 13.116 13.682 12.887 13.587 12.697C13.492 12.507 12.715 10.604 12.394 9.842C12.083 9.1 11.767 9.198 11.531 9.186L10.826 9.174C10.568 9.174 10.156 9.269 9.804 9.65C9.452 10.031 8.456 10.964 8.456 12.867C8.456 14.77 9.837 16.611 10.027 16.869C10.217 17.127 12.728 21.046 16.586 22.723C17.465 23.104 18.152 23.326 18.688 23.492C19.572 23.765 20.375 23.727 21.01 23.63C21.722 23.522 23.243 22.756 23.564 21.91C23.885 21.064 23.885 20.343 23.79 20.186C23.695 20.029 23.437 19.934 23.056 19.744L23.338 19.503Z" fill="white"/>
        </svg>
      </a>
    </div>
  );
};

export default FotografoLanding;