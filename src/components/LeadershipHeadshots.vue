<template>
    <div class="columns is-multiline is-1 is-variable">
        <div
            class="column is-2"
            v-for="(member, i) in $static.leadership.members"
            :key="i"
        >
            <div class="card">
                <div class="card-image">
                    <figure class="image is-1by1">
                        <g-image
                            :src="member.data.profilePhoto.file.image"
                            width="480"
                            height="480"
                            :alt="member.data.name"
                            fit="outside"
                        />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-6">{{ member.data.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="subtitle is-7">{{ member.data.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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

    img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .card-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .title,
    p {
        color: $scheme-invert;
    }
}
</style>

<static-query>
query {
    leadership: allContentfulTeamMember(filter: {
        leadership: { eq: true },
        yearsActive: { contains: ["2020"] }
    }) {
        members: edges {
            data: node {
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
</static-query>
