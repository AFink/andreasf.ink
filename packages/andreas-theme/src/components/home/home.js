import { connect, styled } from "frontity";
import Header from "./header";
import Projects from "./projects";

const Home = ({ state, actions }) => {
    return (
        <div id="home">
            <Header />
            <Projects />
        </div>
    );
};

export default connect(Home);