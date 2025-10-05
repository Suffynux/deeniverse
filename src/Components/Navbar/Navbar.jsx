import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import logo from "../../assets/images/logo.png";
import Container from "../Layout/Container";
// import Button from "../UI/Button";
// shadcn navigation menu components (adjust import path if your project places them elsewhere)
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../UI/navigation-menu";
import { SparklesText } from "../UI/sparkles-text";
import { ShinyButton } from "../UI/shiny-button";


import Button from "../UI/Button";



const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // kept for parity (not required by shadcn menu)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Quizzes", path: "/quizzes" },
    { name: "Prayer Times", path: "/prayer-times" },
  ];

  // quizes pathname

  const courses = [
    { id: 1, title: "Basic Qaida with Tajweed", path: "/courses/1" },
    { id: 2, title: "Nazra Quran with Tajweed", path: "/courses/2" },
    { id: 3, title: "Masnoon Duas & Namaz", path: "/courses/3" },
    { id: 4, title: "Tajweed-ul-Quran", path: "/courses/4" },
    { id: 5, title: "Tarjuma Tul Quran", path: "/courses/5" },
    { id: 6, title: "Tafsir-ul-Quran", path: "/courses/6" },
    { id: 7, title: "Fahm-Ul-Quran", path: "/courses/7" },
  ];

  return (
    <>
 
    <AnimatePresence>
  {bannerVisible && (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Message */}
        <div className="flex items-center min-w-0">
          <span className="text-xs sm:text-sm lg:text-base font-medium truncate tracking-wide">
            📖 Enroll in our Free Tafseer-ul-Quran Course Today!
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href="https://api.whatsapp.com/send/?phone=923265566969&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            Join Now
          </a>
          <button
            onClick={() => setBannerVisible(false)}
            className="text-white hover:text-gray-200 text-lg sm:text-xl focus:outline-none p-1"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


      <Container>
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed left-0 right-0 z-40 text-white bg-gray-900/95 backdrop-blur ${
            bannerVisible ? "top-[40px] sm:top-[36px]" : "top-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="Deeniverse Academy"
                  className="max-w-[30px] md:max-w-[75px] h-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation - migrated to shadcn NavigationMenu */}
            <div className="flex justify-between items-center gap-8 md:gap-16">
              <nav className="hidden md:flex items-center">
                {/* disable viewport so dropdowns position relative to their NavigationMenuItem */}
                <NavigationMenu viewport={false}>
                  <NavigationMenuList>
                    {/* Render simple links for top-level nav items */}
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `px-3 py-2 text-lg font-medium no-underline ${
                                isActive
                                  ? "text-amber-500"
                                  : "text-white hover:text-amber-500"
                              }`
                            }
                          >
                            {item.name.toLowerCase() === "quizzes" || item.path === "/quizzes" ? (
                              <SparklesText
                                colors={{ first: "#f59e0b", second: "#f43f5e" }}
                                className=" text-md  "
                              >
                                {item.name}
                              </SparklesText>
                            ) : (
                              item.name
                            )}
                          </NavLink>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}

                    {/* Courses dropdown implemented with shadcn menu */}
                    <NavigationMenuItem className="relative">
                      <NavigationMenuTrigger
                        className={`${navigationMenuTriggerStyle()} text-white bg-transparent !shadow-none focus:outline-none focus:ring-0`}
                      >
                        Our Courses
                      </NavigationMenuTrigger>
                      {/* absolute positioning aligns the dropdown directly under the trigger */}
                      <NavigationMenuContent className="!absolute left-0 top-full mt-2 !bg-transparent !shadow-none !ring-0 p-0 z-50">
                        <ul className="w-64 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 p-2 space-y-1 shadow-lg">
                          {courses.map((course) => (
                            <li key={course.id}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={course.path}
                                  className="block px-4 py-3 text-sm font-medium text-gray-200 rounded-lg
                                             hover:bg-amber-400 hover:text-gray-900 transition-all duration-200 ease-in-out
                                             hover:shadow-md hover:scale-[1.02] active:scale-[0.98] outline-none focus:outline-none focus:ring-0 bg-transparent"
                                >
                                  {course.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                 
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>

              <button
                className="md:hidden text-2xl text-white"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>
        </motion.header>

        {/* Scroll Progress Bar */}
        <motion.div
          className={`fixed left-0 right-0 h-1 bg-amber-500 origin-left z-50 ${
            bannerVisible ? "top-[100px] sm:top-[96px]" : "top-[76px]"
          }`}
          style={{ scaleX: scrollYProgress }}
        />
      </Container>

     {/* Spacer to prevent content from being hidden behind fixed header */}
     <div className={`${bannerVisible ? "pt-[128px] sm:pt-[120px]" : "pt-[64px]"}`}></div>

      {/* Mobile Sidebar (unchanged) */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 md:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <Link to="/" onClick={() => setSidebarOpen(false)}>
                  <img
                    src={logo}
                    alt="Deeniverse Academy"
                    className="max-w-[40px]"
                  />
                </Link>
                <button
                  className="text-2xl text-white"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close sidebar"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg font-medium py-2 transition-colors duration-200 ${
                        isActive
                          ? "text-amber-500"
                          : "text-white hover:text-amber-500"
                      }`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div>
                  <button
                    className="flex items-center gap-1 w-full text-lg font-medium text-white hover:text-amber-500 py-2 focus:outline-none transition-colors duration-200"
                    onClick={() => setSidebarDropdownOpen((prev) => !prev)}
                  >
                    Our Courses
                    <span className="ml-1">
                      {sidebarDropdownOpen ? "▲" : "▼"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {sidebarDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 space-y-2"
                      >
                        {courses.map((course) => (
                          <li key={course.id}>
                            <Link
                              to={course.path}
                              className="block px-3 py-2 text-sm hover:bg-amber-500 hover:text-gray-900 rounded-lg transition-colors duration-200"
                              onClick={() => {
                                setSidebarOpen(false);
                                setSidebarDropdownOpen(false);
                              }}
                            >
                              {course.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-gray-900 font-semibold px-4 py-2 rounded-lg mt-4"
                >
                  <Link to="/register" onClick={() => setSidebarOpen(false)}>
                    Register
                  </Link>
                </motion.button>
              </nav>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;




export function ScrollProgressDemo() {
  return (
    <div className="z-10 rounded-lg p-4">
      <ScrollProgress className="top-[65px]" />
      <h2 className="pb-4 font-bold">
        Note: The scroll progress is shown below the navbar of the page.
      </h2>
    </div>
  )
}