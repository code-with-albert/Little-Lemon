import './About.css';
import Navbar from "../components/template/Navbar";
import FooterSection from "../components/template/FooterSection";
import BookingForm from "../components/template/BookingForm";

function About() {
  return (
    <div className="About">
        <header>
            <Navbar/>
        </header>
        <main>
            <BookingForm />
        </main>
        <footer>
            <FooterSection />
        </footer>
    </div>
  );
}

export default About;
