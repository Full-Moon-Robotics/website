<template>
    <Layout>
        <h1 class="title">
            Meet the Team
            <span class="tag is-dark">2021 Season</span>
        </h1>
        <h2 class="subtitle is-5 has-text-weight-normal">
            Full Moon Robotics Leadership Team
        </h2>
        <LeadershipHeadshots :year="'2021'" />
        <!-- <div v-html="richTextToHTML($page.page.note)"></div> -->
    </Layout>
</template>

<script>
import LeadershipHeadshots from "~/components/LeadershipHeadshots.vue";

export default {
    components: {
        LeadershipHeadshots,
    },
};
</script>

<style></style>
