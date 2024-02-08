// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ubunchuu Trường Ú',
  tagline: 'Một project "Lai nú" giấu tên tại trường Ú hứa hẹn giúp mọi người bước đầu tiếp cận với Linux, đặc biệt là Ubuntu cùng cách thiết lập chúng như một pro developer.',
  favicon: 'img/favicon.ico',

  staticDirectories: ['static'],

  // Set the production url of your site here
  url: 'https://ubunchuu-truong-us.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ubunchuu-truong-us', // Usually your GitHub org/user name.
  projectName: 'ubunchuu-truong-us.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
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
        },
        blog: {
          showReadingTime: true,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ubunchuu Trường Ú',
        logo: {
          alt: 'Ubunchuu Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/docs/category/15-days-flying-with-tux', label: '15 Days Fly With Tux', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/ubunchuu-truong-us',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.facebook.com/ubunchuu.club.hcmus',
            label: 'Facebook',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Ubunchuu Trường Ú.`,
        // logo: {
        //   alt: 'Ubunchuu Logo',
        //   src: 'img/undraw_community_linux.svg',
        //   href: 'https://ubunchuu-truong-us.github.io',
        //   height: 80,
        // },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

export default config;
