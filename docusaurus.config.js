// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frost Horn',
  tagline: 'Frost horn game wiki',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Plugins
  plugins: ["docusaurus-plugin-sass"],

  // Set the production url of your site here
  url: 'https://wiki.u-night.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'U-Night', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/U-Night/wiki/tree/main',
          
          routeBasePath: "/"
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          routeBasePath: "/devlog",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'U-Night',
        logo: {
          alt: 'U-Night Logo',
          src: 'img/unight_blanc.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: '/devlog',
            label: 'DevLog',
            position: 'left',
          },
          {
            href: 'https://github.com/U-Night/wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'U-Night',
            items: [
              {
                label: 'Wiki',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Steam',
                href: '#',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/aChadYb2',
              },
              {
                label: 'Forum',
                href: 'https://forum.u-night.org',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'DevLog',
                to: '/devlog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/U-Night',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} U-Night. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'true',
        },
      },
      {
        tagName: 'link',
        attributes: {
          href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
          rel: 'stylesheet',
        },
      },
    ],
};

export default config;
