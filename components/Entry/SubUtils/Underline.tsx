import { motion } from "framer-motion";

const linkVariants = {
  hover: {
    textDecoration: "underline",
    transition: { duration: 2 },
  },
  tap: {
    textDecoration: "none",
    transition: { duration: 2 },
  },
};
const Underline = () => (
  <motion.a whileHover="hover" whileTap="tap" variants={linkVariants} href="#">
    Hover
  </motion.a>
);

export default Underline;
