import { connect, styled } from "frontity";
import Header from "./header";
import Posts from "./posts";

const Home = ({ state, actions }) => {
    return (
        <div id="home">
            <Header />
            <Posts />
        </div>
    );
};

export default connect(Home);