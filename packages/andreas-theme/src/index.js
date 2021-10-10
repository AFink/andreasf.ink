import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const allCategoriesHandler = {
  name: "allCategories",
  priority: 10,
  pattern: "all-categories",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "categories",
      params: {
        per_page: 100, // To make sure you get all of them
        exclude: 1
      }
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      items
    });
  }
};

const threePostsHandler = {
  name: "threePosts",
  priority: 10,
  pattern: "three-posts",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "posts",
      params: {
        per_page: 3,
      }
    });
    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      items
    });
  }
};


const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
    lang: {
      en: {
        home: {
          contact: {
            title: "Contact",
            subtitle: "Get in touch!",
            subsubtitle: "Just fill in the form and send me a mail.",
            form: {
              name: "Name",
              email: "Email address",
              subject: "Subject",
              message: "Message",
              submit: "Submit",
            },
            success: {
              title: "Success!",
              text: "The mail has been sent.",
            },
          },
        }
      }
    }
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      beforeSSR: async ({ state, actions, libraries }) => {
        //fetch only for home page
        if (state.router.link == "/") {
          await actions.source.fetch("/projects/");
          await actions.source.fetch("three-posts");
          await actions.source.fetch("/services/");
          await actions.source.fetch("all-categories")
        }
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
    source: {
      handlers: [allCategoriesHandler, threePostsHandler]
    }
  },
};

export default marsTheme;
