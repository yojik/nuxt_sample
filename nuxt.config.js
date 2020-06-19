export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/gh/aframevr/aframe@a326cebe05da7541fb885ed0ce8e16facad7d5bd/dist/aframe-master.min.js' },
    //  { src: "https://unpkg.com/networked-aframe/dist/networked-aframe.min.js"},
     { src: "/js/build.js"},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.slim.js"}
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  //plugins: ["~/plugins/networked-aframe"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  vue: {
    config: {
      ignoredElements: [
        'a-scene',
        'a-assets',
        'a-camera',
        'a-entity',
        'my-template'
      ]
      }
  }

};
