import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../animatedPage/AnimatedPage";
import { animations } from "../../animations/animations";

const Subpage = () => (
    <AnimatedPage animation={animations.default}>
        <div>
            <h1>Subpage</h1>
            <Link to="/">Home</Link>
        </div>
    </AnimatedPage>
);

export default Subpage;
