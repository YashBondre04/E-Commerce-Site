import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import FeaturedSection from "./pages/FeaturedSection";
import ExplorePage from "./pages/ExplorePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {


    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={
                <>
                <Hero />
                <FeaturedSection />
                </>
            } 
            />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/register" element={ <RegisterPage />} />
        </Routes>
        <Footer />
        </>
        
    )



}

export default App;