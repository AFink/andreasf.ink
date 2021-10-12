import { connect } from "frontity";

import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import FeaturedMedia from "../featured-media";

const Services = ({ state, libraries }) => {
    const Html2React = libraries.html2react.Component;

    const data = state.source.get("/services");
    const services = data.items?.map(
        ({ type, id }) => state.source[type][id]
    ) ?? [];

    if (services.length == 0) {
        return (
            <>
            </>
        );
    }

    return (
        <div id="services" className="bg-light">
            <Container className="col-xxl-8 px-4 py-5 text-white-50 text-center">
                <Row className="display-flex align-items-center align-items-md-stretch g-5 py-5 justify-content-center justify-content-md-start">
                    <h2 className="display-6 fw-bold lh-1 mb-3 text-body text-center text-md-start">{state.lang[state.currentLang].home.services.title}</h2>
                    {services.map(s => {
                        return (
                            <Col md={4} className="" key={s.id}>
                                <div className="service rounded p-4 bg-primary h-100">
                                    <div className="service-icon bg-info p-2">
                                        <FeaturedMedia id={s.featured_media} margin={false} />
                                    </div>
                                    <h2 className="text-light" dangerouslySetInnerHTML={{ __html: s.title.rendered }}></h2>
                                    <div><Html2React html={s.excerpt.rendered} /></div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container >
        </div>
    )
};

export default connect(Services);