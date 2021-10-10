import { connect } from "frontity";

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import { jsUcfirst } from "@finki70/shufflejs-react/lib/Utils";
import Item from "../list/list-item";

const Posts = ({ state }) => {
    const po = state.source.data["three-posts/"];

    const { items } = state.source.data["all-categories/"];
    const posts = po.items.map(p => {
        p.categoryHelper = p.categories.map(c => jsUcfirst(items.find(i => i.id == c) ? items.find(i => i.id == c).name : ''));
        return p;
    })

    return (
        <div id="posts" className="bg-rosa">
            <Container className="col-xxl-8 px-4 py-5 ">
                <Row className="align-items-center g-5 py-5 align-items-md-stretch">
                    <h2 className="display-6 fw-bold lh-1 mb-3 text-body text-center text-md-start">{state.lang[state.currentLang].home.posts.title}</h2>
                    {posts.map(item => {
                        return <Item key={item.id} item={item} />;
                    })}
                </Row>
            </Container >
        </div>
    )
};

export default connect(Posts);