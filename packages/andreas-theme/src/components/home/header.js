import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Container from 'react-bootstrap/Container';

const Header = ({ state, actions }) => {
    return (
        <div id="header" className="bg-primary">
            <div className="container col-xxl-8 px-4 py-5 text-secondary text-md-start text-center">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Andreas Fink</h1>
                        <p className="lead text-white-50">
                            <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item">Frontend-Entwickler</li>
                            <li class="list-inline-item">Schüler</li>
                            <li class="list-inline-item">Wordpress-Entwickler</li>
                            <li class="list-inline-item">NodeJs-Entwickler</li>
                        </ul>
                        </p>
                        
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                            <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
};

export default connect(Header);