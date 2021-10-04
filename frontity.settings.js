const settings = {
  "name": "andreasf-ink",
  "state": {
    "frontity": {
      "url": "https://andreasf-ink.afink.dev/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "andreas-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Blog",
              "/blog/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "postsPage": "blog",
          "postTypes": [
            {
              "type": "projects",
              "endpoint": "projects",
              'archive': '/projects'
            },
            {
              "type": "services",
              "endpoint": "services",
              'archive': '/services'
            },
          ],
          "url": "https://wp.andreasf-ink.afink.dev/"
        }
      }
    },
    "@frontity/head-tags",
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
