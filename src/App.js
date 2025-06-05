import React, { useState } from 'react'; // Importa React y el hook useState
// Se han eliminado los iconos que no se utilizan para evitar errores de compilación
import { Gift, Tag, Flame, Cigarette, VenetianMask, Droplet, Scissors, Home, Info, Trophy, MoreVertical } from 'lucide-react'; // Importa solo los iconos necesarios de Lucide

// Componente para el icono personalizado del secador de pelo (HairDryerIcon)
const HairDryerIcon = ({ size = 24, className = "text-blue-400" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 10h.01"></path>
    <path d="M18.4 7.6a2.17 2.17 0 0 0-2.2-2.2c-.7 0-1.4.3-1.8.8l-1.3 1.3c-.4.4-.8 1-.8 1.8a2.17 2.17 0 0 0 2.2 2.2c.7 0 1.4-.3 1.8-.8l1.3-1.3c.4-.4.8-1 .8-1.8z"></path>
    <path d="M12.5 15.5l-2 2a2.12 2.12 0 0 1-3 0l-4.5-4.5a2.12 2.12 0 0 1 0-3l2-2"></path>
    <path d="M17.5 6.5l-2-2a2.12 2.12 0 0 0-3 0l-4.5 4.5c-.8.8-.8 2.2 0 3l2 2"></path>
    <path d="M19 12l-1-1"></path>
    <path d="M22 15l-1-1"></path>
  </svg>
);

// Componente principal de la aplicación
const App = () => {
  // Estado para controlar la pestaña activa, por defecto es 'home'
  const [activeTab, setActiveTab] = useState('home');

  // Definición de los niveles de lealtad con sus recompensas y beneficios
  const loyaltyLevels = [
    {
      name: 'Aprendiz del Corte',
      icon: '👑', // Ícono de marcador de posición
      spend: 'Sin necesidad de gasto mínimo',
      levelRewards: [ // Recompensas directas por estar en este nivel
        '5% de descuento en todos los productos, servicios y membresías (1 solo uso, 6 meses de caducidad)',
        'COP 5,000 de descuento en todos los productos y servicios (1 solo uso, 6 meses de caducidad)',
        'Servicio gratuito de cerquillo o afeitado de ceja (1 solo uso, 6 meses de caducidad)',
      ],
      levelPerks: [], // Nivel 1: No tiene perks específicos adicionales
      bgColor: 'bg-[#9fa5b5]', // Color de fondo para Aprendiz - Actualizado
      // Reemplaza esta URL con la URL de tu imagen alojada en GitHub
      image: 'https://placehold.co/400x250/E0E0E0/333333?text=Nivel+Aprendiz',
    },
    {
      name: 'La Hermandad de la Barba',
      icon: '🧔', // Ícono de marcador de posición
      spend: 'Gasta COP 300,000',
      levelRewards: [ // Nivel 2: Recompensas
        'COP 25,000 de descuento en productos (1 solo uso, 6 meses de caducidad)',
        '1 servicio principal gratis (Blower, Corte de cabello, Corte de barba o Repolarización) (1 solo uso, 6 meses de caducidad)',
        '1 servicio secundario gratis (Cerquillo, Degrade, Afeitado de cejas, Higiene facial o Mascarilla facial negra) (1 solo uso, 6 meses de caducidad)',
        '1 producto gratis seleccionado (1 solo uso, 6 meses de caducidad)',
      ],
      levelPerks: [ // Nivel 2: Perks - Ordenado
        '1 Gaseosa Pequeña (por cada visita al adquirir servicios seleccionados)',
        'Cejas ilimitadas (por cada visita al adquirir servicios principales)',
        'Cerquillo ilimitado (por cada visita al adquirir servicios principales)',
      ],
      bgColor: 'bg-[#bb264c]', // Color de fondo para Hermandad - Actualizado
      // Reemplaza esta URL con la URL de tu imagen alojada en GitHub
      image: 'https://placehold.co/400x250/DC2626/FFFFFF?text=Nivel+Hermandad',
    },
    {
      name: 'Círculo de la Cuchilla Dorada',
      icon: '🏅', // Ícono de marcador de posición
      spend: 'Gasta COP 700,000',
      levelRewards: [ // Nivel 3: Recompensas
        'COP 25,000 de descuento en productos (1 solo uso, 6 meses de caducidad)',
        '1 servicio principal gratis (Blower, Corte de cabello, Corte de barba o Repolarización) (1 solo uso, 6 meses de caducidad)',
        '1 servicio secundario gratis (Cerquillo, Degrade, Afeitado de cejas, Higiene facial o Mascarilla facial negra) (1 solo uso, 6 meses de caducidad)',
        'COP 25,000 de descuento en todos los servicios (1 solo uso, 6 meses de caducidad)',
        'COP 50,000 de descuento en productos, servicios y membresías (1 solo uso, 6 meses de caducidad)',
      ],
      levelPerks: [ // Nivel 3: Perks - Ordenado
        '1 Gaseosa Pequeña O 1 Cerveza Pequeña (por cada visita al adquirir servicios seleccionados)',
        'Cejas ilimitadas (por cada visita al adquirir servicios principales)',
        'Cerquillo ilimitado (por cada visita al adquirir servicios principales)',
      ],
      bgColor: 'bg-[#d4a541]', // Color de fondo para Cuchilla Dorada - Actualizado
      // Reemplaza esta URL con la URL de tu imagen alojada en GitHub
      image: 'https://placehold.co/400x250/F59E0B/FFFFFF?text=Nivel+Cuchilla',
    },
    {
      name: 'El Corazón de la Hermandad',
      icon: '❤️', // Ícono de marcador de posición
      spend: 'Gasta COP 1,800,000',
      levelRewards: [ // Nivel 4: Recompensas
        '10% de descuento (Uso ilimitado, Beneficio Permanente del Nivel)',
        '5% de descuento (Uso ilimitado, Beneficio Permanente del Nivel)',
        '30% de descuento en todo (1 solo uso, 6 meses de caducidad)',
        '1 servicio principal gratis (Blower, Corte de cabello, Corte de barba o Repolarización) (1 solo uso, 6 meses de caducidad)',
        '1 servicio secundario gratis (Cerquillo, Degrade, Afeitado de cejas, Higiene facial o Mascarilla facial negra) (1 solo uso, 6 meses de caducidad)',
        'COP 50,000 de descuento en productos, servicios y membresías (1 solo uso, 6 meses de caducidad)',
        'COP 50,000 de descuento en productos (1 solo uso, 6 meses de caducidad)',
        'COP 25,000 de descuento en servicios (1 solo uso, 6 meses de caducidad)',
        'COP 25,000 de descuento en servicios (1 solo uso, 6 meses de caducidad)',
      ],
      levelPerks: [ // Nivel 4: Perks - Ordenado
        '1 Gaseosa Personal O 1 Cerveza Pequeña (por cada visita al adquirir servicios seleccionados)',
        'Cejas ilimitadas (servicios principales)',
        'Cerquillo ilimitado (servicios principales)',
        '1 producto seleccionado al mes',
      ],
      bgColor: 'bg-[#208002]', // Color de fondo para Corazón - Actualizado
      // Reemplaza esta URL con la URL de tu imagen alojada en GitHub
      image: 'https://placehold.co/400x250/10B981/FFFFFF?text=Nivel+Corazon',
    },
    {
      name: 'El Embajador del Estilo',
      icon: '✨', // Ícono de marcador de posición
      spend: 'Gasta COP 3,600,000',
      levelRewards: [ // Nivel 5: Recompensas
        '15% de descuento (Uso ilimitado, Beneficio Permanente del Nivel)',
        '10% de descuento (Uso ilimitado, Beneficio Permanente del Nivel)',
        'Todos los servicios gratuitos (1 solo uso, 6 meses de caducidad)',
        'COP 50,000 de descuento en productos, servicios y membresías (1 solo uso, 6 meses de caducidad)',
        'COP 50,000 de descuento en productos (1 solo uso, 6 meses de caducidad)',
        'COP 25,000 de descuento en servicios (1 solo uso, 6 meses de caducidad)',
        'COP 25,000 de descuento en servicios (1 solo uso, 6 meses de caducidad)',
        'COP 50,000 de descuento en todos los servicios (1 solo uso, 6 meses de caducidad)',
        '100% de descuento en 1 membresía (1 solo uso, 6 meses de caducidad)',
        'COP 100,000 de descuento en servicios, membresías y productos (1 solo uso, 6 meses de caducidad)',
        'COP 30,000 de descuento en membresías, productos y servicios (1 solo uso, 6 meses de caducidad)',
      ],
      levelPerks: [ // Nivel 5: Perks - Ordenado
        '1 Gaseosa Personal O 1 Cerveza Personal (por cada visita al adquirir servicios seleccionados)',
        'Cejas ilimitadas (servicios principales)',
        'Cerquillo ilimitado (servicios principales)',
        '1 producto seleccionado al mes',
        '1 servicio seleccionado al mes',
      ],
      bgColor: 'bg-[#3b4acb]', // Color de fondo para Embajador - Actualizado
      // Reemplaza esta URL con la URL de tu imagen alojada en GitHub
      image: 'https://placehold.co/400x250/3B82F6/FFFFFF?text=Nivel+Embajador',
    },
  ];

  // Recompensas canjeables por puntos (basadas en la lista proporcionada por el usuario, excluyendo las de membresía)
  const redeemableRewards = [
    {
      name: 'Cigarrillo por Unidad',
      cost: '20,000 puntos',
      description: 'Canjea tus puntos por un cigarrillo por unidad.',
      icon: <Cigarette size={24} className="text-gray-600" />, // Icono de cigarrillo
    },
    {
      name: 'Encendedor',
      cost: '40,000 puntos',
      description: 'Canjea tus puntos por un encendedor.',
      icon: <Flame size={24} className="text-orange-500" />, // Icono de encendedor/llama
    },
    {
      name: 'Descuento de COP 5,000 en servicios, productos o membresías',
      cost: '80,000 puntos',
      description: 'Aplica un descuento de COP 5,000 en servicios, productos o membresías (compra mínima COP 15,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Cerquillo o Cejas',
      cost: '90,000 puntos',
      description: 'Disfruta de un servicio gratuito de cerquillo o cejas.',
      icon: <Scissors size={24} className="text-red-600" />, // Icono de tijeras
    },
    {
      name: 'Descuento de COP 5,000 en servicios, productos y membresías',
      cost: '100,000 puntos',
      description: 'Aplica un descuento de COP 5,000 en servicios, productos y membresías (compra mínima COP 15,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Descuento de COP 10,000 en productos',
      cost: '160,000 puntos',
      description: 'Aplica un descuento de COP 10,000 en productos (compra mínima COP 10,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Mascarilla Facial',
      cost: '180,000 puntos',
      description: 'Disfruta de un servicio gratuito de mascarilla facial.',
      icon: <VenetianMask size={24} className="text-purple-600" />, // Icono de máscara veneciana
    },
    {
      name: 'Descuento de COP 10,000 en servicios, membresías y productos',
      cost: '200,000 puntos',
      description: 'Aplica un descuento de COP 10,000 en servicios, membresías y productos (compra mínima COP 25,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Higiene Facial',
      cost: '270,000 puntos',
      description: 'Disfruta de un servicio gratuito de higiene facial.',
      icon: <Droplet size={24} className="text-blue-500" />, // Icono de gota para limpieza
    },
    {
      name: 'Corte de Barba o Afeitado de Cabeza',
      cost: '290,000 puntos',
      description: 'Disfruta de un servicio gratuito de corte de barba o afeitado de cabeza.',
      icon: <Scissors size={24} className="text-gray-700" />, // Icono de tijeras
    },
    {
      name: 'Descuento de COP 20,000 en productos',
      cost: '300,000 puntos',
      description: 'Aplica un descuento de COP 20,000 en productos (compra mínima COP 40,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Descuento de COP 20,000 en servicios, membresías y productos',
      cost: '400,000 puntos',
      description: 'Aplica un descuento de COP 20,000 en servicios, membresías y productos (compra mínima COP 40,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Corte de Cabello',
      cost: '440,000 puntos',
      description: 'Disfruta de un servicio gratuito de corte de cabello.',
      icon: <Scissors size={24} className="text-red-600" />, // Icono de tijeras
    },
    {
      name: 'Descuento de COP 30,000 en productos',
      cost: '450,000 puntos',
      description: 'Aplica un descuento de COP 30,000 en productos (compra mínima COP 50,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Blower',
      cost: '600,000 puntos',
      description: 'Disfruta de un servicio gratuito de Blower.',
      icon: <HairDryerIcon size={24} className="text-blue-400" />, // Icono de secador de pelo
    },
    {
      name: 'Descuento de COP 30,000 en servicios, membresías y productos',
      cost: '600,000 puntos',
      description: 'Aplica un descuento de COP 30,000 en servicios, membresías y productos (compra mínima COP 50,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Descuento de COP 50,000 en productos',
      cost: '700,000 puntos',
      description: 'Aplica un descuento de COP 50,000 en productos (compra mínima COP 100,000).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
    {
      name: 'Descuento de COP 50,000 en servicios, membresías y productos',
      cost: '1,000,000 puntos',
      description: 'Aplica un descuento de COP 50,000 en servicios, membresías y productos (sin compra mínima).',
      icon: <Tag size={24} className="text-green-600" />, // Icono de etiqueta de descuento
    },
  ];

  // Estado para el índice del nivel actual en el slider de "Nuestros Niveles"
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

  // Estados para gestionar los eventos táctiles (swipe)
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Funciones para navegar entre niveles en el slider
  const goToPreviousLevel = () => {
    setCurrentLevelIndex((prevIndex) =>
      prevIndex === 0 ? loyaltyLevels.length - 1 : prevIndex - 1
    );
  };

  const goToNextLevel = () => {
    setCurrentLevelIndex((prevIndex) =>
      prevIndex === loyaltyLevels.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Manejador de evento al tocar la pantalla (inicio del swipe)
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(0); // Reiniciar touchEndX al inicio de un nuevo toque
  };

  // Manejador de evento al mover el dedo sobre la pantalla
  const handleTouchMove = (e) => {
    // Solo actualizamos touchEndX, la lógica de navegación se ejecuta en touchEnd
    setTouchEndX(e.touches[0].clientX);
  };

  // Manejador de evento al levantar el dedo de la pantalla (fin del swipe)
  const handleTouchEnd = () => {
    if (touchEndX === 0) return; // Si no hubo movimiento, no hacer nada

    const distance = touchEndX - touchStartX;
    const minSwipeDistance = 50; // Distancia mínima para considerar un swipe

    if (distance > minSwipeDistance) {
      // Deslizado hacia la derecha (anterior nivel)
      goToPreviousLevel();
    } else if (distance < -minSwipeDistance) {
      // Deslizado hacia la izquierda (siguiente nivel)
      goToNextLevel();
    }
    // Reiniciar estados de toque después de la interacción
    setTouchStartX(0);
    setTouchEndX(0);
  };


  // Obtener el nivel actual para mostrar en el slider
  const currentLevel = loyaltyLevels[currentLevelIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      {/* Tab Navigation - Siempre visible */}
      <nav className="w-full max-w-4xl bg-white p-2 rounded-lg shadow-xl mb-10 flex justify-center space-x-2 md:space-x-4 flex-wrap">
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'home' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('home')}
          aria-label="Inicio"
        >
          <Home className="inline-block mr-2" size={20} /> {/* Icono de casa */}
          Inicio
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'como_funciona' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('como_funciona')}
        >
          <Info className="inline-block mr-2" size={20} /> {/* Icono de información */}
          Cómo Funciona
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'niveles' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('niveles')}
        >
          <Trophy className="inline-block mr-2" size={20} /> {/* Icono de trofeo para niveles */}
          Nuestros Niveles
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'lista_recompensas' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('lista_recompensas')}
        >
          <Gift className="inline-block mr-2" size={20} /> {/* Icono de regalo para lista de recompensas */}
          Lista de Recompensas
        </button>
      </nav>

      {/* Contenido basado en la pestaña activa */}
      <div className="w-full max-w-4xl">
        {activeTab === 'home' && (
          <section id="home-page" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[#004d40] to-[#00897b] text-white rounded-3xl shadow-2xl animate-fade-in"> {/* Color de fondo actualizado */}
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-center animate-fade-in-down">
              Bienvenido
            </h1>
            <p className="text-2xl md:text-3xl text-green-200 mb-10 text-center animate-fade-in">
              Donde el estilo se encuentra con la lealtad.
            </p>
            <div className="flex flex-col md:flex-row gap-6 mb-16">
              <button
                onClick={() => setActiveTab('como_funciona')}
                className="inline-block bg-white text-indigo-800 font-extrabold py-4 px-12 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 text-xl md:text-2xl animate-bounce-in"
              >
                Descubre Nuestro Programa
              </button>
              <button
                onClick={() => setActiveTab('niveles')}
                className="inline-block bg-transparent border-2 border-white text-white font-extrabold py-4 px-12 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-indigo-800 text-xl md:text-2xl animate-bounce-in"
              >
                Ver Niveles
              </button>
            </div>

            {/* Sección de Navegación a Secciones Principales */}
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Explora Nuestras Secciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              <div
                onClick={() => setActiveTab('como_funciona')}
                className="cursor-pointer text-center p-6 bg-white bg-opacity-20 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <span className="text-6xl mb-4 block">⭐</span>
                <h3 className="text-xl font-semibold text-white mb-2">Cómo Funciona</h3>
                <p className="text-green-100">Descubre cómo ganar puntos y subir de nivel.</p>
              </div>
              <div
                onClick={() => setActiveTab('niveles')}
                className="cursor-pointer text-center p-6 bg-white bg-opacity-20 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <span className="text-6xl mb-4 block">🏆</span> {/* Icono de trofeo */}
                <h3 className="text-xl font-semibold text-white mb-2">Nuestros Niveles</h3>
                <p className="text-green-100">Explora los beneficios exclusivos de cada nivel.</p>
              </div>
              <div
                onClick={() => setActiveTab('lista_recompensas')}
                className="cursor-pointer text-center p-6 bg-white bg-opacity-20 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <span className="text-6xl mb-4 block">🎁</span> {/* Icono de regalo */}
                <h3 className="text-xl font-semibold text-white mb-2">Lista de Recompensas</h3>
                <p className="text-green-100">Consulta el detalle de todas las recompensas.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'como_funciona' && (
          <section id="como-funciona" className="bg-gray-100 p-4 rounded-xl animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cómo Funciona Nuestro Programa de Lealtad</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Nuestro programa de lealtad está diseñado para premiar tu compromiso con nosotros. ¡Es simple y gratificante!
            </p>

            {/* Cápsula para "Acumula Puntos" */}
            <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Acumula Puntos</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Gana puntos con cada interacción y compra. Estos puntos te acercan a recompensas exclusivas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-blue-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">🛍️</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-2">Por Cada Compra</h3>
                    <p className="text-gray-600">Gana <span className="font-bold">1 punto por cada 1 COP</span> gastado. ¡Tu lealtad se recompensa con cada adquisición!</p>
                  </div>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">✍️</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-2">Escribe una Reseña</h3>
                    <p className="text-gray-600">Obtén <span className="font-bold">1,000 puntos</span> por compartir tu valiosa opinión sobre nuestros productos o servicios.</p>
                  </div>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">🗓️</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-2">Reserva Online</h3>
                    <p className="text-gray-600">Consigue <span className="font-bold">5,000 puntos</span> cada vez que reserves nuestros servicios a través de nuestra plataforma web.</p>
                  </div>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">✅</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-2">Completa Citas</h3>
                    <p className="text-gray-600">¡Recibe <span className="font-bold">50,000 puntos</span> al completar 10 citas! Te premiamos por tu constancia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cápsula para "Asciende de Nivel" */}
            <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Asciende de Nivel</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Tu progreso en el programa se mide por el total de dinero que gastas con nosotros. A medida que tu gasto acumulado aumenta, desbloquearás nuevos niveles con beneficios aún más exclusivos. ¡Mantente atento a tu progreso y sube de categoría para disfrutar de mayores recompensas!
              </p>
              {/* Pequeña versión de los niveles */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {loyaltyLevels.map((level, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveTab('niveles'); // Cambia a la pestaña de niveles
                      setCurrentLevelIndex(index); // Muestra el nivel específico en el slider
                    }}
                    className={`cursor-pointer w-32 h-32 flex flex-col items-center justify-center p-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 ${level.bgColor} text-white text-center`}
                  >
                    <span className="text-4xl mb-1">{level.icon}</span>
                    <p className="text-sm font-bold leading-tight">{level.name}</p>
                    <p className="text-xs text-gray-100">{level.spend.replace('Gasta ', '')}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setActiveTab('niveles')}
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700 text-lg"
                >
                  Ver Detalles de Niveles
                </button>
              </div>
            </div>

            {/* Cápsula para "Canjea tus Recompensas" */}
            <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Canjea tus Recompensas</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Tus puntos acumulados pueden ser canjeados por una variedad de recompensas increíbles, diseñadas para mejorar tu experiencia con nosotros.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-yellow-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">💰</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-700 mb-2">Dinero de Descuento</h3>
                    <p className="text-gray-600">Canjea tus puntos por un valor monetario que puedes aplicar a tus compras o servicios.</p>
                  </div>
                </div>
                <div className="p-6 bg-yellow-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">🏷️</span>
                  <div>
                    <h3 className="2xl font-semibold text-yellow-700 mb-2">Porcentaje de Descuento</h3>
                    <p className="text-gray-600">Obtén un porcentaje de descuento en tus próximas compras o servicios.</p>
                  </div>
                </div>
                <div className="p-6 bg-yellow-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">🎁</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-700 mb-2">Productos Gratis</h3>
                    <p className="text-gray-600">¡Consigue productos seleccionados de forma gratuita con tus puntos!</p>
                  </div>
                </div>
                <div className="p-6 bg-yellow-50 rounded-lg shadow-md flex items-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl mr-5">✂️</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-700 mb-2">Servicios Gratis</h3>
                    <p className="text-gray-600">Disfruta de servicios gratuitos al canjear tus puntos acumulados.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'niveles' && (
          <section id="niveles-lealtad" className="bg-white p-8 rounded-xl shadow-xl mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Nuestros Niveles de Lealtad</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Ascender de nivel te permite desbloquear beneficios aún más exclusivos. Tu nivel se determina por el total de dinero que gastas con nosotros.
            </p>
            <div className="relative flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={goToPreviousLevel}
                className="absolute left-0 p-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-lg transition-all duration-300 transform -translate-x-1/2 focus:outline-none focus:ring-4 focus:ring-gray-400 z-10"
                aria-label="Nivel anterior"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              {/* Level Card - Apply touch events here */}
              <div
                className={`w-11/12 max-w-xs md:max-w-lg xl:max-w-xl mx-auto p-4 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 ${currentLevel.bgColor}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="text-center mb-2">
                  {/* Eliminar la imagen del nivel */}
                  <div className="text-3xl sm:text-4xl mb-0.5">{currentLevel.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-0.5">{currentLevel.name}</h3>
                  <p className="text-xs sm:text-base text-white font-semibold">{currentLevel.spend}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-inner">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1">Recompensas por Nivel:</h4>
                  {currentLevel.levelRewards.length > 0 ? (
                    <ul className="list-none text-gray-700 space-y-1 mb-2">
                      {currentLevel.levelRewards.map((reward, index) => (
                        <li key={index} className="flex items-start text-base md:text-lg"> {/* Texto más grande */}
                          <svg className="w-5 h-5 text-green-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span>{reward}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 italic mb-2 text-base md:text-lg">No hay recompensas directas específicas para este nivel.</p>
                  )}

                  {/* Perks Subtitle and List */}
                  {currentLevel.levelPerks.length > 0 && (
                      <>
                      <h5 className="text-sm sm:text-base md:text-lg font-bold text-gray-700 mb-0.5 border-t pt-0.5 mt-0.5">Beneficios Exclusivos (Perks):</h5>
                      <ul className="list-none text-gray-700 space-y-1">
                        {currentLevel.levelPerks.map((perk, index) => (
                          <li key={index} className="flex items-start text-base md:text-lg"> {/* Texto más grande */}
                            <svg className="w-5 h-5 text-blue-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={goToNextLevel}
                className="absolute right-0 p-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-lg transition-all duration-300 transform translate-x-1/2 focus:outline-none focus:ring-4 focus:ring-gray-400 z-10"
                aria-label="Siguiente nivel"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Dots for navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {loyaltyLevels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLevelIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentLevelIndex === index ? 'bg-blue-600 shadow-md' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al nivel ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Recompensas Exclusivas por Nivel - MOVIDO AQUÍ */}
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 text-center border-t pt-6 mt-6">Recompensas Exclusivas por Nivel</h3>
            <div className="flex flex-col space-y-6 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              {loyaltyLevels.map((level, levelIndex) => (
                <div key={levelIndex} className="p-4 bg-gray-100 rounded-2xl shadow-lg">
                  <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3">
                    {level.icon} {level.name} - <span className="text-gray-800 text-base md:text-lg">{level.spend}</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {level.levelRewards.length > 0 && (
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <div className="bg-gray-50 p-2 rounded-lg mb-2 border border-gray-200">
                          <h4 className="text-lg md:text-xl font-semibold text-gray-700">Recompensas:</h4>
                        </div>
                        <ul className="list-none text-gray-700 space-y-1">
                          {level.levelRewards.map((reward, rewardIndex) => (
                            <li key={rewardIndex} className="flex items-start text-base md:text-lg">
                              <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              <span>{reward}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {level.levelPerks.length > 0 && (
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <div className="bg-gray-50 p-2 rounded-lg mb-2 border border-gray-200">
                          <h4 className="text-lg md:text-xl font-semibold text-gray-700">Beneficios Exclusivos (Perks):</h4>
                        </div>
                        <ul className="list-none text-gray-700 space-y-1">
                          {level.levelPerks.map((perk, perkIndex) => (
                            <li key={perkIndex} className="flex items-start text-base md:text-lg">
                              <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {level.levelRewards.length === 0 && level.levelPerks.length === 0 && (
                    <p className="text-gray-600 italic col-span-2 text-base md:text-lg">No hay recompensas o beneficios definidos para este nivel.</p>
                  )}
                </div>
              </div>
            ))}
            </div>
          </section>
        )}

        {activeTab === 'lista_recompensas' && (
          <section id="lista-recompensas" className="bg-white p-8 rounded-xl shadow-xl mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Lista Completa de Recompensas</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Aquí puedes encontrar un desglose detallado de todas las recompensas que puedes canjear con tus puntos acumulados.
            </p>

            {/* Recompensas Canjeables por Puntos */}
            <div className="bg-gray-50 p-3 rounded-2xl mb-6 border border-gray-200 text-center"> {/* Cápsula para el título */}
              <h3 className="text-3xl font-bold text-gray-800">Recompensas Canjeables por Puntos</h3>
            </div>
            <div className="flex flex-col space-y-4"> {/* Changed to flex column for list layout */}
              {redeemableRewards.map((reward, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex-1 min-w-0 pr-2"> {/* Added flex-1 and min-w-0 to allow content to shrink */}
                    <div className="flex items-center mb-1"> {/* Adjusted margin-bottom */}
                      {reward.icon} {/* Icon on the left */}
                      <h4 className="ml-4 text-lg font-semibold text-gray-800 leading-tight">{reward.name}</h4> {/* Added leading-tight */}
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{reward.cost}</p> {/* Adjusted margin-bottom */}
                    {reward.description && (
                      <p className="text-gray-500 text-xs mt-1 break-words">
                        {reward.description}
                      </p>
                    )}
                  </div>
                  <MoreVertical size={20} className="text-gray-500 flex-shrink-0 ml-2" /> {/* Added flex-shrink-0 and margin-left */}
                </div>
              ))}
            </div>
          </section>
        )}
      </div> {/* End of content based on active tab */}

      {/* Call to Action - Book Now (Eliminado de aquí) */}
    </div>
  );
};

export default App;
