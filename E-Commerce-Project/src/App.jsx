import { Route, Routes } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import FeaturedSection from "./pages/FeaturedSection";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import PCBuilder from "./pages/PCBuilder";
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
            <Route path="/pcbuilder" element={ <PCBuilder />} />
        </Routes>
        <Footer />
        </>
        
    )



}

export default App;