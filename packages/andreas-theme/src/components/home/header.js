import { connect } from "frontity";
import Link from "@frontity/components/link";

import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Header = ({ state }) => {
    return (
        <div id="header" className="bg-primary">
            <Container className="col-xxl-8 px-4 py-5 text-secondary text-md-start text-center">
                <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <Col sm={8} lg={6} className="col-12">
                        <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </Col>
                    <Col lg={6}>
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">{state.lang[state.currentLang].home.header.title}</h1>
                        <div className="lead text-white-50 mb-5 mb-md-3">
                            <ul className="list-inline list-inline-dots mb-0">
                                {state.lang[state.currentLang].home.header.subtitles.map((s, i) => (<li key={i} className="list-inline-item">{s}</li>))}
                            </ul>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link link={state.lang[state.currentLang].home.header.buttons[0].link} type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 mb-3 mb-md-0 fw-bold">{state.lang[state.currentLang].home.header.buttons[0].title}</Link>
                            <Link link={state.lang[state.currentLang].home.header.buttons[1].link} type="button" className="btn btn-outline-light btn-lg px-4">{state.lang[state.currentLang].home.header.buttons[1].title}</Link>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    )
};

export default connect(Header);