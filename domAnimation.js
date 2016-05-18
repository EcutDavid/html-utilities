"use strict";
var position = require('./position.js');

function animate(elem, style, unit, from, to, time, isProp) {
  if (!window) {
    return;
  }
  if (!elem) return;
  var start = new Date().getTime(),
    timer = setInterval(function() {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      if (isProp) {
        elem[style] = (from + step * (to - from)) + unit;
      } else {
        elem.style[style] = (from + step * (to - from)) + unit;
      }
      if (step === 1) clearInterval(timer);
    }, 25);
  elem.style[style] = from + unit;
}

function pageScrollTopAnimate(to, time) {
  if (!window) {
    return;
  }
  var from = position.getWindowScrollTop();
  var element = document.body;
  animate(element, 'scrollTop', '', from, to, time, true);
}

exports.animate = animate
exports.pageScrollTopAnimate = pageScrollTopAnimate
