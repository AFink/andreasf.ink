import { connect, styled } from "frontity";
import Header from "./header";
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
        </div>
    );
};

export default connect(Home);