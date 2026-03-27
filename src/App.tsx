import { Routes, Route } from "react-router-dom";
import Navbar   from "@/components/Navbar";
import Footer   from "@/components/Footer";
import Home     from "@/pages/Home";
import Features from "@/pages/Features";
import HowItWorks from "@/pages/HowItWorks";
import UseCases from "@/pages/UseCases";
import Pricing  from "@/pages/Pricing";
import Contact  from "@/pages/Contact";
import About    from "@/pages/About";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/features"    element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/use-cases"   element={<UseCases />} />
//           <Route path="/pricing"     element={<Pricing />} />
          <Route path="/about"     element={<About />} />
          <Route path="/contact"     element={<Contact />} />
          <Route path="*"            element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
