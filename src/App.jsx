import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import Search from "./components/Search"
import Favorites from "./components/Favorites"
import { FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa"


export default function App() {
  return(

    <Router>
      <header>
        <Link 
          className="site-logo" 
          to="/" style={{padding: 10 }}
        > recREVELRY 
        </Link>
        <nav style={{ margin: 10 }}>
          <Link 
            to="/search" 
            style={{padding: 5 }}
          > Search 
          </Link>
          <Link 
            to="/favorites" 
            style={{padding: 5 }}
          > Saved Places 
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <footer>
        <div className="footer">
          <div className="copy"> 
            Copyright 2023 < FaRegCopyright /> 
            <Link className="foot-logo" to="/"> recREVELRY </Link> 
          </div>
          <div className="social">
            < FaFacebookF className="f"/>
            < FaGithub className="git"/>
            < FaInstagram className="insta"/>
            < FaTwitter className="twit"/>
          </div>
        </div>
        <p className="disclaimer"> 
          Disclaimer: the data that is used in this app is incomplete and inconsistent. 
          Want to help fix it? Volunteer <a href="https://www.volunteer.gov/s/" target="_blank" rel="noopener noreferrer">
          HERE! </a>
        </p>
      </footer>
    </Router>
  )
}