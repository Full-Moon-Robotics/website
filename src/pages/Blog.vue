<template>
    <Layout>
        <h1 class="title">Full Moon Robotics Blog</h1>
        <h2
            class="subtitle is-5 has-text-weight-normal"
        >All our content from the build, plus articles and tutorials on FRC.</h2>

        <BlogPostList />
    </Layout>
</template>

<script>
import BlogPostList from "~/components/BlogPostList.vue";

const meta = {
    url: "https://fullmoonrobotics.org/blog/",
    description: "This is the homepage for the Full Moon Robotics Blog."
};

export default {
    metaInfo: {
        title: "Blog",
        meta: [
            { property: "og:url", content: meta.url },
            { property: "twitter:url", content: meta.url },
            {
                property: "og:title",
                content: `Blog - Full Moon Robotics`
            },
            {
                property: "twitter:title",
                content: `Blog - Full Moon Robotics`
            },
            { name: "description", content: meta.description },
            { property: "og:description", content: meta.description },
            { property: "twitter:description", content: meta.description }
        ]
    },
    mounted() {},
    components: {
        BlogPostList
    }
};
</script>

<style></style>

<style lang="scss" scoped>
</style>
