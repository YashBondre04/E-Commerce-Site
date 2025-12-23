import React from "react";
import { Routes, Route } from "react-router-dom";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { DropdownMenu } from "./components/ui/dropdown-menu";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";

const App = () => {


    return (
        <>
        <Header />
        <Hero/>
        <Footer />
        </>
    )



}

export default App;