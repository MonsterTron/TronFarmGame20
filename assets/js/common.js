"use strict";function contentLoaded(){document.getElementById("preloader").classList.add("loaded");var t=document.getElementsByClassName("js-youtube"),e=t.length;function a(){var t=document.createElement("iframe"),e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";this.getAttribute("data-params")&&(e+="&"+this.getAttribute("data-params")),t.setAttribute("src",e),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","1"),t.setAttribute("width","100%"),t.setAttribute("height","100%"),this.innerHTML="",this.appendChild(t),this.removeEventListener("click",a)}for(var s=0;s<e;s++){t[s].getAttribute("data-background")&&(t[s].style.backgroundImage="url(https://i.ytimg.com/vi/"+t[s].id+"/sddefault.jpg)");var i=document.createElement("div");i.setAttribute("class","play"),t[s].appendChild(i),t[s].addEventListener("click",a)}!function(){var t=document.getElementsByClassName("section"),e=document.getElementById("block-content");if(t.length){var a=t[0],s=parseInt(a.clientHeight),i=Math.floor((s-100)/418);i<1?e.setAttribute("class","x1"):15<i?e.setAttribute("class","x15"):e.setAttribute("class","x"+i)}}()}document.addEventListener("DOMContentLoaded",contentLoaded);