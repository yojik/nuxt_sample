<template>
  <div>
    <div class="overlayStyle" id="overlay"> <!--オーバーレイコントロールはフルスクリーンにすると消える問題あり-->
        <div>
          <a id="myEnterVRButton"  href="#">VR</a>
          <a id="myEnterARButton"  href="#">AR</a>
          <a id="myEnterARButton" href="#">Exit AR</a>
        </div>
        <iframe class="youtube" id="ytplayer" type="text/html" width="240" height="160"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
    </div>
    <!--App.vueのtemplate内に記述-->
    <a-scene
      vr-mode-ui="enterVRButton: #myEnterVRButton; enterARButton: #myEnterARButton; exitARbutton:#myExitARButton">>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>

      <!-- Camera + Cursor. -->
      <a-camera>
        <a-cursor id="cursor">
          <a-animation
            begin="click"
            easing="ease-in"
            attribute="scale"
            fill="backwards"
            from="0.1 0.1 0.1"
            to="1 1 1"
            dur="150"
          ></a-animation>
          <a-animation
            begin="cursor-fusing"
            easing="ease-in"
            attribute="scale"
            from="1 1 1"
            to="0.1 0.1 0.1"
            dur="1500"
          ></a-animation>
        </a-cursor>
      </a-camera>
    </a-scene>
  </div>
</template>

<script>
import "aframe";
export default {};
</script>

<style scoped>
a-scene {
  height: 300px;
  width: 600px;
}
.overlayStyle {
  position: absolute;
  top: 0px;
  z-index: 1;
}

</style>
