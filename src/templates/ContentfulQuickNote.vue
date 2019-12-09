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
        return {
            title: `Note ${this.$page.page.id} (${this.$page.page.year})`
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
