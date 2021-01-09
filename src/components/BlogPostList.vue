<template>
    <div class="is-multiline is-1 is-variable" :class="{ columns: !home }">
        <div
            class="is-3"
            :class="{ column: !home }"
            v-for="({ data: post }, i) in yearPosts"
            :key="i"
        >
            <g-link :to="`/blog/${post.year}/${post.slug}`">
                <div class="card" :class="{ home }">
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
                    </div>-->
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <span class="title is-6">{{ post.title }}</span>
                                <p class="is-size-7">{{ post.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-content tag-container">
                        <div class="media">
                            <div class="media-content">
                                <span
                                    class="tag is-dark"
                                    :class="{
                                        'is-ncsu': post.year == currentYear,
                                    }"
                                    >{{ post.year }} Season</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </g-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        home: {
            type: Boolean,
            default: false,
        },
        year: {
            type: String,
            default: "all",
        },
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
        yearPosts() {
            return this.$static.query.posts.filter((post) =>
                this.year == "all" ? true : post.data.year == this.year
            );
        },
    },
};
</script>

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

    &.home {
        margin-bottom: 10px;
    }

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

<static-query>
query {
    query: allContentfulBlogPost {
        posts: edges {
            data: node {
                year
                slug
                title
                description
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
