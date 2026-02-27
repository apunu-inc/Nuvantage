import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./utils/ScrollToTop";
import { pageTransition } from "./animations/variants";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <About />
              </motion.div>
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
