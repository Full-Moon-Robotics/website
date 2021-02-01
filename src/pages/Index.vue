<template>
    <Layout>
        <h1>Welcome to Full Moon Robotics!</h1>

        <p class="notification is-primary">
            Full Moon Robotics is a team of <i>FIRST</i> alumni based at
            <a href="https://www.ncsu.edu">North Carolina State University</a>
            building a "robot in three days."
            <a href="/Press_Release_Ri3D_2021.pdf" target="_blank"
                >(Press Release)</a
            >. For the 2021 FRC season, we made tweaks to our 2020 robot
            (since <i>FIRST</i> is replaying the 2020 game.) Feel free to look
            around! Most of our content is on
            <g-link to="/blog">our blog</g-link>&nbsp;and
            <a
                href="https://www.youtube.com/channel/UCv1jpayMcbWAi-hcte3glNg"
                target="_blank"
                >our YouTube channel</a
            >!
        </p>

        <div class="notification is-primary">
            <h4 class="subtitle has-text-centered">Sponsored in 2021 by:</h4>
            <div class="columns is-vcentered is-variable is-8">
                <div class="column">
                    <a href="https://relaygo.com/" target="_blank">
                        <g-image src="~/assets/logos/relay.svg" />
                    </a>
                </div>
                <div class="column has-text-centered">
                    <a href="https://www.robodogs.org/" target="_blank">
                        <g-image src="~/assets/logos/robodogs.svg" />
                    </a>
                </div>
                <div class="column">
                    <a
                        href="https://entrepreneurship.ncsu.edu/"
                        target="_blank"
                    >
                        <h3>NC State Entrepreneurship</h3>
                    </a>
                </div>
            </div>
        </div>

        <!-- <div id="twitch-embed"></div> -->
        <!-- Load the Twitch embed script -->

        <!-- <p class="notification is-primary has-text-centered is-size-2">
            <i class="fa fa-chevron-up fa-lg"></i>&nbsp;
            <span>
                {{ streamTimerMessage }}
                <countdown :end-time="streamTimerEnd">
                    <span slot="process" slot-scope="{ timeObj }">{{
                        `${timeObj.d == "0" ? "" : timeObj.d + ":"}${
                            timeObj.h
                        }:${timeObj.m}:${timeObj.s}`
                    }}</span>
                    <span slot="finish">{{
                        streamTimerMessage == ""
                            ? "Stream is " + streamTimerTense
                            : "... now!"
                    }}</span>
                </countdown> </span
            >&nbsp;
            <i class="fa fa-chevron-up fa-lg"></i>
        </p> -->

        <!-- <div class="notification is-primary">
            <BlogPostList year="2022" :home="false" />
        </div> -->

        <!-- <p class="notification is-primary has-text-centered">
            <i class="fa fa-chevron-down fa-lg"></i>&nbsp;
            <strong>Warning: Outdated content!</strong> Content beneath this box
            is from our 2021 season.&nbsp;
            <i class="fa fa-chevron-down fa-lg"></i>
        </p> -->

        <!-- content view -->
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile is-parent">
                    <article class="tile is-child box is-flex">
                        <p class="title">2021 Robot Reveal</p>
                        <p class="subtitle">
                            Check out our reveal video of this year's robot,
                            <i>Blue Moon</i>!
                        </p>
                        <iframe
                            src="https://www.youtube.com/embed/dbUG4PAihy0"
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
                            <p class="title">Interviews with Teams FRC 5243 &amp; FTC 10515</p>
                            <iframe
                                src="https://www.youtube.com/embed/K4gveY9tP1M"
                                frameborder="0"
                                allow="picture-in-picture"
                                allowfullscreen
                                style="max-height:100%;"
                            ></iframe>
                            <div class="content">
                                <p>
                                    This year, we interviewed two <i>FIRST</i> teams about their experience meeting virtually and preparing for this different season. Meet FRC Team 5243, Aegis Robotics, and FTC Team 10515, Xtreme Voltage!
                                </p>
                                <p>
                                    If you're interested in being interviewed next year, reach out to our parent organization at <a href="https://firstalumniatncstate.org/#contact-us" target="_blank">our website</a>!
                                </p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                            <p class="title">Drive Station Setup</p>
                            <iframe
                                src="https://www.youtube.com/embed/xStkODcg7ic"
                                frameborder="0"
                                allow="picture-in-picture"
                                allowfullscreen
                                style="max-height:100%;"
                            ></iframe>
                        </article>
                        <article class="tile is-child box">
                            <p class="title">Git Tutorial</p>
                            <iframe
                                src="https://www.youtube.com/embed/TQWBeasJoF4"
                                frameborder="0"
                                allow="picture-in-picture"
                                allowfullscreen
                                style="max-height:100%;"
                            ></iframe>
                        </article>
                        <article class="tile is-child box">
                            <p class="title">Final Day Recap</p>
                            <iframe
                                src="https://www.youtube.com/embed/6NS4cMWPedE"
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
                        <p class="title">2021 Blog Posts</p>
                        <p class="subtitle">From our Documentation team</p>
                        <BlogPostList year="2021" :home="true" />
                    </div>
                </article>
            </div>
        </div>
    </Layout>
</template>

<script>
import BlogPostList from "~/components/BlogPostList.vue";
import moment from "moment";

// const streamStart = moment("2021-01-12 09:15:00-05:00");
// const streamEnd = moment("2021-01-12 1:30:00-05:00");
// const finalStretch = false;

const meta = {
    url: "https://fullmoonrobotics.org/",
    description:
        "This is the homepage for the Full Moon Robotics Robot in 3 Days Team.",
};

export default {
    metaInfo: {
        title: "Home",
        meta: [
            { property: "og:url", content: meta.url },
            { property: "twitter:url", content: meta.url },
            {
                property: "og:title",
                content: `Home - Full Moon Robotics`,
            },
            {
                property: "twitter:title",
                content: `Home - Full Moon Robotics`,
            },
            { name: "description", content: meta.description },
            { property: "og:description", content: meta.description },
            { property: "twitter:description", content: meta.description },
        ],
    },
    mounted() {
        // new window.Twitch.Embed("twitch-embed", {
        //     width: "100%",
        //     height: 640,
        //     theme: "dark",
        //     channel: "fullmoonrobotics",
        //     parent: ["fullmoonrobotics.org"],
        // });
    },
    computed: {
        // streamTimerMessage() {
        //     if (moment().isBefore(streamStart)) return "Stream starts in ";
        //     else if (finalStretch && moment().isBefore(streamEnd))
        //         return "Stream ends in ";
        //     else return "";
        // },
        // streamTimerTense() {
        //     if (moment().isBefore(streamEnd)) return "live!";
        //     else return "offline.";
        // },
        // streamTimerEnd() {
        //     if (moment().isBefore(streamStart) || !finalStretch)
        //         return streamStart.toDate();
        //     else return streamEnd.toDate();
        // },
    },
    components: {
        BlogPostList,
    },
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
