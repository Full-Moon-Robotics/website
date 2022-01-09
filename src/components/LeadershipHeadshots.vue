<template>
    <MemberHeadshots :members="leadership" :year="year" />
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
                        return entry.yearsActive.indexOf(this.year) > -1 && entry.yearsLeadership.indexOf(this.year) > -1;
                    }.bind(this)
                );
        },
    },
    mounted() {
        console.log(this.leadership);
        // console.log(this.$static.leadership.members);
    },
};
</script>

<static-query>
query {
    leadership: allContentfulTeamMember(sort: [{ by: "name", order: ASC }]) {
        members: edges {
            data: node {
                name,
                title,
                titles,
                yearsActive,
                yearsLeadership,
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
