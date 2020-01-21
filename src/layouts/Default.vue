<template>
    <div class="layout">
        <Navbar />
        <section class="section">
            <div class="container">
                <div class="content">
                    <slot />
                </div>
            </div>
        </section>
        <section class="section"></section>
        <footer class="footer">
            <div class="content container has-text-centered">
                <div class="columns">
                    <div class="column">
                        <p>
                            Full Moon Robotics is organized by the
                            <strong>
                                <i>FIRST</i> Alumni Association at NC
                                State
                            </strong>. We are a student organization of
                            <a
                                href="https://ncsu.edu"
                            >North Carolina State University</a>. We work closely with
                            <a href="http://www.firstnorthcarolina.org">
                                <i>FIRST</i> North Carolina
                            </a>
                            and
                            <a href="https://www.ece.ncsu.edu/">
                                NC State's Electrical and Computing Engineering
                                Department
                            </a>.
                        </p>
                    </div>
                </div>

                <p class="is-size-7">
                    Website design by
                    <a href="https://samweaver.com">Sam Weaver</a>
                    , &copy; 2019 - {{ new Date().getFullYear() }}
                </p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
.layout {
    display: flex;
    flex-direction: column;
}

.footer {
    flex-grow: 1;
}
</style>
