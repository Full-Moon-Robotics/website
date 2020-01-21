<template>
    <Layout>
        <h1>Welcome to Full Moon Robotics!</h1>

        <p class="notification is-primary">
            This is the Full Moon Robotics website, the home for all the content produced by our Robot in 3 Days team!
            Feel free to look around! Most of our content is on
            <g-link to="/blog">our blog</g-link>&nbsp;and
            <a
                href="https://www.youtube.com/channel/UCv1jpayMcbWAi-hcte3glNg"
                target="_blank"
            >our YouTube channel</a>!
        </p>

        <div class="notification is-primary">
            <h4 class="subtitle has-text-centered">Sponsored in 2020 by:</h4>
            <div class="columns is-vcentered is-variable is-8">
                <div class="column">
                    <g-image src="~/assets/logos/commerce_cx.png" />
                </div>
                <div class="column">
                    <g-image src="~/assets/logos/ncsu_libraries.png" />
                </div>
                <div class="column">
                    <h3>NC State Entrepreneurship</h3>
                </div>
            </div>
        </div>

        <!-- <div id="twitch-embed"></div> -->
        <!-- Load the Twitch embed script -->

        <!-- content view -->
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile is-parent">
                    <article class="tile is-child box is-flex">
                        <p class="title">Robot Reveal</p>
                        <p class="subtitle">
                            Check out our reveal video of our robot,
                            <i>FM-87</i>!
                        </p>
                        <iframe
                            src="https://www.youtube.com/embed/4T5FBxpCVi0"
                            frameborder="0"
                            allow="picture-in-picture"
                            allowfullscreen
                            style="height:100%;"
                        ></iframe>
                    </article>
                </div>
                <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">Strategy Analysis</p>
                            <iframe
                                src="https://www.youtube.com/embed/eNwzub_byWA"
                                frameborder="0"
                                allow="picture-in-picture"
                                allowfullscreen
                                style="max-height:100%;"
                            ></iframe>
                            <div class="content">
                                <p>
                                    Here's our strategy recap from day 1!
                                    Our team performed an analysis based on our own strengths, weaknesses, and constraints.
                                </p>
                                <p>We'd love to hear how your team's analysis was different!</p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                            <p class="title">Electrical Tutorial</p>
                            <iframe
                                src="https://www.youtube.com/embed/ucDjqIOgbVE"
                                frameborder="0"
                                allow="picture-in-picture"
                                allowfullscreen
                                style="max-height:100%;"
                            ></iframe>
                        </article>
                        <article class="tile is-child box">
                            <p class="title">Programming Tutorial</p>
                            <iframe
                                src="https://www.youtube.com/embed/vvwom90aQ-w"
                                frameborder="0"
                                allow="picture-in-picture"
                                allowfullscreen
                                style="max-height:100%;"
                            ></iframe>
                        </article>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <div class="content">
                        <p class="title">Blog Posts</p>
                        <p class="subtitle">From our Text-Media team</p>
                        <BlogPostList :home="true" />
                    </div>
                </article>
            </div>
        </div>
    </Layout>
</template>

<script>
import BlogPostList from "~/components/BlogPostList.vue";

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
        // import("~/../lib/twitch-embed.v1.min.js").then(m => {
        //     new Twitch.Embed("twitch-embed", {
        //         width: "100%",
        //         height: 640,
        //         theme: "dark",
        //         channel: "fullmoonrobotics"
        //     });
        // });
    },
    components: {
        BlogPostList
    }
};
</script>

<style lang="scss">
.is-flex {
    display: flex;
    flex-direction: column;
}

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
