import { connect, styled } from "frontity";
import Header from "./header";
import Posts from "./posts";
import Services from "./services";

const Home = ({ state, actions }) => {
    return (
        <div id="home">
            <Header />
            <Services />
            <Posts />
        </div>
    );
};

export default connect(Home);