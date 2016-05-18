"use strict";

function getWindowScrollTop () {
  return (window.pageYOffset !== undefined) ?
    window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

exports.getWindowScrollTop = getWindowScrollTop;
