import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import FeaturedMedia from "./featured-media";
import { jsUcfirst } from "@finki70/shufflejs-react/lib/Utils";
import List from "./list";
import moment from "moment";

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const { items } = state.source.data["all-categories/"];

  const categoryHelper = post.categories.map(c => items.find(i => i.id == c) ? items.find(i => i.id == c) : null).filter(x => x);

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <div>
      <div id="header" className="bg-primary">
        <Container className="col-xxl-8 px-4 py-5 text-secondary text-center">
          <Row className="flex-lg-row-reverse align-items-center g-5 pt-5">
            <Col>
              <div className="lead text-white-50 mb-5 mb-md-3">
                <ul className="list-inline list-inline-dots mb-0">
                  {categoryHelper.map((c, i) => (<li key={c.id} className="list-inline-item">
                    <span className="badge">
                      <Link link={c.link} className="text-decoration-none text-white-50">{jsUcfirst(c.name)}</Link>
                    </span>
                  </li>))}
                </ul>
              </div>
              <h1 className="display-5 fw-bold lh-1 mb-3 text-white" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <p className="badge text-white-50">
                {moment(post.date).format('LL')}
              </p>
            </Col>
          </Row>
        </Container >
      </div>

      <div className="post-picture">
        <FeaturedMedia id={post.featured_media} margin={false} className="d-block mx-lg-auto img-fluid rounded position-relative" />
      </div>

      <Container>
        {data.isAttachment ? (
          <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
        ) : (
          <Content id="content" className="p-5">
            <Html2React html={post.content.rendered} />
          </Content>
        )}
      </Container>
    </div>
  ) : null;
};

export default connect(Post);

const Content = styled.div`
  font-size: 1.2rem;

  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  blockquote p {
    margin-bottom: 0;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
