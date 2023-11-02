import { Explanation } from "@/components/Explanation";
import { Hero } from "@/components/Hero";
import Works from "@/components/Works";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  return (
    <div>
      <Hero />
      <Explanation />

      <img src="/roadbanner.svg" className="w-full my-[5vh]" />
      <Works />
    </div>
  );
}
