import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

import { SortFilter } from "shufflejs-react";
import { jsUcfirst } from "shufflejs-react/lib/Utils";

import moment from 'moment';

const Projects = ({ state, actions }) => {
    const data = state.source.get("/projects/");
    const projects = data.items?.map(
        ({ type, id }) => state.source[type][id]
    ) ?? [];

    const { items } = state.source.data["all-categories/"];
    const cats = {
        "Body Types": {
        },
    }
    items.map(c => {
        cats['Body Types'][String(c.name)] = {
            slug: c.slug,
        };
    });

    projects.map(p => {
        const media = state.source.attachment[p.featured_media];

        p.mediaHelper = "";

        if (media !== undefined) {
            if ("source_url" in media) {
                p.mediaHelper = media.source_url;
            }
        }

        p.categoryHelper = p.categories.map(c => jsUcfirst(items.find(i => i.id == c).name));
        return p;
    })
    //projects.map(p => console.log(p.categoryHelper));

    const defaultSort = ""; // empty string defaults to show all

    const itemSelector = "sortblock";
    if (projects.length == 0) {
        return (
            <div>
                uwu
            </div>
        );
    }

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <h2 className="display-6 fw-bold lh-1 mb-3">Projects</h2>
                <SortFilter
                    defaultSort={defaultSort}
                    taxonomies={cats}
                    itemSelector={itemSelector}
                >
                    <Elements records={projects} itemSelector={itemSelector} />
                </SortFilter>
            </div>
        </div>
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
            className={`col col-md-3 ${itemSelector}`}
            data-groups={`${JSON.stringify(record.categoryHelper.map(s => String(s)))}`}>

            <Link link={record.link} className="text-decoration-none">
                <div style={{ 'background-image': `url("${record.mediaHelper}")` }} className="rounded bg-primary project">
                    <div className="details">
                        <h3 className="pt-5 mt-4 mb-3 lh-1">
                            {record.title.rendered}
                        </h3>

                        {/*<div class="item-meta white is-primary-tag">
                    <time datetime={record.date.substr(0, 10)}>{moment(record.date).fromNow()}</time>
                </div>*/}

                        {record.categoryHelper.map(s => {
                            return (
                                <>
                                    <span class="" href="">{s}</span>{' '}
                                </>
                            );
                        })}
                    </div>
                </div>
            </Link>



        </div>
    );
}

export default connect(Projects);