// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");
const { DOCUSAURUS_OPENAPI_DOCS_URL } =
  "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Orbital Refuse Collector (ORC) API",
  tagline:
    "See what you can do with satellites. Thanks to the folks behind the Docusaurus API plugin at @{DOCUSAURUS_OPENAPI_DOCS_URL}",
  url: "https://jamestasse.tech",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ORC",
  projectName: "orc-api-docs",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-THVM29S",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Orbital Solutions, Inc.",
        logo: {
          alt: "Keytar",
          src: "img/Satellite-Reentry-Cropped.png",
        },
        items: [
          {
            href: "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "OpenAPI Docs",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://medium.com/palo-alto-networks-developer-blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc. Built with Docusaurus ${DOCUSAURUS_VERSION}.`,
      },
      prism: {
        additionalLanguages: ["ruby", "csharp", "php", "java", "powershell"],
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "requests",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
          variant: "axios",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
          variant: "httpclient",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
      ],
      algolia: {
        apiKey: "441074cace987cbf4640c039ebed303c",
        appId: "J0EABTYI1A",
        indexName: "docusaurus-openapi",
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          ORC: {
            specPath: "examples/ORC.yaml",
            outputDir: "docs", // No trailing slash
            sidebarOptions: {
              categoryLinkSource: "auto",
            },
            version: "2.0.0", // Current version
            label: "v2.0.0", // Current version label
            baseUrl: "/", // Leading slash is important
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

async function createConfig() {
  const lightTheme = (await import("./src/utils/prismLight.mjs")).default;
  const darkTheme = (await import("./src/utils/prismDark.mjs")).default;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.theme = lightTheme;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.darkTheme = darkTheme;
  return config;
}

module.exports = createConfig;
