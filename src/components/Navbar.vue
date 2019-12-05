<template>
    <nav
        class="navbar is-primary"
        role="navigation"
        aria-label="Main Navigation"
    >
        <div class="container">
            <div class="navbar-brand">
                <a href class="navbar-item">
                    <strong>
                        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
                    </strong>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <a
                            href="https://www.youtube.com/channel/UCv1jpayMcbWAi-hcte3glNg"
                            target="_blank"
                            class="icon has-text-grey is-medium"
                        >
                            <i class="fab fa-youtube fa-lg"></i>
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a
                            href="https://www.twitch.tv/fullmoonrobotics"
                            target="_blank"
                            class="icon has-text-grey is-medium"
                        >
                            <i class="fab fa-twitch fa-lg"></i>
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a
                            href="https://github.com/Full-Moon-Robotics/"
                            target="_blank"
                            class="icon has-text-grey is-medium"
                        >
                            <i class="fab fa-github fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
a.icon {
    cursor: pointer;
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
