import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import { Navbar } from "./components";

import "./App.scss";

import FootBar from "./components/footbar/FootBar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Courses1 from "./pages/Courses/Courses1";
import Home from "./pages/Home";
// import { Contact } from './container';
import Header from "./components/Header/Header";
import Copyright from "./components/copyright/Copyright";
import Error from "./components/error/Error";
import Null from "./components/null/Null";
import Popup from "./components/popup/Popup";
import TopBar from "./components/topbar/TopBar";
import WhatsappComponent from "./components/whatsappComponent/WhatsappComponent";
import Contact1 from "./container/Contact/Contact1";
import EnrollForm from "./container/Contact/EnrollForm";
import Accomodation from "./pages/Accomodation/Accomodation";
import Blog from "./pages/Blog/Blog";
import SingleBlog from "./pages/Blog/SingleBlog";
import ExamBooking from "./pages/Exam Booking/ExamBooking";
import Faq from "./pages/FAQ/Faq";
import Fsj from "./pages/Fsj/Fsj";
import Gallery from "./pages/Gallery/Gallery";
import Jobs from "./pages/Jobs/Jobs";
import MasterCourses from "./pages/MasterCourses/MasterCourses";

function App() {
  return (
    <div className="app">
      <Router>
        <Popup />
        <TopBar />
        <Header />
        <Null />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact1 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses1 />} />
          <Route path="/master-courses" element={<MasterCourses />} />
          <Route path="/fsj-ausbildung" element={<Fsj />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/enroll" element={<EnrollForm />} />
          <Route path="/accommodation" element={<Accomodation />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/exam-booking" element={<ExamBooking />} />
          <Route path="/*" element={<Error />} />
        </Routes>

        <FootBar />
        <Copyright />
        <WhatsappComponent />
      </Router>
    </div>
  );
}

export default App;
