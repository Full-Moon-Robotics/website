<template>
    <Layout>
        <h1 class="title">
            Note
            <span class="is-family-monospace">{{$page.page.id}}</span>
            &nbsp;
            <span class="tag is-dark">{{ $page.page.year }} Season</span>
        </h1>
        <div v-html="richTextToHTML($page.page.note)"></div>
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
        const title = `Quick Note ${this.$page.page.id} (${this.$page.page.year})`;
        const description = `This is a quick note from Full Moon Robotics.`;
        const url = `https://fullmoonrobotics.org/${this.$page.page.year}/notes/${this.$page.page.id}/`;
        return {
            title,
            meta: [
                { property: "og:url", content: url },
                { property: "twitter:url", content: url },
                {
                    property: "og:title",
                    content: `${title} - Full Moon Robotics`
                },
                {
                    property: "twitter:title",
                    content: `${title} - Full Moon Robotics`
                },
                { name: "description", content: description },
                { property: "og:description", content: description },
                { property: "twitter:description", content: description }
            ]
        };
    }
};
</script>

<style lang="scss"></style>

<page-query>
query ($id: ID!) {
    page: contentfulQuickNote(id: $id) {
        id
        updatedAt
        year
        note
    }
}
</page-query>
