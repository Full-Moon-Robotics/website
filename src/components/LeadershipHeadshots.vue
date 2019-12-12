<template>
    <MemberHeadshots :members="leadership" />
</template>

<script>
import MemberHeadshots from "~/components/MemberHeadshots.vue";

export default {
    components: {
        MemberHeadshots
    },
    computed: {
        leadership() {
            return this.$static.leadership.members.map(entry => entry.data);
        }
    }
};
</script>

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
