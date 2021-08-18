/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
     var videoEl = this.el.getAttribute('material').src;
   if (!videoEl) { return; }
     this.el.object3D.visible = true;
//     videoEl.load();
//     videoEl.play();
       var myVideo = document.querySelector('video');
        if (!myVideo) { return; }
        console.log(myVideo);
        this.el.object3D.visible = true;
        myVideo.play();
  }
});
