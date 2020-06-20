<template>
  <div>
    <div class="overlayStyle" id="overlay">
      <div>
        <h2>AR Sample</h2>
      </div>
    </div>
    <div class="iframe_container">
      <iframe src="/sample.html" />
    </div>
  </div>
</template>
<script>
export default {
  name: "aframe",
  components: {},
  mounted() {}
};
</script>

<style>
.overlayStyle {
  position: absolute;
  top: 0px;
  z-index: 1;
}

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
