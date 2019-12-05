// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import plugins and libraries
import Buefy from "buefy";

// Import components
import Navbar from "~/components/Navbar.vue";
import DefaultLayout from "~/layouts/Default.vue";

// Import styles
import "~/main.scss";

export default function(Vue, { router, head, isClient }) {
    // Use Font Awesome Solid Free
    head.link.push({
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    });

    // Use Buefy UI library
    Vue.use(Buefy, {
        defaultIconPack: "fas" // Font Awesome Solid
    });

    // Make the Navbar component available on all pages
    Vue.component("Navbar", Navbar);

    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
}