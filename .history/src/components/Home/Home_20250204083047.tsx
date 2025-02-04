import { motion } from "framer-motion";
import ChairmanSpeech from "../ChairmanSays/ChairmanSpeech";
import Description from "../Description/Description";
import MakeDifference from "../MakeDifference/MakeDifference";
import Partner from "../Partner/Partner";
import SponsorChild from "../SponsorChild/SponsorChild";
import Testimonials from "../Testimonials/Testimonials";
import LandingPage from "./LandingPage";

const fadeIn = {
  hidden: { opacity: 0, y: 120 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

export default function Home() {
  return (
    <div>
      <LandingPage />
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <SponsorChild />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Description />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <MakeDifference />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <ChairmanSpeech />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Testimonials />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Partner />
      </motion.div>
      {/* <Blog /> */}
    </div>
  );
}
