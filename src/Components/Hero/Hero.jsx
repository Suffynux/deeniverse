import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FullWidth from '../Layout/FullWidth.jsx';
import Container from '../Layout/Container.jsx';
import Button from '../UI/Button.jsx';
import HeaderImage from '../../assets/images/head-image.png';
import { BookOpenCheck, Landmark, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SparklesText } from '../UI/sparkles-text.jsx';
const Hero = () => {
  const [ayah, setAyah] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const fetchAyah = async () => {
    try {
      const randomAyah = Math.floor(Math.random() * 6236) + 1;
      const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomAyah}/en.asad`);
      const data = await response.json();
      if (data?.data) setAyah(data.data);
    } catch (error) {
      console.error("Error fetching Ayah:", error);
    }
  };

  useEffect(() => {
    fetchAyah();
    const interval = setInterval(fetchAyah, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FullWidth>
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#182F51]/90 via-[#366AB7]/80 to-[#C0A34E]/10 z-0" />

        <Container className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 min-h-[90vh] py-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col items-center md:items-start max-w-2xl text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-[#C0A34E] to-[#fff] bg-clip-text text-transparent">
                {/* Discover Divine Wisdom */}
             

<SparklesText colors={["#C0A34E", "#fff"]} className={"text-white"}>Discover Divine Wisdom</SparklesText>

              </span>
              <br />
              With Qur’an & Hadith
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-200 mb-6"
            >
              Learn with structured programs and certified instructors in an immersive, spiritual environment.
            </motion.p>

            {ayah && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="w-full"
              >
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 relative transition-all duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#C0A34E]/10 to-transparent transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                  <p className="relative z-10 italic mb-3 text-white">"{ayah.text}"</p>
                  <p className="text-right text-sm text-[#C0A34E] relative z-10">— Surah {ayah.surah.englishName}, Ayah {ayah.numberInSurah}</p>
                </div>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center md:justify-start">
              <Link to={"https://api.whatsapp.com/send/?phone=923265566969&text&type=phone_number&app_absent=0"} target='_blank'>
              <Button className="bg-[#C0A34E] hover:bg-[#C0A34E]/90 text-[#182F51] font-semibold px-8 py-3 rounded-lg shadow-md">
                Get Started
              </Button>
              </Link>
              <Link to={"https://api.whatsapp.com/send/?phone=923265566969&text&type=phone_number&app_absent=0"} target='_blank'>
              <Button className="bg-transparent border border-[#C0A34E] hover:bg-[#C0A34E]/10 text-white px-8 py-3 rounded-lg">
                Start Free Trial
              </Button>
              </Link>
            </div>

            {/* Hadith Icons Section Below Text */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-center">
              <div className="flex flex-col items-center">
                <BookOpenCheck className="w-8 h-8 text-[#C0A34E]" />
                <p className="text-sm text-gray-200 mt-2">Authentic Hadith</p>
              </div>
              <div className="flex flex-col items-center">
                <Landmark className="w-8 h-8 text-[#C0A34E]" />
                <p className="text-sm text-gray-200 mt-2">Islamic Principles</p>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-8 h-8 text-[#C0A34E]" />
                <p className="text-sm text-gray-200 mt-2">Spiritual Uplift</p>
              </div>
            </div>
          </motion.div>

          {/* Image Section with Icons Below */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg border border-white/10">
              <img src={HeaderImage} alt="Quran" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182F51]/30 to-transparent" />
            </div>

            {/* Icons below image */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <BookOpenCheck className="w-8 h-8 text-[#C0A34E]" />
                <span className="text-sm text-gray-200 mt-2">Guidance</span>
              </div>
              <div className="flex flex-col items-center">
                <Landmark className="w-8 h-8 text-[#C0A34E]" />
                <span className="text-sm text-gray-200 mt-2">Knowledge</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-8 h-8 text-[#C0A34E]" />
                <span className="text-sm text-gray-200 mt-2">Light</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
   
      <ConnectSection />

    </FullWidth>
  );
};

export default Hero;
``




const ConnectSection = () => {
  return (
    <section
      style={{
        background: "#FFF5ED", // very light cream, adjust as needed
        padding: "4rem 1rem 5rem 1rem",
        minHeight: "100vh",
        fontFamily: "'Montserrat', 'Georgia', serif",
      }}
    >
      {/* Headline */}
      <h1
        style={{
          textAlign: "center",
          color: "#182f51", // deep brown/red, adjust as needed for your brand
          fontSize: "3rem",
          fontFamily: "'Merriweather', serif",
          marginBottom: "2rem",
          fontWeight: 700,
        }}
      >
        Connect Directly to the Words of <br /> Allah Beyond Translation
      </h1>

      {/* Cards Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            background: "#29120D", // dark brown
            color: "#fff",
            borderRadius: "18px",
            padding: "2.5rem 2rem 2rem 2rem",
            flex: "1 1 360px",
            maxWidth: 480,
            minWidth: 320,
            boxShadow: "0 4px 28px rgba(41,18,13,0.09)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Merriweather', serif",
              fontSize: "2.2rem",
              textAlign: "center",
              fontWeight: 700,
              margin: "0 0 1rem 0",
            }}
          >
            Start your journey <br /> through the Quran.
          </h2>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "1.7rem",
            }}
          >
            Regardless of your age, busy schedule or Arabic proficiency.
          </div>
          <a
            href="#"
            style={{
              background: "#DE4B17",
              color: "#fff",
              padding: "0.9em 2em",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "background .2s",
              boxShadow: "0 2px 12px #0002",
              marginBottom: "1.5rem",
              display: "inline-block",
            }}
          >
            Learn online &rarr;
          </a>
        </div>
        {/* Card 2 */}
        <div
          style={{
            background: "#FAE3CB", // light beige
            color: "#7B2C14", // deep brown/red
            borderRadius: "18px",
            padding: "2.5rem 2rem 2rem 2rem",
            flex: "1 1 360px",
            maxWidth: 480,
            minWidth: 320,
            boxShadow: "0 4px 28px rgba(41,18,13,0.06)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontFamily: "'Merriweather', serif",
              fontSize: "2.2rem",
              textAlign: "center",
              fontWeight: 700,
              margin: "0 0 1rem 0",
            }}
          >
            Experience our <br /> live events.
          </h2>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "1.7rem",
              color: "#000",
            }}
          >
            Witness the transformative power of the Quran, led by Ustadh <br /> Nouman Ali Khan.
          </div>
          <a
            href="#"
            style={{
              background: "#DE4B17",
              color: "#fff",
              padding: "0.9em 2em",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "background .2s",
              boxShadow: "0 2px 12px #0002",
              marginBottom: "1.5rem",
              display: "inline-block",
            }}
          >
            View upcoming events &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}