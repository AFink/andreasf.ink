import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Container from 'react-bootstrap/Container';
import { jsUcfirst } from "shufflejs-react/lib/Utils";

import moment from 'moment';

const Posts = ({ state, libraries }) => {
    const Html2React = libraries.html2react.Component;

    const po = state.source.data["three-posts/"];

    const { items } = state.source.data["all-categories/"];
    const posts = po.items.map(p => {
        const media = state.source.attachment[p.featured_media];

        p.mediaHelper = "";

        if (media !== undefined) {
            if ("source_url" in media) {
                p.mediaHelper = media.source_url;
            }
        }

        p.categoryHelper = p.categories.map(c => jsUcfirst(items.find(i => i.id == c) ? items.find(i => i.id == c).name : ''));
        return p;
    })

    return (
        <div id="posts" className="bg-rosa">
            <div className="container col-xxl-8 px-4 py-5 ">
                <div className="row align-items-center g-5 py-5">
                    <h2 className="display-6 fw-bold lh-1 mb-3 text-start text-body">Posts</h2>
                    {posts.map(p => {
                        console.log(p)
                        return (
                            <div className="col col-md-4">
                                <Link link={p.link} className="post rounded text-decoration-none text-white-50 text-center hvr-float w-100">
                                    <div class="post-image">
                                        <img src={p.mediaHelper} />
                                    </div>
                                    <div className="details p-4 bg-primary">
                                        <h2 className="text-light">{p.title.rendered}</h2>
                                        <div className="excerpt"><Html2React html={p.excerpt.rendered} /></div>
                                        <span>{moment(p.date).format('LL')}</span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div >
        </div>
    )
};

export default connect(Posts);