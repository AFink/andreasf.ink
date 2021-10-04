import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Container from 'react-bootstrap/Container';

const Services = ({ state, libraries  }) => {
    const Html2React = libraries.html2react.Component;

    const data = state.source.get("/services");
    console.log(data);
    const services = data.items?.map(
        ({ type, id }) => state.source[type][id]
    ) ?? [];

    services.map(s => {
        const media = state.source.attachment[s.featured_media];

        s.mediaHelper = "";

        if (media !== undefined) {
            if ("source_url" in media) {
                s.mediaHelper = media.source_url;
            }
        }
        return s;
    })
    if (services.length == 0) {
        return (
            <div>
                uwu
            </div>
        );
    }

    return (
        <div id="services" className="bg-light">
            <div className="container col-xxl-8 px-4 py-5 text-white-50 text-center">
                <div className="row display-flex align-items-center align-items-md-stretch g-5 py-5 justify-content-md-center">
                    <h2 className="display-6 fw-bold lh-1 mb-3 text-start text-body">Services</h2>
                    {services.map(s => {
                        return (
                            <div className="col col-md-4">
                                <div className="service rounded p-4 bg-primary h-100">
                                    <div class="service-icon bg-info">
                                        <svg class="bi" width="1em" height="1em" viewBox="0 0 16 16">
                                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-light">{s.title.rendered}</h2>
                                    <div><Html2React html={s.excerpt.rendered} /></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </div>
    )
};

export default connect(Services);