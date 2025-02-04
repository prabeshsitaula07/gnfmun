import { motion } from "framer-motion";
import child1 from "../../assets/child1.jpg";
import tree from "../../assets/tree.jpg";
import volunteer from "../../assets/volunteer.jpg";

export default function MakeDifference() {
  const initiatives = [
    {
      image: child1,
      title: "Sponsor a child",
      description:
        "We provide monetary assistance to children living in poverty all over the world.",
    },
    {
      image: tree,
      title: "Tree-Plantation Drives",
      description: "Join us in restoring greenery and reducing carbon footprints.",
    },
    {
      image: volunteer,
      title: "Volunteering and Public Service",
      description: "Help us create cleaner, healthier spaces for everyone.",
    },
  ];

  return (
    <div className="min-h-fit px-12 py-12 items-center bg-gray-50">
      <h1 className="text-center text-6xl font-light pb-8">How to make a difference</h1>
      <div className="flex justify-between w-full gap-14">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            className="relative w-full h-80 perspective-1000"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Side (Image) */}
            <motion.div
              className="absolute inset-0 backface-hidden rounded-lg shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            {/* Back Side (Description) */}
            <motion.div
              className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-gray-900 text-white p-4 rounded-lg shadow-lg"
              style={{ transform: "rotateY(180deg)", transformStyle: "preserve-3d" }}
            >
              <span className="text-xl font-semibold">{initiative.title}</span>
              <p className="py-4 text-gray-300 text-center">{initiative.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
