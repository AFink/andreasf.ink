import { connect, styled } from "frontity";
import Header from "./header";
import Contact from "./contact";

const Home = ({ state, actions }) => {
    return (
        <div id="home">
            <Header />
            <Contact />
        </div>
    );
};

export default connect(Home);