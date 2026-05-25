import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'farahfjrna@gmail.com',
    href: 'mailto:farahfjrna@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 821-6536-3279',
    href: 'tel:+6282165363279',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: 'https://maps.app.goo.gl/3iGYj1kVng83tevE9',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const err: any = {};
      result.error.errors.forEach((e) => (err[e.path[0]] = e.message));
      setErrors(err);
      return;
    }

    setIsSubmitting(true);

    try {
      await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      toast({
        title: '💗 Pesan Terkirim',
        description: 'Aku bakal bales secepatnya ya ✨',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden scroll-mt-24"
    >
      {/* 💗 BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-pink-50 to-white dark:from-black dark:via-zinc-950 dark:to-black" />

      <motion.div
        className="absolute w-[600px] h-[600px] bg-pink-400/20 blur-[160px] top-[-200px] left-[-200px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] bg-fuchsia-400/20 blur-[160px] bottom-[-200px] right-[-200px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500">
            Hubungi Aku 💌
          </h2>
          <p className="text-muted-foreground mt-2">
            Kalau mau ngobrol atau kerja sama ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* INFO SIDE */}
          <div className="space-y-5">

            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                whileHover={{ x: 6 }}
                className="
                  flex items-center gap-4 p-5 rounded-2xl
                  bg-white/60 dark:bg-white/5
                  border border-pink-200/40
                  backdrop-blur-xl
                  hover:border-pink-400
                  transition
                "
              >
                <div className="p-3 rounded-xl bg-pink-400/10">
                  <item.icon className="h-5 w-5 text-pink-400" />
                </div>

                <div>
                  <p className="text-sm text-pink-300">{item.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

          </div>

          {/* FORM SIDE */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              p-6 rounded-2xl
              bg-white/60 dark:bg-white/5
              backdrop-blur-xl
              border border-pink-200/40
              space-y-4
            "
          >

            <Input
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              name="subject"
              placeholder="Subjek"
              value={formData.subject}
              onChange={handleChange}
            />

            <Textarea
              name="message"
              placeholder="Tulis pesan..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full rounded-full
                bg-pink-500 hover:bg-pink-600
                shadow-[0_0_25px_rgba(255,105,180,0.4)]
              "
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Kirim 💗
            </Button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}