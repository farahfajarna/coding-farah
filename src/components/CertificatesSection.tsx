import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
  },
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
  },
];

export default function CertificatesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-black">

      {/* 🌈 BACKGROUND LAYER ANIMATION */}
      <div className="absolute inset-0 -z-10">

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-pink-400/20 blur-[140px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-400/20 blur-[140px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

      </div>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="text-pink-500 tracking-widest">
            ✦ CREDENTIALS ✦
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
            Sertifikat & Lisensi
          </h2>

          <div className="w-24 h-[2px] mx-auto mt-4 bg-gradient-to-r from-pink-500 to-fuchsia-500" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* 🔥 NEON OUTER GLOW */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-pink-500/20 blur-2xl opacity-0 group-hover:opacity-60"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* CARD */}
              <motion.div
                whileHover={{ y: -8 }}
                className="
                  relative p-6 rounded-2xl
                  bg-white dark:bg-zinc-900
                  border border-pink-200/40 dark:border-white/10
                  shadow-md
                  overflow-hidden
                "
              >

                {/* NEON BORDER ANIMATION */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 border border-pink-400/30 rounded-2xl animate-pulse" />
                  <div className="absolute inset-0 border border-fuchsia-400/20 rounded-2xl blur-sm" />
                </div>

                {/* ICON */}
                <div className="text-3xl mb-3 relative z-10">
                  {cert.image}
                </div>

                {/* TITLE */}
                <div className="flex items-center gap-2 relative z-10">
                  <Award className="h-5 w-5 text-pink-500" />
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                </div>

                {/* ISSUER */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 relative z-10">
                  {cert.issuer}
                </p>

                {/* DATE */}
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 relative z-10">
                  <Calendar className="h-4 w-4 text-pink-400" />
                  {cert.date}
                </div>

                {/* ID */}
                <p className="text-xs mt-3 font-mono text-gray-400 relative z-10">
                  ID: {cert.credentialId}
                </p>

                {/* BUTTON */}
                <Button
                  size="sm"
                  className="
                    mt-4 rounded-full
                    bg-pink-500 hover:bg-pink-600
                    text-white relative z-10
                  "
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Verifikasi
                </Button>

              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}