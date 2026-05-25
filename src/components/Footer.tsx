import { motion } from 'framer-motion';
import { Github, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/farahfajarna/coding-farah.git', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden py-12 border-t border-pink-200/20 dark:border-white/10">

      {/* 🌸 BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-white dark:from-black dark:via-zinc-950 dark:to-black" />

        {/* glow kiri */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-400/20 blur-[120px] top-[-120px] left-[-120px]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* glow kanan */}
        <motion.div
          className="absolute w-[350px] h-[350px] bg-fuchsia-400/20 blur-[120px] bottom-[-120px] right-[-120px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* 💗 LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center md:text-left space-y-1"
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} — built with
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <Heart className="h-4 w-4 text-pink-400 fill-pink-400 animate-pulse" />
              <span className="font-medium text-pink-400">
                love & code
              </span>
              <span className="text-muted-foreground">
                by Farah Fajarna
              </span>
            </div>
          </motion.div>

          {/* 🌐 SOCIAL */}
          <div className="flex items-center gap-4">

            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.15,
                  y: -3,
                  boxShadow: '0 0 25px rgba(255,105,180,0.4)',
                }}
                transition={{ delay: i * 0.1 }}
                className="
                  relative p-3 rounded-full
                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl
                  border border-pink-200/40 dark:border-white/10
                  text-muted-foreground
                  hover:text-pink-400
                  transition
                "
              >
                <social.icon className="h-5 w-5" />

                {/* glow kecil */}
                <div className="absolute inset-0 rounded-full bg-pink-400/10 blur-md opacity-0 hover:opacity-100 transition" />
              </motion.a>
            ))}

          </div>

        </div>

        {/* ✨ small signature line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          “Every line of code is a small piece of art 💗”
        </motion.div>

      </div>
    </footer>
  );
}