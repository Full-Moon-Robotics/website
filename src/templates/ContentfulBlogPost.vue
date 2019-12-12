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
        return {
            title: `${this.$page.page.year} Blog - ${this.$page.page.title}`
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
