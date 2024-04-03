import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Navbar } from "./components";

import './App.scss';



import Home from './pages/Home';
import FootBar from './components/footbar/FootBar';
import AboutUs from './pages/AboutUs/AboutUs';
import Courses1 from './pages/Courses/Courses1';
// import { Contact } from './container';
import Contact1 from './container/Contact/Contact1';
import MasterCourses from './pages/MasterCourses/MasterCourses';
import Fsj from './pages/Fsj/Fsj';
import Blog from './pages/Blog/Blog';
import SingleBlog from './pages/Blog/SingleBlog';
import Gallery from './pages/Gallery/Gallery';
import Faq from './pages/FAQ/Faq';
import Header from './components/Header/Header';
import TopBar from './components/topbar/TopBar';
import EnrollForm from './container/Contact/EnrollForm';
import Copyright from './components/copyright/Copyright';
import WhatsappComponent from './components/whatsappComponent/WhatsappComponent';
import Null from './components/null/Null';
import Popup from './components/popup/Popup';
import Accomodation from './pages/Accomodation/Accomodation';
import Jobs from './pages/Jobs/Jobs';
import ExamBooking from './pages/Exam Booking/ExamBooking';
import Error from './components/error/Error';






function App() {
  return (

    <div className="app">
      <Router>
        <Popup/>
        <TopBar/>
        <Header/>
        <Null/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact1/>} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/courses' element={<Courses1/>}/>
          <Route path='/master-courses' element={<MasterCourses/>}/>
          <Route path='/fsj-ausbildung' element={<Fsj/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/enroll' element={<EnrollForm/>}/>
          <Route path='/accommodation' element = {<Accomodation/>}/>
          <Route path='/jobs' element = {<Jobs/>}/>
          <Route path='/exam-booking' element = {<ExamBooking/>}/>
          <Route path='/*' element = {<Error/>}/>
          

        </Routes>

        <FootBar/>
        <Copyright/>
        <WhatsappComponent/>
      </Router>

    </div>

  );
}

export default App;
