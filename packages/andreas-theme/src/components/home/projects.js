import { connect } from "frontity";
import Link from "@frontity/components/link";

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import { SortFilter } from "@finki70/shufflejs-react";
import { jsUcfirst } from "@finki70/shufflejs-react/lib/Utils";


const Projects = ({ state, actions }) => {
    const data = state.source.get("/projects/");
    const projects = data.items?.map(
        ({ type, id }) => state.source[type][id]
    ) ?? [];

    const { items } = state.source.data["all-categories/"];

    const usedcats = [];

    projects.map(p => {

        const media = state.source.attachment[p.featured_media];

        p.mediaHelper = "";

        if (media !== undefined) {
            if ("source_url" in media) {
                p.mediaHelper = media.source_url;
            }
        }

        p.categoryHelper = p.categories.map(c => {
            const cat = items.find(i => i.id == c) ?? null;

            if (cat == null) { return null };

            usedcats.push(cat.id);

            return jsUcfirst(cat.name);
        });
        return p;
    })

    const cats = {
        "Body Types": {
        },
    }

    items.filter(c => [...new Set(usedcats)].includes(c.id)).map(c => {
        cats['Body Types'][String(c.name)] = {
            slug: c.slug,
        };
    });

    const defaultSort = "";

    const itemSelector = "sortblock";
    if (projects.length == 0) {
        return (
            <>
            </>
        );
    }

    return (
        <Container className="col-xxl-8 px-4 py-5">
            <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                <h2 className="display-6 fw-bold lh-1 mb-3 text-center text-md-start">{state.lang[state.currentLang].home.projects.title}</h2>
                <SortFilter
                    defaultSort={defaultSort}
                    taxonomies={cats}
                    itemSelector={itemSelector}
                    sortAllText={state.lang[state.currentLang].home.projects.all}
                >
                    <Elements records={projects} itemSelector={itemSelector} />
                </SortFilter>
            </Row>
        </Container>
    );
};

function Elements({ records, itemSelector }) {
    return records.map(record => (
        <Element key={record.id} record={record} itemSelector={itemSelector} />
    ));
}

function Element(props) {
    const { itemSelector, record } = props;
    return (
        <div
            key={record.id}
            className={`col col-md-3 ${itemSelector}`}
            data-groups={`${JSON.stringify(record.categoryHelper.map(s => String(s)))}`}>
            <Link link={record.link} className="text-decoration-none w-100">
                <div style={{ 'backgroundImage': `url("${record.mediaHelper}")` }} className="rounded bg-primary project d-flex">
                    <div className="details rounded d-flex flex-column justify-content-end w-100">
                        <h3 className="pt-5 mt-4 mb-3 lh-1" dangerouslySetInnerHTML={{ __html: record.title.rendered }}></h3>
                        <ul class="list-inline list-inline-dots mb-0">
                            {record.categoryHelper.map(s => {
                                return (
                                    <li class="list-inline-item">{s}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default connect(Projects);