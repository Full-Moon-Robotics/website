<template>
    <Layout>
        <h1 class="title">
            {{$page.page.title}}
            <span class="tag is-dark">{{ $page.page.year }} Season</span>
        </h1>
        <div v-html="richTextToHTML($page.page.content)"></div>
    </Layout>
</template>

<script>
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
    metaInfo() {
        const title = `${this.$page.page.title} (${this.$page.page.year}) - Full Moon Robotics`;
        const description = `${this.$page.page.description}`;
        const url = `https://fullmoonrobotics.org/${this.$page.page.year}/${this.$page.page.slug}/`;
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
    page: contentfulContentPage(id: $id) {
        title
        slug
        description
        updatedAt
        year
        content
    }
}
</page-query>
