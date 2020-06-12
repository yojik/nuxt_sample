<template>
  <div>

    <div class="overlayStyle" id="overlay">
      <div>
        <h2>network</h2>
        <button id="myEnterVRButton" href="#">VR</button>
        <button id="myEnterARButton" href="#"> AR </button>
        <button id="myEnterARButton" href="#">Exit AR</button>
      </div>
    </div>


    <a-scene
      webxr="optionalFeatures: dom-overlay; overlayElement: #overlay"
      vr-mode-ui="enterARButton: #myEnterARButton"
    >
      <a-assets>
        <a-asset-item
          id="floor"
          src="/low_poly_isometric_rooms/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-gltf-model
        position="0 0 -3.0"
        scale="2 1 2"
        src="#floor"
      ></a-gltf-model>

      <a-text
        position="-1 1.25 -3"
        value="Hello, World!"
        color="green"
      ></a-text>

      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </div>
</template>
<script>
// import "aframe";
export default {};
</script>

<style>
.overlayStyle {
  position: absolute;
  top: 0px;
  z-index: 1;
}
</style>
