<template>
  <div>
    <div id="overLay" class="overlayStyle">
      TEST
      <button id="enterVRButton">VR</button>
      <button id="enterARButton">AR</button>
    </div>

    <a-scene
          webxr="optionalFeatures: dom-overlay; overlayElement: #overlay"
           vr-mode-ui="enterVRButton: #enterVRButton; enterARButton: #enterARButton">

      <a-assets>
        <a-asset-item id="floor" src="/low_poly_isometric_rooms/scene.gltf"></a-asset-item>
      </a-assets>

      <a-gltf-model position="0 0 -3.0" scale="2 1 2"  src="#floor"></a-gltf-model>

      <a-text position="-1 1.25 -3" value="Hello, World!" color="green"></a-text>
      <!-- <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane> -->

      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </div>
</template>
<script>
// import "aframe";
export default {




};
</script>

<style>

.overlayStyle {
  position: absolute;
  top: 0px;
  z-index: 1;
}
</style>
