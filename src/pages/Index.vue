<template>
    <Layout>
        <h1>Welcome!</h1>

        <p class="notification is-primary">
            There are still a few things we need to add to the website, it isn't quite perfect yet.
            Feel free to look around! Most of our content is on
            <g-link to="/blog">our blog</g-link>&nbsp;and
            <a
                href="https://www.youtube.com/channel/UCv1jpayMcbWAi-hcte3glNg"
                target="_blank"
            >our YouTube channel</a>!
        </p>

        <div class="notification is-primary">
            <h4 class="subtitle has-text-centered">Sponsored By</h4>
            <div class="columns is-vcentered is-variable is-8">
                <div class="column">
                    <g-image src="~/assets/logos/commerce_cx.png" />
                </div>
                <div class="column">
                    <g-image src="~/assets/logos/ncsu_libraries.png" />
                </div>
            </div>
        </div>

        <div id="twitch-embed"></div>
        <!-- Load the Twitch embed script -->
    </Layout>
</template>

<script>
const meta = {
    url: "https://fullmoonrobotics.org/",
    description:
        "This is the homepage for the Full Moon Robotics Robot in 3 Days Team."
};

export default {
    metaInfo: {
        title: "Home",
        meta: [
            { property: "og:url", content: meta.url },
            { property: "twitter:url", content: meta.url },
            {
                property: "og:title",
                content: `Home - Full Moon Robotics`
            },
            {
                property: "twitter:title",
                content: `Home - Full Moon Robotics`
            },
            { name: "description", content: meta.description },
            { property: "og:description", content: meta.description },
            { property: "twitter:description", content: meta.description }
        ]
    },
    mounted() {
        import("~/../lib/twitch-embed.v1.min.js").then(m => {
            new Twitch.Embed("twitch-embed", {
                width: "100%",
                height: 640,
                theme: "dark",
                channel: "fullmoonrobotics"
            });
        });
    }
};
</script>

<style lang="scss">
.home-links a {
    margin-right: 1rem;
}

#twitch-embed {
    min-height: 640px;

    iframe {
        min-height: 640px;
    }
}
</style>
