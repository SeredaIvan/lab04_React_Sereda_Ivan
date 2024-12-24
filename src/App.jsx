import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home.jsx'
import Page from './components/page/Page.jsx'
import Subpage from './components/subpage/Subpage.jsx'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
                <Route path="/page/subpage" element={<Subpage />} />
            </Routes>
        </Router>
    );
}
