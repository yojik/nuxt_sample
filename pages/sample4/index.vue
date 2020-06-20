<template>
  <div>
    <div class="overlayStyle" id="overlay">
      <div>
        <h2>AR Sample</h2>
        <button id="myEnterVRButton" href="#">VR</button>
        <button id="myEnterARButton" href="#">AR</button>
        <button id="myEnterARButton" href="#">Exit AR</button>
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
  /* padding-top: 45%; */
}
.iframe_container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
