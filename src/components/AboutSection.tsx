import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AboutSection() {
  const [open, setOpen] = useState<number | null>(0);

  const accordionData = [
    {
      title: 'Tentang Saya 🌸',
      content:
        'Hai, aku Farah Fajarna, pelajar dari MAN 1 Banda Aceh yang saat ini belajar di kelas X-11 kedinasan. Aku sangat tertarik dengan dunia teknologi, terutama web development.',
    },
    {
      title: 'Latar Belakang 🎓',
      content:
        'Aku lahir di Banda Aceh, 4 Oktober 2009. Sejak kecil aku suka belajar hal baru dan mencoba hal kreatif, terutama di dunia teknologi.',
    },
    {
      title: 'Cita-cita & Hobi ✨',
      content:
        'Aku bercita-cita menjadi staff Kementerian Keuangan. Aku juga suka menyanyi 🎤 dan menjadikannya hobi.',
    },
  ];

  const bio = [
    { label: 'Nama', value: 'Farah Fajarna' },
    { label: 'Sekolah', value: 'MAN 1 Banda Aceh' },
    { label: 'Kelas', value: 'X-11 Kedinasan' },
    { label: 'Lahir', value: '4 Oktober 2009' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">

      {/* 🌌 ULTRA BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* base */}
        <div className="absolute inset-0 
                        bg-gradient-to-br 
                        from-white via-pink-50 to-white
                        dark:from-black dark:via-zinc-900 dark:to-black" />

        {/* layer 1 */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] 
                     bg-pink-400/30 blur-[140px] rounded-full"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* layer 2 */}
        <motion.div
          className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] 
                     bg-pink-500/25 blur-[140px] rounded-full"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        {/* layer 3 subtle */}
        <motion.div
          className="absolute top-[30%] left-[40%] w-[250px] h-[250px] 
                     bg-pink-300/20 blur-[120px] rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 font-medium mb-2 block">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Know Me Better 💫
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* 🧑 FOTO (DIAM PREMIUM) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="relative group">

              {/* glow halus */}
              <div className="absolute inset-0 rounded-2xl blur-3xl 
                              bg-pink-500/40 opacity-50 
                              group-hover:opacity-70 transition duration-500" />

              {/* image */}
              <div className="relative w-[260px] md:w-[320px] lg:w-[360px] aspect-[3/4] overflow-hidden rounded-2xl">

                <img
                  src="/fotofarah2.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover 
                             border border-pink-400/30 
                             shadow-[0_10px_40px_rgba(255,100,180,0.25)]
                             transition duration-500
                             group-hover:scale-[1.03]"
                />

                {/* highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr 
                                from-white/10 via-transparent to-pink-200/10 
                                opacity-40" />
              </div>
            </div>
          </motion.div>

          {/* ✨ TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            {/* ACCORDION */}
            <div className="space-y-4">
              {accordionData.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-pink-400/30 
                             bg-white/10 dark:bg-black/30 
                             backdrop-blur-xl"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-5 py-3 font-medium 
                               text-pink-400 flex justify-between"
                  >
                    {item.title}
                    <span>{open === i ? '−' : '+'}</span>
                  </button>

                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-5 pb-4 text-muted-foreground"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* BIO */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {bio.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl 
                             bg-white/10 dark:bg-black/30 
                             backdrop-blur-xl
                             border border-pink-400/30"
                >
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-semibold text-pink-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}