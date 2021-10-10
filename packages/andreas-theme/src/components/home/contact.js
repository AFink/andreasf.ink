import { connect } from "frontity";
import React, { useState } from 'react'

import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Contact = ({ state }) => {
    const id = state.contactform.id;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })


    const [errorsObj, setErrorsObj] = useState({})

    const hasError = (key) => {
        return errorsObj[key] !== '' && errorsObj[key] !== null && errorsObj[key] !== undefined;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const MySwal = withReactContent(Swal)

        //inspired by https://github.com/imranhsayed/frontity-contact-form-7

        let body = new FormData();

        body.append('contact-name', formData['name']);
        body.append('contact-email', formData['email']);
        body.append('contact-subject', formData['subject']);
        body.append('contact-message', formData['message']);

        const url = `${state.source.api}contact-form-7/v1/contact-forms/${id}/feedback`;

        const res = await fetch(url, {
            method: 'POST',
            body: body
        });
        const response = await res.json();

        if (response.status === 'mail_sent') {
            MySwal.fire({
                title: state.lang[state.currentLang].home.contact.success.title,
                text: state.lang[state.currentLang].home.contact.success.text,
                icon: 'success'
              })

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setErrorsObj({});

        } else if (response.status == 'validation_failed' || response.status === 'mail_failed') {
            const err = {};
            if (response.invalid_fields) {
                response.invalid_fields.forEach(field => {
                    const name = field.into.replace('span.wpcf7-form-control-wrap.contact-', '')
                    err[name] = field.message;
                });
            }
            setErrorsObj(err);
        }
    }


    return (
        <div id="services" className="bg-light">
            <Container className="col-xxl-8 px-4 py-5 text-body">
                <Row className="g-5 py-5">
                    <h2 className="display-6 fw-bold lh-1 mb-3 text-center text-md-start">{state.lang[state.currentLang].home.contact.title}</h2>

                    <Col md={4}>
                        <div className="contact-info">
                            <h3 className="">{state.lang[state.currentLang].home.contact.subtitle}</h3>
                            <p className="">{state.lang[state.currentLang].home.contact.subsubtitle}</p>
                        </div>
                    </Col>

                    <Col md={8}>
                        <form className="mt-6" onSubmit={handleSubmit} >
                            <Row>
                                <Col md={6} className="col-12">
                                    <div className="form-floating mb-3">
                                        <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" className={'form-control' + (hasError('name') ? ' is-invalid' : '')} id="name" name="name" placeholder="name@example.com" />
                                        <label htmlFor="name">{state.lang[state.currentLang].home.contact.form.name}</label>
                                        {hasError('name') ? (
                                            <div class="invalid-feedback">
                                                {errorsObj.name}
                                            </div>
                                        ) : ''}
                                    </div>
                                </Col>

                                <Col md={6} className="col-12">
                                    <div className="form-floating mb-3">
                                        <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" className={'form-control' + (hasError('email') ? ' is-invalid' : '')} id="email" name="email" placeholder="name@example.com" />
                                        <label htmlFor="email">{state.lang[state.currentLang].home.contact.form.email}</label>
                                        {hasError('email') ? (
                                            <div class="invalid-feedback">
                                                {errorsObj.email}
                                            </div>
                                        ) : ''}
                                    </div>
                                </Col>

                                <Col className="col-12">
                                    <div className="form-floating mb-3">
                                        <input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} type="text" className={'form-control' + (hasError('subject') ? ' is-invalid' : '')} id="subject" name="subject" placeholder="name@example.com" />
                                        <label htmlFor="subject">{state.lang[state.currentLang].home.contact.form.subject}</label>
                                        {hasError('subject') ? (
                                            <div class="invalid-feedback">
                                                {errorsObj.subject}
                                            </div>
                                        ) : ''}
                                    </div>
                                </Col>

                                <Col className="col-12">
                                    <div className="form-floating mb-3">
                                        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} type="textarea" className={'form-control' + (hasError('message') ? ' is-invalid' : '')} id="message" name="message" placeholder="name@example.com" rows="3" />
                                        <label htmlFor="message">{state.lang[state.currentLang].home.contact.form.message}</label>
                                        {hasError('message') ? (
                                            <div class="invalid-feedback">
                                                {errorsObj.message}
                                            </div>
                                        ) : ''}
                                    </div>
                                </Col>
                                <Col className="col-12">
                                    <input type="submit" className="btn btn-primary btn-block w-100" value={state.lang[state.currentLang].home.contact.form.submit} />
                                </Col>
                            </Row>

                        </form>
                    </Col>

                </Row>
            </Container >
        </div >
    )
};

export default connect(Contact);