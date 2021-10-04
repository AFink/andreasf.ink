import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Container from 'react-bootstrap/Container';

const Contact = ({ state, actions }) => {
    return (
        <div id="services" className="bg-light">
            <div className="container col-xxl-8 px-4 py-5 text-body">
                <div className="row g-5 py-5">
                    <h2 className="display-6 fw-bold lh-1 mb-3 text-start">Contact</h2>

                    <div className="col-md-4">
                        <div className="contact-info">
                            <h3 className="wow fadeInUp" >Lorem ipsum dolor sit!</h3>
                            <p className="wow fadeInUp" >Lorem ipsum dolor sit<a href="mailto:mail@mail.com">Lorem</a>. </p>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <form className="mt-6" method="post">

                            <div className="messages"></div>

                            <div className="row">
                                <div className="col col-md-6">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="name@example.com" />
                                        <label for="name">Name</label>
                                    </div>
                                </div>

                                <div className="col col-md-6">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" />
                                        <label for="email">Email address</label>
                                    </div>
                                </div>

                                <div className="col col-md-12">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="subject" name="subject" placeholder="name@example.com" />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>

                                <div className="col col-md-12">
                                    <div class="form-floating mb-3">
                                        <textarea type="email" class="form-control" id="text" name="text" placeholder="name@example.com"  rows="3"/>
                                        <label for="text">Text</label>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-primary btn-block w-100">Submit</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div >
        </div>
    )
};

export default connect(Contact);