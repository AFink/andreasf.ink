import { connect, styled } from "frontity";
import Header from "./header";
import Services from "./services";

const Home = ({ state, actions }) => {
    return (
        <div id="home">
            <Header />
            <Services />
        </div>
    );
};

export default connect(Home);