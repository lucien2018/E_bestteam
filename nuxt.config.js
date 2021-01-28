export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ClientApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],

    script: [

      {
        src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js',
        body: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js',
        body: true
      },
      {
        src: '/vendor/jquery/jquery.min.js',
        body: true
      },
      {
        src: '/vendor/bootstrap/js/bootstrap.bundle.min.js',
        body: true
      },
      {
        src: '/vendor/jquery.easing/jquery.easing.min.js',
        body: true
      },
      {
        src: '/vendor/php-email-form/validate.js',
        body: true
      },
      {
        src: '/vendor/isotope-layout/isotope.pkgd.min.js',
        body: true
      },
      {
        src: '/vendor/venobox/venobox.min.js',
        body: true
      },
      {
        src: '/vendor/owl.carousel/owl.carousel.min.js',
        body: true
      },   
      {
        src: '/js/main.js',
        body: true
      },
   ],
    link: [

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { 
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com' 
      },

      {
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap' 
      },

      { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i.css' 
      },

      { 
      rel: 'stylesheet', 
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' 
      }
    ]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    '~/assets/vendor/bootstrap/css/bootstrap.min.css',
    '~/assets/vendor/icofont/icofont.min.css',
    '~/assets/vendor/boxicons/css/boxicons.min.css',
    '~/assets/vendor/remixicon/remixicon.css',
    '~/assets/vendor/venobox/venobox.css',
    '~/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
    '~/assets/css/style.css'
    
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
