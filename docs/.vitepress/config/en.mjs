import { defineConfig } from "vitepress";

import jsonData from "../../versions.json";

export const en = defineConfig({
  lang: "en-US",
  description: "Vitepress builds document templates",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/en/guide/": { base: "/en/guide/", items: sidebarGuide() },
    },
    editLink: {
      pattern: "https://github.com/ajiho/vitepress-build-boilerplate/tree/main/src/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2022-${new Date().getFullYear()} ajiho`,
    },

    outline: {
      level: "deep",
    },
  },
});

function nav() {
  return [
    {
      text: "Guide",
      link: "/en/guide/what-is-it",
      activeMatch: "/en/guide/",
    },

    {
      text: jsonData.currently, //版本号,请勿手动更改
      items: [
        {
          text: "Changelog",
          link: "https://github.com/ajiho/vitepress-build-boilerplate/blob/main/CHANGELOG.md",
          target: "_blank",
        },
        {
          text: "Contributing",
          link: "https://github.com/ajiho/vitepress-build-boilerplate/blob/main/.github/CONTRIBUTING.md",
          target: "_blank",
        },
        {
          items: [{ text: "All versions", link: "/en/versions" }],
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      items: [
        { text: "What is vitepress-build-boilerplate？", link: "what-is-it" },
      ],
    },
  ];
}


export const search = {
  en: {},
};
