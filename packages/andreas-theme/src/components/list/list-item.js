import { connect } from "frontity";
import Link from "@frontity/components/link";

import Col from "react-bootstrap/Col";

import FeaturedMedia from "../featured-media";
import { jsUcfirst } from "@finki70/shufflejs-react/lib/Utils";
import moment from "moment";

const Item = ({ state, item, libraries, showExcerpt = true, showCategories = true }) => {
  const Html2React = libraries.html2react.Component;

  const { items } = state.source.data["all-categories/"];

  item.categoryHelper = [];
  try {
    item.categoryHelper = item.categories.map(c => items.find(i => i.id == c) ? items.find(i => i.id == c) : null).filter(x => x);
  } catch (error) {
    console.log(error);
  }

  return (
    <Col md={4}>
      <Link link={item.link} className={(item.featured_media ? "" : "no_media ") + "post rounded text-decoration-none text-white-50 text-center hvr-float w-100 h-100 d-flex flex-column flex-wrap"}>
        <div className="post-image">
          <FeaturedMedia id={item.featured_media} margin={false} className="w-100" />
        </div>
        <div className="details p-4 pt-3 bg-primary d-flex flex-column flex-grow-1">
          {showCategories ? <ul className="list-inline mb-0 mb-2">
            {item.categoryHelper.map(c => {
              return (
               <li key={c.id} className="list-inline-item"><span className="badge badge-warning"><Link link={c.link} className="text-decoration-none text-white-50">{jsUcfirst(c.name)}</Link></span></li>
              );
            })}
          </ul> : null }
          <h2 className="text-light" dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
          {showExcerpt ? <div className="excerpt mb-auto"><Html2React html={item.excerpt.rendered} /></div> : null }
          <span>{moment(item.date).format('LL')}</span>
        </div>
      </Link>
    </Col>
  );
};

export default connect(Item);