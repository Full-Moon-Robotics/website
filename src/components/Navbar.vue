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
                <div class="navbar-end"></div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style></style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
