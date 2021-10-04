import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Navigation from "./navigation";
import Footer from './footer';
import Home from './home/home';

import appCss from 'bootstrap/dist/css/bootstrap.min.css';
import hoverCss from '../assets/css/hover.css';
import customCss from '../assets/css/custom.css';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="viewport" content={'width=device-width, initial-scale=1'} />
        <html lang="en" />
      </Head>

      <Global styles={appCss} />
      <Global styles={hoverCss} />
      <Global styles={customCss} />

      <div className="page-wrapper">
        <Navigation />
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default connect(Theme);
