import './Home.css';
import MainContainer from "../components/template/MainContainer";
import Navbar from "../components/template/Navbar";
import FooterSection from "../components/template/FooterSection";
function Home() {

  return (
 
    <div className="Home">
      <header>
        <Navbar/>
      </header>
      <main>
        <MainContainer></MainContainer>
      </main>
      <footer>
          <FooterSection />
      </footer>
    </div>
  );
}

export default Home;
