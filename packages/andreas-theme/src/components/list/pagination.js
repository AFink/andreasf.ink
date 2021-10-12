import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Pagination = ({ state, actions }) => {
  const { next, previous } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <div>
      {next && (
        <Link link={next}>
          ← Older posts
        </Link>
      )}

      {previous && next && " - "}

      {previous && (
        <Link link={previous}>
          Newer posts →
        </Link>
      )}
    </div>
  );
};

export default connect(Pagination);