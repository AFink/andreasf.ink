import { connect } from "frontity";
import Link from "@frontity/components/link";

import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import GitInfo from 'react-git-info/macro';

const Footer = ({ state }) => {
    const gitInfo = GitInfo();

    const userName = "AFink";
    const repoName = "andreasf.ink";

    const href = `https://github.com/${userName}/${repoName}/commit/${gitInfo.commit.hash}`;

    const year = new Date().getFullYear() > 2021 && " - " + new Date().getFullYear();

    return (
        <footer className="footer footer-transparent d-print-none mt-auto">
            <Container>
                <Row className="text-center align-items-center flex-row-reverse">
                    <Col>
                        <ul className="list-inline list-inline-dots mb-0">
                            {state.theme.footermenu.map(([name, link]) => {
                                const isCurrentPage = state.router.link === link;
                                return (
                                    <li key={name} className="list-inline-item">
                                        <Link link={link} className={(isCurrentPage ? 'active ' : '') + 'link-secondary'} aria-current={isCurrentPage ? "page" : undefined}>
                                            {name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <div className="col-lg-auto ms-lg-auto">

                    </div>
                    <Col>
                        <ul className="list-inline list-inline-dots mb-0">
                            <li key="copyright" className="list-inline-item">
                                {state.lang[state.currentLang].footer.copyright} © 2021{year}{' '}
                                {state.lang[state.currentLang].footer.copyrightholder}{' '}
                            </li>
                            <li key="rightsreserved" className="list-inline-item">
                                {state.lang[state.currentLang].footer.rightsreserved}
                            </li>
                            <li key="changelog" className="list-inline-item">
                                <a href={href} className="link-secondary" target="_blank">{gitInfo.commit.shortHash}</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default connect(Footer);