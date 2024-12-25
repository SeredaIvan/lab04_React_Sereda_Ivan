import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../animatedPage/AnimatedPage";
import { animations } from "../../animations/animations";

const Page = () => (
    <AnimatedPage animation={animations.level2}>
        <div>
            <h1>Page</h1>
            <Link to="/page/subpage">Subpage</Link>
        </div>
    </AnimatedPage>
);

export default Page;
