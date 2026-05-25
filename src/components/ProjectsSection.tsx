import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const songs = [
  {
    title: "💖 Cruel Summer - Taylor Swift",
    description: "Lagu cinta yang super catchy & sering masuk Spotify charts ✨",
    image: "/summer.jpg",
    color: "from-pink-400 via-rose-500 to-fuchsia-500",
  },
  {
    title: "💔 Snooze - SZA",
    description: "Vibe galau yang soft dan relatable banget 🌙",
    image: "/sos.jpg",
    color: "from-purple-400 via-pink-400 to-rose-500",
  },
{
  title: "🕊️ golden hour - JVKE",
  description: "Lagu lembut dengan vibe hangat dan aesthetic banget ✨",
  image: "/golden.jpg",
  color: "from-pink-300 via-pink-400 to-rose-400",
},
{
  title: "🌸 Calm Down - Rema & Selena Gomez",
  description: "Lagu chill viral dengan vibe romantis & soft ✨",
  image: "/calmdown.webp",
  color: "from-pink-200 via-rose-200 to-orange-200",
},
{
  title: "☁️ Lovely - Billie Eilish & Khalid",
  description: "Vibe sedih tapi tenang, aesthetic banget 🌙",
  image: "/lovely.webp",
  color: "from-purple-200 via-pink-200 to-slate-200",
},
{
  title: "💫 As It Was - Harry Styles",
  description: "Lagu upbeat mellow yang super populer di Spotify 🔥",
  image: "/itwas.jpg",
  color: "from-pink-200 via-rose-300 to-yellow-200",
},
];

export default function SongsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="
        relative py-24 overflow-hidden

        bg-gradient-to-br
        from-pink-50 via-rose-50 to-white

        dark:from-[#020617]
        dark:via-[#0f172a]
        dark:to-[#020b1a]

        text-gray-900 dark:text-white
      "
    >
      {/* 🌸 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-pink-400/20 blur-[150px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-rose-400/20 blur-[150px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* 🎧 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          🎧 Favorite Songs
        </h2>
        <p className="text-muted-foreground mt-2">
          Lagu-lagu yang sering aku dengerin dan suka banget 💖
        </p>
      </motion.div>

      {/* 🎀 CAROUSEL */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">

            {songs.map((song, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="
                    group p-4 rounded-2xl
                    bg-white/60 dark:bg-white/5
                    backdrop-blur-xl
                    border border-pink-200/40 dark:border-white/10
                    transition duration-500
                  "
                >

                  {/* 🎀 IMAGE */}
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${song.color} blur-2xl opacity-40 group-hover:opacity-80 transition`} />

                    <div className={`relative rounded-xl p-[2px] bg-gradient-to-r ${song.color}`}>
                      <div className="overflow-hidden rounded-xl aspect-[2/3] bg-black">
                        <img
                          src={song.image}
                          alt={song.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 🎵 TEXT */}
                  <h3 className="mt-4 font-bold text-lg text-pink-500">
                    {song.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {song.description}
                  </p>

                </motion.div>
              </div>
            ))}

          </div>
        </div>

        {/* ⬅️ BUTTON */}
        <Button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 dark:bg-white/10 backdrop-blur-md"
        >
          <ChevronLeft />
        </Button>

        {/* ➡️ BUTTON */}
        <Button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 dark:bg-white/10 backdrop-blur-md"
        >
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}