import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const [isHover, setIsHover] = useState(false);

  // 🧠 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  // 🔥 SCROLL UNIVERSAL
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    scrollTo('#about');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 
                        bg-gradient-to-br 
                        from-white via-pink-50 to-white
                        dark:from-black dark:via-zinc-900 dark:to-black" />

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] 
                        bg-pink-400/20 blur-[120px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] 
                        bg-pink-500/20 blur-[120px] rounded-full animate-pulse" />

        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(255,120,180,0.3), transparent 40%)',
              'radial-gradient(circle at 80% 60%, rgba(255,80,160,0.3), transparent 40%)',
              'radial-gradient(circle at 40% 80%, rgba(255,100,200,0.3), transparent 40%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <ThreeScene />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">

          {/* 🧑 FOTO */}
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className="relative"
          >
            <div className="absolute inset-0 blur-3xl bg-pink-500/30 opacity-40" />

            <div className="relative w-[260px] md:w-[320px] lg:w-[360px] aspect-[3/4]">
              <img
                src="/fotofarah1.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-[2rem] 
                           border border-pink-300/20 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* ✨ TEXT */}
          <div className="text-center md:text-left max-w-lg">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full 
                         bg-pink-500/10 text-pink-400 mb-5"
            >
              👋 Welcome 🌸
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } }
              }}
            >
              {'Hello, I’m Farah 😊'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Saya pelajar dari MAN 1 Banda Aceh yang sangat suka terhadap dunia teknologi 💻✨  
              khususnya <span className="text-pink-400">web development</span> 🚀
            </motion.p>

            {/* 🚀 BUTTON FIX */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">

              <Button
                onClick={() => scrollTo('#projects')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 rounded-full"
              >
                Projects 🚀
              </Button>

              <Button
                onClick={() => scrollTo('#contact')}
                variant="outline"
                className="border-pink-300 text-pink-400 rounded-full px-8"
              >
                Contact 💌
              </Button>

            </div>

            {/* 🔗 SOCIAL */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {[
                { icon: Github, href: 'https://github.com/farahfajarna/coding-farah.git' },
                { icon: Youtube, href: 'https://www.youtube.com/' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full 
                             bg-white/5 backdrop-blur-md 
                             border border-white/10
                             hover:border-pink-400 
                             hover:shadow-[0_0_20px_rgba(255,100,180,0.4)]
                             transition"
                  whileHover={{ scale: 1.15, y: -3 }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-pink-400" />
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ⬇️ SCROLL */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-pink-400" />
      </button>
    </section>
  );
}