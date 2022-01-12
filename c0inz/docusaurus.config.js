// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'c0inz.com',
  tagline: 'NFTs, Cryptocurrency, Merch',
  url: 'https://c0inz.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/c0inz_icon.png',
  organizationName: 'c0inzdotcom', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/c0inzdotcom/site/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/c0inzdotcom/site/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'c0inz.com',
        logo: {
          alt: 'c0inz Logo',
          src: 'img/c0inz_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/c0inzdotcom/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/c0inzdotcom',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/c0inzdotcom',
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
                label: 'GitHub',
                href: 'https://github.com/c0inzdotcom',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} C0inz.com, NFTs, Cryptocoins, Merch`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
