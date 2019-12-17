<template>
    <Layout>
        <h1 class="title">
            {{ $page.page.title }}
            <span class="tag is-dark">{{ $page.page.year }} Season</span>
        </h1>
        <div v-html="richTextToHTML($page.page.content)"></div>
        <br />
        <h4 class="subtitle">Authors:</h4>
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
                    [BLOCKS.EMBEDDED_ASSET]: node => {
                        return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`;
                    }
                }
            });
        }
    },
    components: {
        MemberHeadshots
    },
    metaInfo() {
        const title = `FMR ${this.$page.page.year} Blog - ${this.$page.page.title}`;
        const description = `${this.$page.page.description}`;
        const url = `https://fullmoonrobotics.org/blog/${this.$page.page.year}/${this.$page.page.slug}/`;
        return {
            title,
            "og:url": url,
            "twitter:url": url,
            "og:title": title,
            "twitter:title": title,
            description,
            "og:description": description,
            "twitter:description": description
        };
    }
};
</script>

<style lang="scss"></style>

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
