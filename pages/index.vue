<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        sample1
      </h1>
      <h2 class="subtitle">
        sample
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <!-- <nuxt-link class="button--grey" to="/sample">Sample</nuxt-link>
        <nuxt-link class="button--grey" to="/sample2">Sample2</nuxt-link>-->
        <nuxt-link class="button--grey" to="/sample3_vhtml">sample3_vhtml</nuxt-link>
        <nuxt-link class="button--grey" to="/sample4_iframe">sample4_iframe</nuxt-link>
        <a  class="button--grey" href="/sample.html">static</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
