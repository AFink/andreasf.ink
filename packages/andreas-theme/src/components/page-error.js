import { styled, connect } from "frontity";

import Container from 'react-bootstrap/Container';

const description404 = (
  <>
    That page can’t be found{" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Oops! Something went wrong";
  const title404 = "Oops! 404";

  return (
    <Container>
      <h1>{data.is404 ? title404 : title}</h1>
      <p>{data.is404 ? description404 : description}</p>
    </Container>
  );
};

export default connect(Page404);