import { motion } from 'framer-motion';

const subjects = {
  wajib: [
    { name: 'Matematika', level: 90 },
    { name: 'Bahasa Indonesia', level: 88 },
    { name: 'Bahasa Inggris', level: 85 },
    { name: 'Sejarah', level: 80 },
    { name: 'PPKn', level: 82 },
  ],
  sains: [
    { name: 'Fisika', level: 78 },
    { name: 'Kimia', level: 75 },
    { name: 'Biologi', level: 85 },
    { name: 'Geografi', level: 80 },
    { name: 'Ekonomi', level: 83 },
  ],
  lainnya: [
    { name: 'Informatika', level: 92 },
    { name: 'Seni Budaya', level: 88 },
    { name: 'PJOK', level: 86 },
    { name: 'Prakarya', level: 80 },
    { name: 'Bahasa Arab', level: 84 },
  ],
};

function SubjectBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>

      {/* BAR */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full 
                     bg-gradient-to-r 
                     from-pink-400 via-pink-500 to-pink-400
                     shadow-[0_0_12px_rgba(255,120,180,0.5)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">

      {/* 🌈 BACKGROUND PINK SOFT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 
                        bg-gradient-to-br 
                        from-white via-pink-50 to-white
                        dark:from-black dark:via-zinc-900 dark:to-black" />

        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] 
                        bg-pink-300/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] 
                        bg-pink-400/25 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 font-medium mb-2 block">
            Subjects 📚
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Academic💡
          </h2>

          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* WAJIB */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-black/30
                       border border-pink-300/30
                       shadow-[0_8px_30px_rgba(255,100,180,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-400/10">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="font-display text-xl font-bold text-pink-400">
                Wajib
              </h3>
            </div>

            <div className="space-y-4">
              {subjects.wajib.map((item, i) => (
                <SubjectBar key={item.name} {...item} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* SAINS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-black/30
                       border border-pink-300/30
                       shadow-[0_8px_30px_rgba(255,100,180,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-400/10">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-display text-xl font-bold text-pink-400">
                Sains & Sosial
              </h3>
            </div>

            <div className="space-y-4">
              {subjects.sains.map((item, i) => (
                <SubjectBar key={item.name} {...item} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* LAINNYA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-black/30
                       border border-pink-300/30
                       shadow-[0_8px_30px_rgba(255,100,180,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-400/10">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-display text-xl font-bold text-pink-400">
                Lainnya
              </h3>
            </div>

            <div className="space-y-4">
              {subjects.lainnya.map((item, i) => (
                <SubjectBar key={item.name} {...item} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}