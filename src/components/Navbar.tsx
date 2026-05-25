import { useState, useEffect, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState('#home');
  const [indicatorStyle, setIndicatorStyle] = useState<any>({});
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 150 && rect.bottom > 150) {
            setActive(item.href);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeEl = document.querySelector(`[data-link="${active}"]`);
    if (activeEl && navRef.current) {
      const rect = activeEl.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicatorStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [active]);

  const handleMouseMove = (e: any) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = (e: any) => {
    e.currentTarget.style.transform = `translate(0px,0px)`;
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative group">

        {/* 🔥 NEON HIDUP (breathing + gradient move) */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-full blur-3xl"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.08, 1],
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'linear-gradient(120deg, #ff4da6, #ff80bf, #ff4da6)',
            backgroundSize: '200% 200%'
          }}
        />

        {/* ✨ hover boost */}
        <div className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition duration-500 bg-pink-500/40" />

        {/* 💎 NAVBAR */}
        <div
          ref={navRef}
          className="relative flex items-center gap-2 px-3 py-2 rounded-full 
                     backdrop-blur-xl bg-background/70 
                     border border-pink-300/20 
                     shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >

          {/* 🎯 ACTIVE INDICATOR */}
          <motion.div
            className="absolute top-1 bottom-1 rounded-full 
                       bg-pink-500/10 border border-pink-400/20"
            animate={indicatorStyle}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />

          {/* MENU */}
          {navItems.map((item) => (
            <button
              key={item.href}
              data-link={item.href}
              onClick={() => scrollTo(item.href)}
              onMouseMove={handleMouseMove}
              onMouseLeave={reset}
              className={`relative px-4 py-1.5 text-sm rounded-full transition
                ${active === item.href
                  ? 'text-pink-500'
                  : 'text-muted-foreground hover:text-foreground'}`}
            >
              {item.label}
            </button>
          ))}

          {/* 🌙 THEME */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full hover:bg-muted transition"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-pink-500" />
            ) : (
              <Moon className="h-4 w-4 text-pink-500" />
            )}
          </button>

        </div>
      </div>
    </div>
  );
}