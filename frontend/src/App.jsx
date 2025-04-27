import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router , Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Quiz from './quiz.jsx'
import PrivacyPolicy from './privacypolicy.jsx';
import Register from './registration.jsx';  
// import Login from './login.jsx';    

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './App.css';
import { baseURL } from './urls.js';

function Home() {
  const [category, setCategory] = useState('');
  const [quizData, setQuizData] = useState();
  const [searchInput, setSearchInput] = useState(''); 



  useEffect(() => {
    if (category && category !== 'Home') {
      const fetchQuizData = async () => {
        try {
          const Category = category.toLowerCase().replace(/\s+/g, '');
          const res = await axios.get(`${baseURL}/api/quizzes/${Category}`);
          setQuizData(res.data);
        } catch (error) {
          console.error('Error fetching quiz data:', error);
          setQuizData();
        }
      };

      fetchQuizData();
    }
  }, [category]);
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // ✅ prevent page reload
    if (searchInput.trim() !== '') {
      setCategory(searchInput.trim()); // ✅ trigger quiz loading
    }
  };

  

  return (
    <>
      <div id="root"></div>
      <nav>
        <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">KUIZU</a>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/" >Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/register">Register</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/privacy-policy">Privacy Policy</Link></li>

            </ul>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
                <input
                  type="search"
                  className="form-control me-2"
                  placeholder="Search category..."
                  aria-label="Search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
          </div>
        </div>
      </nav>
      </div>
      </nav>
      {!category ? (
        <section id="home">
          <card class="red">
            <h1>KUIZU</h1>
            <p>A platform, where you can enhance your quiz knowledge and challenge yourself.</p>
            

<div className="category-grid">
  {[
    { src: "https://drop.ndtv.com/albums/SPORTS/ipl-2023-virat-_638201169147165823/638201169147165823_640x480.jpeg?output-quality=80&downsize=522:*", alt: "Cricket" },
    { src: "https://cdn.slidesharecdn.com/ss_thumbnails/currentaffairs-140312221959-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds", alt: "Current Affairs" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUAyWXWkLMAdpjNZC3Pk9YWy7mqwOnMLjJw&s", alt: "Movies" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sangameshwar_Temple%2C_Pattadakal%2C_Karnataka%2C_India.jpg/640px-Sangameshwar_Temple%2C_Pattadakal%2C_Karnataka%2C_India.jpg", alt: "History" },
    { src: "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=", alt: "Food" },
    { src: "https://t4.ftcdn.net/jpg/02/43/47/67/360_F_243476769_d15WIB1ERQTzvRW51NTMOi5guTvoBOrf.jpg", alt: "Geography" },
    { src: "https://images.immediate.co.uk/production/volatile/sites/3/2018/04/https-2F2Fblogs-images.forbes.com2Fscottmendelson2Ffiles2F20182F042Fimage001-cebe539.jpg?quality=90&crop=75px,0px,811px,540px&resize=960,640", alt: "Marvel" },
    { src: "https://content.jdmagicbox.com/v2/comp/visakhapatnam/r9/0891px891.x891.210201224926.d4r9/catalogue/-xiglw3ri7l.jpg", alt: "Football" },
    { src: "https://webneel.com/daily/sites/default/files/images/daily/04-2014/12-disney-cartoons.jpg", alt: "Disney" },
    { src: "https://cdn.pixabay.com/photo/2024/02/24/20/54/books-8594725_640.jpg", alt: "Literature" },
    { src: "https://img.etimg.com/thumb/width-640,height-480,imgsize-40814,resizemode-75,msid-87260108/news/economy/indicators/economy-likely-to-register-9-5-pc-growth-this-fiscal-report/economy-agencies.jpg", alt: "Economy" },
    { src: "https://images.theconversation.com/files/650009/original/file-20250219-38-semzza.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C4031%2C3024&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip", alt: "Politics" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L1wXsn_lSgl1jZZtbI1h8ypmY3HL-mcEpQ&s", alt: "Cartoons" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzvALTlZSlSF0r_5wdP2aVmDEyQLhxnRMrw&s", alt: "Anime" },
    { src: "https://femina.wwmindia.com/content/2021/nov/harry-011637129074.jpg", alt: "Harry Potter" },
    { src: "https://artoflearningtamil.wordpress.com/wp-content/uploads/2018/01/1024px-tamil_culture.jpg?w=640", alt: "Tamizh" },
  ].map((item, index) => (
    <div className="category-item" key={index} onClick={() => setCategory(item.alt)}>
      <img src={item.src} alt={item.alt} className="category-img" />
      <div className="caption">{item.alt}</div>
    </div>
  ))}
</div>

          </card>
        </section>
      ) : (
        <Quiz category={category} questions={quizData?.questions || []} />
      )}

<footer class="footer">
  <p> "Quizzes powered by curiosity. Score high, learn more!":</p>
  <div class="footer-links">
     <a href="https://www.linkedin.com/in/m-pradeep-3b2169270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="footer-btn">
      <span class="emoji"><i class="fa-brands fa-linkedin"></i></span> LinkedIn
    </a>

  </div>
  <span class="emoji"><p>Say hello:<i class="fa-solid fa-envelope"></i> <a href="mailto:pradeepmanikandann@gmail.com">pradeepmanikandann@gmail.com</a></p></span>

  

</footer>
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/login" element={<Login />} /> (if you want later) */}
      </Routes>
    </Router>
  );
}



export default App;