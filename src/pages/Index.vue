<template>
    <Layout>
        <h1>Hello, world!</h1>

        <p class="notification is-primary">
            Our website is still under construction! Please bear with us as we
            prepare for the season!
        </p>

        <div id="twitch-embed"></div>
        <!-- Load the Twitch embed script -->
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "Hello, world!"
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
