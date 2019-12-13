<template>
    <Layout>
        <h1 class="title">
            Full Moon Robotics Blog
        </h1>
        <h2 class="subtitle is-5 has-text-weight-normal">
            All our content from the build, plus articles and tutorials on FRC.
        </h2>

        <div class="columns is-multiline is-1 is-variable">
            <div
                class="column is-3"
                v-for="({ data: post }, i) in $static.query.posts"
                :key="i"
            >
                <div class="card">
                    <!-- <div class="card-image">
                        <figure class="image is-1by1">
                            <g-image
                                :src="member.profilePhoto.file.image"
                                width="480"
                                height="480"
                                :alt="member.name"
                                fit="outside"
                            />
                        </figure>
                    </div> -->
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <g-link
                                    :to="`/blog/${post.year}/${post.slug}`"
                                    class="title is-6"
                                    >{{ post.title }}</g-link
                                >
                            </div>
                        </div>
                    </div>
                    <div class="card-content tag-container">
                        <div class="media">
                            <div class="media-content">
                                <span class="tag is-dark"
                                    >{{ post.year }} Season</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import LeadershipHeadshots from "~/components/LeadershipHeadshots.vue";

export default {
    mounted() {
        console.log(this.$static.query);
    },
    components: {
        LeadershipHeadshots
    }
};
</script>

<style></style>

<static-query>
query {
    query: allContentfulBlogPost {
        posts: edges {
            data: node {
                year
                slug
                title
                updatedAt
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
    }
}
</static-query>

<style lang="scss" scoped>
@import "~/variables.scss";

figure {
    margin: 0;
}
.columns {
    align-items: stretch;
}

.card {
    height: 100%;

    background-color: $scheme-main-ter;

    border-radius: 5px;

    &:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .card-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;

        &.tag-container {
            padding-top: 0;
        }
    }

    .title,
    p {
        color: $scheme-invert;
    }
}
</style>
