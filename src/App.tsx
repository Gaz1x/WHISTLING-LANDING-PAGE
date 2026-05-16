import Navbar from "./components/Navbar";
import WriteBlock from "./WriteBlock/WriteBlock";
import AboutBlock from "./AboutBlock/AboutBlock";
import InteractiveComponents from "./InteractiveComponents/InteractiveComponents";
import CommentsBlock from "./CommentsBlock/CommentsBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <WriteBlock/>
      <AboutBlock/>
      <InteractiveComponents/>
      <CommentsBlock/>
      <Footer/>
    </>
  );
}

export default App;
