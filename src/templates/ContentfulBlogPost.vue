<template>
    <Layout>
        <h1 class="title">
            {{ $page.page.title }}
            <span class="tag is-dark">{{ $page.page.year }} Season</span>
        </h1>
        <div v-html="richTextToHTML($page.page.content)"></div>
        <br />
        <h4
            class="subtitle"
            v-if="$page.page.authors && $page.page.authors.length > 0"
        >
            Authors:
        </h4>
        <MemberHeadshots :members="$page.page.authors" />
    </Layout>
</template>

<script>
import MemberHeadshots from "~/components/MemberHeadshots.vue";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
    methods: {
        richTextToHTML(content) {
            return documentToHtmlString(content, {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => {
                        return `
                        <div class="blog-post-image-container">
                            <img class="blog-post-image" src="${
                                node.data.target.fields.file.url
                            }" alt="${node.data.target.fields.title}" />
                        </div>`;
                    },
                },
            });
        },
    },
    components: {
        MemberHeadshots,
    },
    metaInfo() {
        const title = `${this.$page.page.title} - ${this.$page.page.year} Blog`;
        const description = `${this.$page.page.description}`;
        const url = `https://fullmoonrobotics.org/blog/${
            this.$page.page.year
        }/${this.$page.page.slug}/`;
        return {
            title,
            meta: [
                { property: "og:url", content: url },
                { property: "twitter:url", content: url },
                {
                    property: "og:title",
                    content: `${title} - Full Moon Robotics`,
                },
                {
                    property: "twitter:title",
                    content: `${title} - Full Moon Robotics`,
                },
                { name: "description", content: description },
                { property: "og:description", content: description },
                { property: "twitter:description", content: description },
            ],
        };
    },
};
</script>

<style lang="scss">
.blog-post-image-container {
    display: flex;
    justify-content: space-around;
    margin: 1em;
}

.blog-post-image {
    max-width: 500px;
    margin: 0 auto;
}
</style>

<page-query>
query ($id: ID!) {
    page: contentfulBlogPost(id: $id) {
        year
        title
        slug
        description
        updatedAt
        content
        authors {
            name,
            title,
            profilePhoto {
                file {
                    image: url
                }
            }
        }
    }
}
</page-query>
