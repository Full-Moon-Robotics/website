<template>
    <b-navbar wrapper-class="container">
        <template slot="brand">
            <div class="navbar-item">
                <g-link to="/">
                    <g-image
                        alt="Full Moon Robotics"
                        src="~/assets/text_logo.png"
                    />
                </g-link>
            </div>
        </template>
        <template slot="start">
            <g-link
                class="navbar-item"
                v-for="(link, i) in $static.navbar.links"
                :key="i"
                :to="link.data.url"
                >{{ link.data.name }}</g-link
            >
        </template>
        <template slot="end">
            <div class="navbar-item">
                <g-link to="/blog" class="button is-dark">Read our Blog</g-link>
            </div>
            <div class="navbar-item">
                <a
                    href="https://www.youtube.com/channel/UCv1jpayMcbWAi-hcte3glNg"
                    target="_blank"
                    class="icon has-text-red is-medium"
                >
                    <i class="fab fa-youtube fa-lg"></i>
                </a>
            </div>
            <div class="navbar-item">
                <a
                    href="https://www.twitch.tv/fullmoonrobotics"
                    target="_blank"
                    class="icon has-text-twitch is-medium"
                >
                    <i class="fab fa-twitch fa-lg"></i>
                </a>
            </div>
            <div class="navbar-item">
                <a
                    href="https://github.com/Full-Moon-Robotics/"
                    target="_blank"
                    class="icon has-text-white is-medium"
                >
                    <i class="fab fa-github fa-lg"></i>
                </a>
            </div>
            <div class="navbar-item">
                <a
                    href="https://twitter.com/fullmoon_ri3d/"
                    target="_blank"
                    class="icon has-text-white is-medium"
                >
                    <i class="fab fa-twitter fa-lg"></i>
                </a>
            </div>
            <div class="navbar-item">
                <a
                    href="https://instagram.com/fullmoonrobotics/"
                    target="_blank"
                    class="icon has-text-white is-medium"
                >
                    <i class="fab fa-instagram fa-lg"></i>
                </a>
            </div>
            <div class="navbar-item">
                <a
                    href="https://www.facebook.com/fullmoonrobotics"
                    target="_blank"
                    class="icon has-text-white is-medium"
                >
                    <i class="fab fa-facebook fa-lg"></i>
                </a>
            </div>
        </template>
    </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/variables.scss";
nav.navbar,
div.navbar-menu {
    background-color: $black;
}

a.icon {
    cursor: pointer;
}

a.navbar-item {
    color: $grey !important;

    &:hover {
        background-color: lighten($black, 10%) !important;
    }
}

.navbar-brand {
    img {
        // max-width: 1.75rem;
        width: auto;
    }
}
</style>

<static-query>
query {
    metadata {
        siteName
    }
    navbar: allContentfulNavbarItem(sort: [{by: "order", order: ASC}]) {
        links: edges {
            data: node {
                name: itemName
                url: urlPath
                order
            }
        }
    }
}
</static-query>
