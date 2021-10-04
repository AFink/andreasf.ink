import { connect, styled } from "frontity";
import Header from "./header";

const Home = ({ state, actions }) => {
    return (
        <div id="home">
            <Header />
        </div>
    );
};

export default connect(Home);