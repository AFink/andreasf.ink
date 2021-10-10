import { connect, decode } from "frontity";

import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import { jsUcfirst } from "@finki70/shufflejs-react/lib/Utils";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div>
      <div id="header" className="bg-primary mb-0">
        <Container className="col-xxl-8 px-4 py-5 text-secondary text-center">
          <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
            <Col className="">
              <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
                {data.isTaxonomy && (
                  <>
                    {jsUcfirst(data.taxonomy)}:{" "}
                    <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
                  </>
                )}

                {data.isAuthor && (
                  <>
                    {state.lang[state.currentLang].list.author}: <b>{decode(state.source.author[data.id].name)}</b>
                  </>
                )}

                {(!data.isTaxonomy && !data.isAuthor) && (
                  <>
                   {state.lang[state.currentLang].list.blog}
                  </>
                )}
              </h1>
            </Col>
          </Row>
        </Container >
      </div>
      <Container id="post-list">
        <Row className="g-5 mt-0 justify-content-center">
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <Item key={item.id} item={item} />;
          })}
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default connect(List);