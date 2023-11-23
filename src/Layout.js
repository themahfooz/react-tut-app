import {Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./Home"
import About from "./About"
import Nav from "./Nav"

function Layout() {
    return (
        <div className="App">
            <Nav />

            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </div>
    )
}

export default Layout