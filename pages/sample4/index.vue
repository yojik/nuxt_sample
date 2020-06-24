<template>
  <div>
    <div class="iframe_container">
      <iframe ref="sample" src="/sample.html" />
    </div>
    <button @click="setTitle">テスト</button>
  </div>
</template>
<script>
export default {
  name: "aframe",
  components: {},
  mounted() {},
  methods: {
    setTitle() {
        console.log(this.$refs)
      this.$refs.sample.contentDocument.querySelector("#text").setAttribute("value","Title")
    }
  }
};
</script>

<style>
.iframe_container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 60%;
}
.iframe_container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
