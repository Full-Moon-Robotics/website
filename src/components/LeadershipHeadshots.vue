<template>
    <MemberHeadshots :members="leadership" />
</template>

<script>
import MemberHeadshots from "~/components/MemberHeadshots.vue";

export default {
    props: ["year"],
    components: {
        MemberHeadshots,
    },
    computed: {
        leadership() {
            return this.$static.leadership.members
                .map((entry) => entry.data)
                .filter(
                    function(entry) {
                        console.log(this.year);
                        return entry.yearsActive.indexOf(this.year) > -1;
                    }.bind(this)
                );
        },
    },
    mounted() {
        console.log(this.leadership);
    },
};
</script>

<static-query>
query {
    leadership: allContentfulTeamMember(filter: {
        leadership: { eq: true },
    }) {
        members: edges {
            data: node {
                name,
                title,
                yearsActive,
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
