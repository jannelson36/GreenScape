// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Greenscape',
  tagline: 'Cultivating Sustainable Communities Through Urban Gardening',
  url: 'https://github.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/jannelson36/GreenScape/main/static/favicon-32x32.png',
  organizationName: 'jannelson36', // Enter GitHub org/user name.
  projectName: 'Greenscape', // Enter repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: '*',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "events",
          path: "events",
          // Please change this to your repo.
          editUrl: 'https://github.com/jannelson36/GreenScape/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jannelson36/GreenScape/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
      'docusaurus-plugin-google-adsense',
    [
      '@docusaurus/plugin-content-docs',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'gardens',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'gardens',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './gardens/',
        editUrl:
          'https://github.com/jannelson36/GreenScape/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        postsPerPage: "ALL",
        id: 'getting-started',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'getting-started',
        blogSidebarTitle: 'How To & Contributing',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './how-to&contributing',
        editUrl:
          'https://github.com/jannelson36/GreenScape/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/docusaurus.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/docusaurus.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
       googleAdsense: {
      dataAdClient: '*'
    },
      metadata: [
{name: 'og:image', content: 'https://github.com/jannelson36/GreenScape/blob/main/static/Open%20Garden%20(1920%20%C3%97%201080px).gif?raw=true'},
{name: 'og:title', content: 'Greenscape'},
{name: 'og:description', content: 'Greenscape Open Garden Day!'},
        {name: "twitter:image", content: "https://github.com/jannelson36/GreenScape/blob/main/static/bike%20tour.png?raw=true" }
],
      navbar: {
        title: 'Greenscape',
        logo: {
          alt: 'Greenscape',
          src: 'logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '🎉 Events',
          },
          { to: '/gardens', 
            docId: 'index',
          label: '🏡 Gardens', position: 'left' },
          { to: '/blog', label: '📋 Community Board', position: 'left' },
          { to: '/getting-started', label: 'Getting Started 🚀', position: 'right' },
          {
            href: 'https://github.com/jannelson36/GreenScape',
            label: 'Source',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Events',
            items: [
              {
                label: 'Open Garden Day Info',
                to: '/events/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Board',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Source',
                href: 'https://github.com/jannelson36/GreenScape',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GreenScape`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;


