import React, { useState, useEffect, useRef } from 'react';
import EdumaLogo from '../assets/Image/logo-edu_black.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../LoRgister/Register';
import Login from '../LoRgister/Login';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  // Refs for dropdown timeout
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const courseItems = [
    {
      title: 'Introduction LearnPress – LMS plugin',
      image: 'https://eduma.thimpress.com/wp-content/uploads/2022/10/Introduction-learnpress-lms-plugin-1-400x300.jpg'
    },
    {
      title: 'Create an LMS Website with LearnPress',
      image: 'https://eduma.thimpress.com/wp-content/uploads/2022/11/create-an-lms-website-with-learnpress-3-400x300.jpg'
    },
    {
      title: 'How To Sell In-Person Course With LearnPress',
      image: 'https://eduma.thimpress.com/wp-content/uploads/2024/10/course-offline-01-400x300.jpg'
    },
    {
      title: 'AI on the job – Boost your skills and get...',
      image: 'https://eduma.thimpress.com/wp-content/uploads/2024/03/f7aad5d3f7e5c9cf37b0c24a9d075887-1-400x300.png'
    }
  ];

  // Get navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        setNavbarHeight(height);
        // Set CSS variable for navbar height
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, [showNavbar]); // Re-run when navbar visibility changes

  // Handle mouse enter for dropdown
  const handleDropdownEnter = (dropdownName) => {
    // Clear any pending timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownName);
    setHoveredItem(dropdownName);
  };

  // Handle mouse leave for dropdown
  const handleDropdownLeave = () => {
    // Set timeout to close dropdown after 200ms
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
      dropdownTimeoutRef.current = null;
    }, 200);
  };

  // Handle dropdown container mouse enter (to prevent closing when moving to dropdown)
  const handleDropdownContainerEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't hide navbar if mobile menu is open
      if (mobileMenuOpen) return;

      // Scroll down - hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }
      // Scroll up - show navbar
      else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, mobileMenuOpen]);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  // Handle navigation with menu close
  const handleNavigation = (path) => {
    closeMobileMenu();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Ultra-smooth dropdown animation classes
  const getDropdownAnimation = (isActive) => {
    if (!isActive) return 'opacity-0 invisible translate-y-2 scale-95 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]';

    return `opacity-100 visible translate-y-0 scale-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]`;
  };

  // Custom CSS for animations
  const animationStyles = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInRight {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    
    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideUp {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-100%);
      }
    }
    
    .sidebar-enter {
      animation: slideInRight 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    
    .overlay-enter {
      animation: fadeIn 0.4s ease-out forwards;
    }
    
    .navbar-show {
      animation: slideDown 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    
    .navbar-hide {
      animation: slideUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    
    /* Smooth scrollbar for sidebar */
    .sidebar-scroll {
      scrollbar-width: thin;
      scrollbar-color: #facc15 #f1f1f1;
    }
    
    .sidebar-scroll::-webkit-scrollbar {
      width: 4px;
    }
    
    .sidebar-scroll::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    .sidebar-scroll::-webkit-scrollbar-thumb {
      background: #facc15;
      border-radius: 10px;
    }
    
    .sidebar-scroll::-webkit-scrollbar-thumb:hover {
      background: #eab308;
    }
    
    /* Smooth dropdown transitions */
    .dropdown-container {
      transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>

      {/* Main Navbar Container with fixed positioning */}
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${showNavbar ? 'navbar-show' : 'navbar-hide'
          }`}
      >
        {/* Top bar - Hidden on mobile */}
        <div className="hidden sm:block bg-[#033e63] text-white py-4 px-4 md:px-10">
          <div className="flex justify-between items-center text-xs max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Contact us:</span>
              <span className="text-white hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">(+88) 1990 6886</span>
              <span className="text-[#3a6e8c]">|</span>
              <span className="text-white hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">ram@thimpress.com</span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setOpen(true)} className="text-white cursor-pointer hover:text-yellow-400 transition-all duration-300 hover:scale-110">Register</button>
              <span className="text-white">|</span>
              <button onClick={() => setOpen2(true)} className="text-white cursor-pointer hover:text-yellow-400 transition-all duration-300 hover:scale-110">Login</button>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white py-4 px-4 md:px-10 border-b shadow-md relative">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo with smooth hover */}
            <Link
              to={"/"}
              onClick={() => {
                closeMobileMenu();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={EdumaLogo}
                className="w-[140px] sm:w-[180px] h-7 sm:h-9 object-contain transition-all duration-500 hover:scale-105 cursor-pointer"
                alt="Eduma"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
              {/* DEMOS */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('demos')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center text-gray-900 font-semibold text-[16px] xl:text-[15px] group">
                  <span className="relative">
                    DEMOS
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredItem === 'demos' ? 'scale-x-100' : 'scale-x-0'
                        }`}
                    />
                  </span>
                  <svg
                    className={`w-3 h-3 ml-1 text-gray-500 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeDropdown === 'demos' ? 'rotate-180 translate-y-0.5' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* COURSES */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('courses')}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to={"/courses"} className="flex items-center text-gray-900 font-semibold text-[16px] xl:text-[15px] group">
                  <span className="relative">
                    COURSES
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredItem === 'courses' ? 'scale-x-100' : 'scale-x-0'
                        }`}
                    />
                  </span>
                  <svg
                    className={`w-3 h-3 ml-1 text-gray-500 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeDropdown === 'courses' ? 'rotate-180 translate-y-0.5' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>

              {/* PAGES */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('pages')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center text-gray-900 font-semibold text-[16px] xl:text-[15px] group">
                  <span className="relative">
                    PAGES
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredItem === 'pages' ? 'scale-x-100' : 'scale-x-0'
                        }`}
                    />
                  </span>
                  <svg
                    className={`w-3 h-3 ml-1 text-gray-500 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeDropdown === 'pages' ? 'rotate-180 translate-y-0.5' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* ELEMENTS */}
              <Link
                to={"/element"}
                className="text-gray-900 font-semibold text-[13px] xl:text-[15px] group relative inline-block transition-all duration-300 hover:text-yellow-500"
                onMouseEnter={() => setHoveredItem('elements')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="relative">
                  ELEMENTS
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredItem === 'elements' ? 'scale-x-100' : 'scale-x-0'
                      }`}
                  />
                </span>
              </Link>

              {/* BLOG */}
              <Link
                to={"/blog"}
                className="text-gray-900 font-semibold text-[13px] xl:text-[15px] group relative inline-block transition-all duration-300 hover:text-yellow-500"
                onMouseEnter={() => setHoveredItem('blog')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="relative">
                  BLOG
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredItem === 'blog' ? 'scale-x-100' : 'scale-x-0'
                      }`}
                  />
                </span>
              </Link>

              {/* BACKEND DEMO */}
              <a
                href="#"
                className="text-gray-900 font-semibold text-[13px] xl:text-[15px] group relative inline-block transition-all duration-300 hover:text-yellow-500"
                onMouseEnter={() => setHoveredItem('backend')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="relative">
                  BACKEND DEMO
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredItem === 'backend' ? 'scale-x-100' : 'scale-x-0'
                      }`}
                  />
                </span>
              </a>

              <button className="text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:scale-110 hover:rotate-90">
                <FaSearch className="text-sm" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button className="text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:scale-110">
                <FaSearch className="text-sm" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:scale-110 relative z-50"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Dropdowns - Same as before */}
          {activeDropdown && (
            <div
              ref={dropdownRef}
              className={`absolute left-1/2 transform -translate-x-1/2 top-full w-[1000px] xl:w-[1200px] z-50 dropdown-container ${getDropdownAnimation(true)}`}
              style={{
                filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1))',
                transformOrigin: 'top center'
              }}
              onMouseEnter={handleDropdownContainerEnter}
              onMouseLeave={handleDropdownLeave}
            >
              {/* DEMOS Dropdown content - Same as before */}
              {activeDropdown === 'demos' && (
                <div className="bg-white shadow-lg p-4 xl:p-6 rounded">
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    {/* Column 1 */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.1s both' }}>
                      <h3 className="font-bold text-xs xl:text-sm mb-2 text-yellow-500">POPULAR</h3>
                      <ul className="space-y-1">
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Main Demo</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Classic Eduma</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Online Learning</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Marketplace</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Learning Platform</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Education News</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Ecommerce</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Elegant</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">RTL</li>
                      </ul>
                    </div>
                    {/* Column 2 */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}>
                      <h3 className="font-bold text-xs xl:text-sm mb-2 text-yellow-500">UNIVERSITY</h3>
                      <ul className="space-y-1">
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">University New</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Ivy League</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Grad School</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Stanford</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Modern University</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">University</li>
                      </ul>
                    </div>
                    {/* Column 3 */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.3s both' }}>
                      <h3 className="font-bold text-xs xl:text-sm mb-2 text-yellow-500">ACADEMY</h3>
                      <ul className="space-y-1">
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Udemy</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Coursera</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">New Art</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Kid Art</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Course Hub</li>
                      </ul>
                    </div>
                    {/* Column 4 */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.4s both' }}>
                      <h3 className="font-bold text-xs xl:text-sm mb-2 text-yellow-500">SCHOOL</h3>
                      <ul className="space-y-1">
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Kindergarten</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Online School</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Language School</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Crypto</li>
                      </ul>
                    </div>
                    {/* Column 5 */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.5s both' }}>
                      <h3 className="font-bold text-xs xl:text-sm mb-2 text-yellow-500">TECHNOLOGY</h3>
                      <ul className="space-y-1">
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Edtech</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">React</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Tech Camp</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">One Course</li>
                      </ul>
                    </div>
                    {/* Column 6 */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.6s both' }}>
                      <h3 className="font-bold text-xs xl:text-sm mb-2 text-yellow-500">PERSONAL</h3>
                      <ul className="space-y-1">
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Tutor LMS</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">One Instructor</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Instructor</li>
                        <li className="text-[14px] xl:text-[16px] text-gray-600 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">One Course</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* COURSES Dropdown */}
              {activeDropdown === 'courses' && (
                <div className="bg-white shadow-lg p-4 xl:p-6 rounded">
                  <div className="flex flex-col xl:flex-row gap-6 xl:gap-10">
                    {/* Left Menu */}
                    <div className="xl:w-48 flex flex-row xl:flex-col gap-4 xl:gap-4 overflow-x-auto xl:overflow-x-visible pb-2 xl:pb-0">
                      {['FEATURED COURSES', 'COURSE LAYOUTS', 'COLLECTIONS', 'PACKAGES'].map((item, index) => (
                        <div
                          key={item}
                          className="flex justify-between items-center whitespace-nowrap xl:whitespace-normal group cursor-pointer"
                          style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
                        >
                          <span className={`text-xs xl:text-sm ${index === 0 ? 'text-yellow-500' : 'text-gray-700'} group-hover:text-yellow-500 transition-all duration-300`}>
                            {item}
                            {index > 1 && (
                              <span className="ml-2 text-[8px] xl:text-[10px] bg-red-100 text-red-500 px-1 rounded animate-pulse">HOT</span>
                            )}
                          </span>
                          <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">›</span>
                        </div>
                      ))}
                    </div>

                    {/* Right Courses */}
                    <div className="flex-1">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6">
                        {courseItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="group cursor-pointer"
                            style={{ animation: `fadeInUp 0.5s ease-out ${0.4 + idx * 0.1}s both` }}
                          >
                            <div className="overflow-hidden rounded-md">
                              <img
                                src={item.image}
                                alt=""
                                className="w-full h-20 md:h-24 xl:h-28 object-cover group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                              />
                            </div>
                            <p className="text-[10px] md:text-xs mt-2 font-semibold leading-3 md:leading-4 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-x-1">
                              {item.title}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* View All Button */}
                      <div
                        className="flex justify-center mt-4 xl:mt-6"
                        style={{ animation: 'fadeInUp 0.5s ease-out 0.8s both' }}
                      >
                        <button className="bg-yellow-400 hover:bg-yellow-500 px-4 xl:px-6 py-1.5 xl:py-2 text-[10px] xl:text-xs font-bold rounded transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-200">
                          VIEW ALL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PAGES Dropdown */}
              {activeDropdown === 'pages' && (
                <div className="bg-white shadow-lg p-4 xl:p-8 rounded">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-10">
                    {/* ABOUT */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.1s both' }}>
                      <h3 className="text-[10px] xl:text-xs font-bold text-gray-500 mb-2 xl:mb-4 hover:text-yellow-500 transition-colors">ABOUT</h3>
                      <ul className="space-y-1.5 xl:space-y-3">
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">About us</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Gallery</li>
                        <li className="text-xs xl:text-sm bg-gray-100 px-2 py-1 w-fit text-yellow-500 cursor-pointer hover:bg-yellow-100 transition-all duration-300">Events</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Maintenance</li>
                      </ul>

                      <button className="mt-4 xl:mt-6 bg-yellow-400 hover:bg-yellow-500 px-3 xl:px-4 py-1.5 xl:py-2 text-[10px] xl:text-xs font-semibold rounded transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-200">
                        BECOME A TEACHER
                      </button>
                    </div>

                    {/* PRICING PLAN */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}>
                      <h3 className="text-[10px] xl:text-xs font-bold text-gray-500 mb-2 xl:mb-4 hover:text-yellow-500 transition-colors">PRICING PLAN</h3>
                      <ul className="space-y-1.5 xl:space-y-3">
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Membership</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Pricing plan</li>
                      </ul>

                      <h3 className="text-[10px] xl:text-xs font-bold text-gray-500 mt-4 xl:mt-6 mb-2 xl:mb-4 hover:text-yellow-500 transition-colors">SUPPORT</h3>
                      <ul className="space-y-1.5 xl:space-y-3">
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">FAQs</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Contact</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Term & Conditions</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">404 Pages</li>
                      </ul>
                    </div>

                    {/* RESOURCES */}
                    <div style={{ animation: 'fadeInUp 0.5s ease-out 0.3s both' }}>
                      <h3 className="text-[10px] xl:text-xs font-bold text-gray-500 mb-2 xl:mb-4 hover:text-yellow-500 transition-colors">RESOURCES</h3>
                      <ul className="space-y-1.5 xl:space-y-3">
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Shop</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Packages</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Collections</li>
                      </ul>

                      <h3 className="text-[10px] xl:text-xs font-bold text-gray-500 mt-4 xl:mt-6 mb-2 xl:mb-4 hover:text-yellow-500 transition-colors">PORTFOLIO</h3>
                      <ul className="space-y-1.5 xl:space-y-3">
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Portfolio 1</li>
                        <li className="text-xs xl:text-sm text-gray-700 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:translate-x-2">Portfolio 2</li>
                      </ul>
                    </div>

                    {/* LANDING PAGES */}
                    <div className="col-span-2 md:col-span-1" style={{ animation: 'fadeInUp 0.5s ease-out 0.4s both' }}>
                      <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                        <div className="cursor-pointer group">
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src="https://eduma.thimpress.com/wp-content/uploads/2025/09/online-course.jpg"
                              className="w-full h-24 sm:h-32 md:h-36 xl:h-40 object-cover group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            />
                          </div>
                          <p className="text-xs xl:text-sm mt-2 text-gray-700 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-x-1">
                            Landing page for online courses
                          </p>
                        </div>

                        <div className="cursor-pointer group">
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src="https://eduma.thimpress.com/wp-content/uploads/2025/09/offline-course.jpg"
                              className="w-full h-24 sm:h-32 md:h-36 xl:h-40 object-cover group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            />
                          </div>
                          <p className="text-xs xl:text-sm mt-2 text-gray-700 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-x-1">
                            Landing page for offline courses
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Sidebar - Moved OUTSIDE the fixed navbar container */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
          onClick={closeMobileMenu}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] sm:w-[350px] bg-white shadow-2xl transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{
            boxShadow: mobileMenuOpen ? '-10px 0 30px rgba(0,0,0,0.2)' : 'none'
          }}
        >
          {/* Sidebar Header - Fixed */}
          <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center z-10">
            <img
              src={EdumaLogo}
              className="w-[120px] h-6 object-contain cursor-pointer"
              alt="Eduma"
              onClick={() => handleNavigation('/')}
            />
            <button
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:rotate-90"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Sidebar Content - Scrollable */}
          <div className="h-[calc(100%-65px)] overflow-y-auto sidebar-scroll">
            <div className="p-4">
              {/* Mobile Contact Info */}
              <div className="mb-6 pb-4 border-b">
                <div className="text-xs text-gray-600 mb-2">Contact us:</div>
                <div className="text-sm text-gray-800 mb-1 hover:text-yellow-500 transition-colors cursor-pointer">(+88) 1990 6886</div>
                <div className="text-sm text-gray-800 mb-3 hover:text-yellow-500 transition-colors cursor-pointer">ram@thimpress.com</div>
                <div className="flex gap-4 text-sm">
                  <button onClick={() => {
                    setOpen(true);
                    closeMobileMenu();
                  }} className="text-gray-800 cursor-pointer hover:text-yellow-500 transition-colors">Register</button>
                  <span className="text-gray-800">/</span>
                  <button onClick={() => {
                    setOpen2(true);
                    closeMobileMenu();
                  }} className="text-gray-800 cursor-pointer hover:text-yellow-500 transition-colors">Login</button>
                </div>
              </div>

              {/* Sidebar Menu Items */}
              <div className="space-y-1">
                {/* DEMOS */}
                <div className="border-b border-gray-100 py-2">
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === 'demos' ? null : 'demos')}
                    className="w-full flex items-center justify-between text-gray-900 font-semibold text-sm py-2 hover:text-yellow-500 transition-all duration-300"
                  >
                    <span>DEMOS</span>
                    <svg className={`w-3 h-3 transition-all duration-500 ${mobileDropdown === 'demos' ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileDropdown === 'demos' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="pl-4 py-2 space-y-3">
                      <div>
                        <h4 className="text-xs font-bold text-yellow-500 mb-2">POPULAR</h4>
                        <ul className="space-y-2">
                          <li className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">Main Demo</li>
                          <li className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">Classic Eduma</li>
                          <li className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">Online Learning</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-yellow-500 mb-2">UNIVERSITY</h4>
                        <ul className="space-y-2">
                          <li className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">University New</li>
                          <li className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer">Ivy League</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COURSES */}
                <div className="border-b border-gray-100 py-2">
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === 'courses' ? null : 'courses')}
                    className="w-full flex items-center justify-between text-gray-900 font-semibold text-sm py-2 hover:text-yellow-500 transition-all duration-300"
                  >
                    <span>COURSES</span>
                    <svg className={`w-3 h-3 transition-all duration-500 ${mobileDropdown === 'courses' ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileDropdown === 'courses' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="pl-4 py-2 space-y-3">
                      <div
                        className="text-yellow-500 text-xs font-semibold cursor-pointer hover:translate-x-2 transition-all duration-300"
                        onClick={() => handleNavigation('/courses')}
                      >
                        FEATURED COURSES
                      </div>
                      <div
                        className="text-gray-700 text-xs hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                        onClick={() => handleNavigation('/courses')}
                      >
                        COURSE LAYOUTS
                      </div>
                      <div
                        className="flex items-center gap-1 text-xs hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                        onClick={() => handleNavigation('/courses')}
                      >
                        <span>COLLECTIONS</span>
                        <span className="text-[8px] bg-red-100 text-red-500 px-1 rounded">HOT</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {courseItems.slice(0, 2).map((item, idx) => (
                          <div
                            key={idx}
                            className="group cursor-pointer"
                            onClick={() => handleNavigation('/courses')}
                          >
                            <div className="overflow-hidden rounded">
                              <img src={item.image} className="w-full h-16 object-cover group-hover:scale-110 transition-all duration-700" alt="" />
                            </div>
                            <p className="text-[10px] mt-1 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-300">{item.title.substring(0, 25)}...</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PAGES */}
                <div className="border-b border-gray-100 py-2">
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === 'pages' ? null : 'pages')}
                    className="w-full flex items-center justify-between text-gray-900 font-semibold text-sm py-2 hover:text-yellow-500 transition-all duration-300"
                  >
                    <span>PAGES</span>
                    <svg className={`w-3 h-3 transition-all duration-500 ${mobileDropdown === 'pages' ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileDropdown === 'pages' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="pl-4 py-2 space-y-3">
                      <div>
                        <h4 className="text-xs font-bold text-yellow-500 mb-2">ABOUT</h4>
                        <ul className="space-y-2">
                          <li
                            className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                            onClick={() => handleNavigation('/about')}
                          >
                            About us
                          </li>
                          <li
                            className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                            onClick={() => handleNavigation('/gallery')}
                          >
                            Gallery
                          </li>
                          <li
                            className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                            onClick={() => handleNavigation('/events')}
                          >
                            Events
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-yellow-500 mb-2">PRICING</h4>
                        <ul className="space-y-2">
                          <li
                            className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                            onClick={() => handleNavigation('/membership')}
                          >
                            Membership
                          </li>
                          <li
                            className="text-xs text-gray-600 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                            onClick={() => handleNavigation('/pricing')}
                          >
                            Pricing plan
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simple Links */}
                <div
                  className="block text-gray-900 font-semibold text-sm py-3 border-b border-gray-100 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  onClick={() => handleNavigation('/element')}
                >
                  ELEMENTS
                </div>

                <div
                  className="block text-gray-900 font-semibold text-sm py-3 border-b border-gray-100 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  onClick={() => handleNavigation('/blog')}
                >
                  BLOG
                </div>

                <div
                  className="block text-gray-900 font-semibold text-sm py-3 border-b border-gray-100 hover:text-yellow-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  onClick={() => handleNavigation('/backend-demo')}
                >
                  BACKEND DEMO
                </div>
              </div>

              {/* Search Bar at bottom */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-4 py-2 bg-transparent text-sm outline-none"
                  />
                  <button className="px-4 py-2 text-gray-600 hover:text-yellow-500 transition-colors">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic spacer that adjusts to navbar height */}
      <div style={{ height: `${navbarHeight}px` }}></div>
      <Register isOpen={open} onClose={() => setOpen(false)} />
      <Login isOpen={open2} onClose={() => setOpen2(false)} />
    </>
  );
};

export default Navbar;