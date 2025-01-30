// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ubunchuu Trường Ú',
  tagline:
    'Một project "Lai nú" giấu tên tại trường Ú hứa hẹn giúp mọi người bước đầu tiếp cận với Linux, \
    đặc biệt là Ubuntu cùng cách thiết lập chúng như một pro developer.',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],
  url: 'https://ubunchuu-truong-us.github.io',
  baseUrl:
    '/' /** Remember to use root baseUrl if repo name == <org-name>.github.io */,

  organizationName: 'ubunchuu-truong-us', // Usually your GitHub org/user name.
  projectName: 'ubunchuu-truong-us.github.io', // Usually your repo name.
  // Search bar config
  themes: [require.resolve("@easyops-cn/docusaurus-search-local")],
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
          {
            to: '/docs/category/15-days-flying-with-tux',
            label: '15 Days Flying With Tux',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ubunchuu-truong-us',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            label: 'Github',
          },
          {
            href: 'https://www.facebook.com/ubunchuu.club.hcmus',
            position: 'right',
            className: 'header-facebook-link',
            'aria-label': 'Facebook repository',
            label: 'Facebook',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Ubunchuu Trường Ú.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Contribute the content on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ubunchuu-truong-us/ubunchuu-truong-us.github.io">GitHub Codespaces</a> 🚀',
        isCloseable: false,
      },
    }),
};

export default config;
