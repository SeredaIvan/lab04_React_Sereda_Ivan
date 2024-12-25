import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../animatedPage/AnimatedPage";
import { animations } from "../../animations/animations";

const Home = () => (
    <AnimatedPage animation={animations.level1}>
        <div>
            <h1>Home</h1>
            <Link to="/page">Page</Link>
        </div>
    </AnimatedPage>
);

export default Home;
