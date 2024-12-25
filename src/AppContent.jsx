import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './components/home/Home';
import Page from './components/page/Page';
import Subpage from './components/subpage/Subpage';

export default function AppContent() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
                <Route path="/page/subpage" element={<Subpage />} />
                <Route path="*" element={<div>404: Page Not Found</div>} />
            </Routes>
        </AnimatePresence>
    );
}
