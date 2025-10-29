import Layout from "./Layout.jsx";

import Home from "./Home";

import contact from "./contact";

import Technology from "./Technology";

import Dreamhouse from "./Dreamhouse";

import dreamhouse from "./dreamhouse";

import technology from "./technology";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    contact: contact,
    
    Technology: Technology,
    
    Dreamhouse: Dreamhouse,
    
    dreamhouse: dreamhouse,
    
    technology: technology,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/contact" element={<contact />} />
                
                <Route path="/Technology" element={<Technology />} />
                
                <Route path="/Dreamhouse" element={<Dreamhouse />} />
                
                <Route path="/dreamhouse" element={<dreamhouse />} />
                
                <Route path="/technology" element={<technology />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}