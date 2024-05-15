/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars = {
  ORC: [
    {
      type: "category",
      label: "ORC API",
      link: {
        type: "generated-index",
        title: "_",
        slug: ".",
      },
      items: require("./docs/sidebar.js"),
      items: [
        {
          type: "autogenerated",
          dirName: ".", // '.' means the current docs folder
        },
      ],
    },
  ],
};

module.exports = sidebars;
