'use client'
import Image from 'next/image';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiFillLayout } from "react-icons/ai";
import { MdHealthAndSafety, MdAgriculture } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaInternetExplorer } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";
import Footer from './components/Footer';

export default function Home() {
  const [activeButton, setActiveButton] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Products: useRef(null),
    Solutions: useRef(null),
    Vision: useRef(null),
    Contacts: useRef(null),
  };

  const handleClick = (index) => {
    setActiveButton(index);
    setIsMobileMenuOpen(false);

    const sectionName = navItems[index];
    const sectionRef = sectionRefs[sectionName];
    if (sectionRef && sectionRef.current) {
      const navbarHeight = 80; // Adjust this to match your actual navbar height
      const element = sectionRef.current;
      const topOfElement = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: topOfElement,
        behavior: 'smooth'
      });
    }

  };

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    setIsLoaded(true);

    // Intersection Observer options
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Fine-tuned margins for better section detection
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key].current === entry.target
          );
          const index = navItems.indexOf(sectionName);
          if (index !== -1) {
            setActiveButton(index);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Handle scroll for navbar color change
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [[navItems, sectionRefs]]);


  const navItems = ["Home", "About", "Products", "Solutions", "Vision", "Contacts"];

  return (
    <div className={`flex flex-col justify-start w-fit min-h-screen lg:pl-0 ${isLoaded ? 'fade-in' : 'opacity-0'}`} >
      {/* <Sidebar navItems={navItems} /> */}

      {/* Fixed Navbar with scroll and mobile support */}
      <div className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 
        ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-[#324671]'}`}>
        <nav className="flex flex-col lg:flex-row w-full items-center mt-6 mb-4 justify-evenly container mx-auto px-4">
          <div className="w-full flex justify-between items-center">
            <div className="text-white text-lg">ARENO Technologies</div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white active:scale-90 transition-transform duration-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="text-white text-xs items-center hidden lg:flex gap-6">
            {navItems.map((label, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`px-2 py-1 rounded-3xl w-20 ${activeButton === index ? "bg-[#2090D0]" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation with CSS Animations */}
          {isMobileMenuOpen && (
            <div
              className="lg:hidden w-full mt-4 flex flex-col items-center space-y-2 
              animate-slide-down origin-top"
            >
              {navItems.map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`w-full py-2 rounded-3xl transition-all duration-300 
                  ${activeButton === index
                      ? "bg-[#2090D0] text-black"
                      : "bg-black text-white"} 
                  animate-fade-in`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </nav>

        <hr
          className={`transition-all duration-300 
            ${isScrolled ? 'bg-[#2090D0] shadow-[0_0_10px_#2090D0]' : 'bg-[#2090D0]'} 
            h-px border-0`}
        />
      </div>

      {/* Content with top padding to account for fixed navbar */}
      <div className="">
        <div ref={sectionRefs.Home} className='flex flex-col bg-[#324671] lg:flex-row justify-evenly items-center px-4'>
          <div className='flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0  mt-20'>
            <span className='text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-bold'>Shaping the Future with Smart Solutions</span>
            <span className='text-gray-300 text-base md:text-lg w-full lg:w-2/3 mb-4'>Where creativity meets technology to build intelligent
              solutions that connect, empower, and transform industries
              worldwide.</span>
            <button className='flex items-center text-white'>
              <PlayCircleOutlineIcon /> <span className='text-white text-xs ml-1'>Watch Video</span>
            </button>
          </div>
          <div className='w-full lg:w-auto mt-20'>
            <Image
              src='/areno_home_pic.png'
              width={500}
              height={500}
              alt='home_pic'
              className='w-full h-auto max-w-[500px] mx-auto 
          animate-slow-bounce 
          hover:animate-none 
          hover:scale-105 
          transition-transform 
          duration-300'
            />
          </div>
        </div>

        <div
          ref={sectionRefs.About}
          className="text-[#324671] bg-white flex items-center justify-center flex-col px-4 lg:px-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 mt-20 lg:mt-40 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">About Us</h2>
          <p className='mb-20 lg:mb-40'>Welcome to Areno Technologies, a hub of innovation where technology meets purpose. We specialize in providing Software Solutions, AI Solutions, IoT, and Robotics that drive transformation across industries.</p>
        </div>


        <div ref={sectionRefs.Products} className="text-white mt-44 flex items-center justify-center flex-col px-12  ">
          <h2 className="text-2xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Our Products</h2>
          <p className='mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'>At Areno Technologies, we deliver state-of-the-art products tailored to solve real-world challenges</p>
          <div className='flex gap-6'>
            <div className='flex hover:scale-105 transform transition duration-300 ease-in-out'>
              <div className="bg-white p-6  shadow-md max-w-sm">
                <div><AiFillLayout color='#2090D0' size={30} /></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">Areno</h2>
                <p className="text-gray-600 text-sm">
                  A next-generation E-commerce & Booking App, connecting businesses and customers with ease.
                </p>
              </div>
            </div>

            <div className='flex hover:scale-105 transform transition duration-300 ease-in-out'>
              <div className="bg-white p-6  shadow-md max-w-sm">
                <div><MdHealthAndSafety color='#2090D0' size={30} /></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">Afya Prime</h2>
                <p className="text-gray-600 text-sm">
                  An innovative HealthTech App, revolutionizing access to healthcare services and wellness management.
                </p>
              </div>
            </div>

            <div className='flex hover:scale-105 transform transition duration-300 ease-in-out'>
              <div className="bg-white p-6  shadow-md max-w-sm">
                <div><MdAgriculture color='#2090D0' size={30} /></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">AgriSoko</h2>
                <p className="text-gray-600 text-sm">
                  A pioneering Agritech App, empowering farmers and enhancing agricultural supply chains.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={sectionRefs.Solutions} className="text-white mt-44 flex items-center justify-center flex-col px-12 text-center">
          <h2 className="text-2xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Our Solutions</h2>
          <div className='flex gap-6'>
            <div className='flex hover:scale-105 transform transition duration-300 ease-in-out'>
              <div className="bg-white p-6  shadow-md max-w-sm ">
                <div className='items-center flex justify-center mb-3'><GrCloudComputer color='#2090D0' size={30} /></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">Software Solutions</h2>
                <p className="text-gray-600 text-sm">
                  Custom-built software designed to streamline operations, enhance efficiency, and meet unique business needs.
                </p>
              </div>
            </div>

            <div className='flex hover:scale-105 transform transition duration-300 ease-in-out'>
              <div className="bg-white p-6  shadow-md max-w-sm">
                <div className='items-center flex justify-center mb-3'><GiArtificialIntelligence color='#2090D0' size={30} /></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">AI Solutions</h2>
                <p className="text-gray-600 text-sm">
                  Advanced artificial intelligence applications for smarter decision-making, process automation, and personalized user experiences.
                </p>
              </div>
            </div>

            <div className='flex hover:scale-105 transform transition duration-300 ease-in-out'>
              <div className="bg-white p-6  shadow-md max-w-sm">
                <div className='items-center flex justify-center mb-3'><FaInternetExplorer color='#2090D0' size={30} /></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">IoT Solution</h2>
                <p className="text-gray-600 text-sm">
                  Intelligent systems that connect devices, gather data, and enable seamless operations for smarter, data-driven environments.

                </p>
              </div>
            </div>

            <div className='flex hover:scale-105 transform transition duration-300 ease-in-out'>
              <div className="bg-white p-6  shadow-md max-w-sm">
                <div className='items-center flex justify-center mb-3'><RiRobot2Fill color='#2090D0' size={30} /></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">Robotics</h2>
                <p className="text-gray-600 text-sm">
                  Cutting-edge robotics innovations that enhance productivity, precision, and automation in various sectors.
                </p>
              </div>
            </div>
          </div>


        </div>


        <div

          ref={sectionRefs.Vision}
          className="text-[#324671] bg-white mt-20 lg:mt-44 flex items-center justify-center flex-col px-4 lg:px-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 mt-20 lg:mt-36 text-[#324671] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Our Vision
          </h2>
          <p
            className="mb-20 lg:mb-36 text-[#324671] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          >
            To lead in technological innovation, creating solutions that simplify lives,
            inspire progress, and shape a smarter, more sustainable world.
          </p>
        </div>




        <div className="text-white flex items-center justify-center flex-col px-4 lg:px-12 text-center">
          <h2 className="text-2xl font-bold mb-4 mt-20 lg:mt-32 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Why Choose Areno Technologies?
          </h2>
          <p className="mb-20 lg:mb-32 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            We go beyond building products — we craft transformative experiences that
            empower industries and communities. Together, let&aposs redefine the future of
            technology.
          </p>
        </div>

        <div ref={sectionRefs.Contacts}>
          <Footer />

        </div>



      </div>
    </div>
  );
}

