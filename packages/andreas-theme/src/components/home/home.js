import { connect, styled } from "frontity";
import Header from "./header";
import Contact from "./contact";
import Projects from "./projects";
import Posts from "./posts";
import Services from "./services";

const Home = ({ state, actions }) => {
    return (
        <div id="home">
            <Header />
            <Services />
            <Projects />
            <Posts />
            <Contact />
        </div>
    );
};

export default connect(Home);