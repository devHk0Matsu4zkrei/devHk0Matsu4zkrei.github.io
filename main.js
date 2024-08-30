// un cuadro div
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* //no me salee..!! quiero cambiar el bg-div dependiendo de width de la ventana del anveagador 
// var addEvent = function (obj, type, callback, eventReturn) {
//   if (obj == null || typeof obj === "undefined") return;

//   if (obj.addEventListener)
//     obj.addEventListener(type, callback, eventReturn ? true : false);
//   else if (obj.attachEvent) obj.attachEvent("on" + type, callback);
//   else obj["on" + type] = callback;
// };

//todavia no averiguo para que se comporte como queisiera

window.onresize = function (event) {
  let windows_size = window.outerWidth;
  let x = (windows_size / 100) * 94;
  document.getElementById("bg_dv").style.width = x;
};

// function bg_dv_Fn() {
//   let w = window.outerWidth;

//   let bg_dv = (document.getElementById("bg_dv").style.width = "89%");
// }

// watch = function (evt) {
//   
//         Older browser versions may return evt.srcElement
//         Newer browser versions should return evt.currentTarget
//     
//   var dimensions = {
//     width: (evt.srcElement || evt.currentTarget).outerWidth,
//   };
// };

// addEvent(window, "resize", watch, true);

*/

// cambiar el src de tu iframe al poner click en el menu
// let x_sw = document.getElementById("it1");

function fv_music() {
  const Iframe = document.getElementById("demo");
  Iframe.remove();
  // no se porque no puedo poner mi lista de musica favoritas T_T..!!
  let Iframe2 = document.getElementById("rigth-div");
  Iframe2.innerHTML = `
  <p> You can use ctrl + mousescroll to adjust the page size.</p><iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/videoseries?si=1K9zGKnxMlgWEglT&amp;list=PLGSMsQrrJyqQmultejoYS8TAeUTNG4ZO9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;

  let the_message = document.getElementById("the_message");
  the_message.remove;
  let The_message = document.getElementById("div_of_theMessage");
  The_message.innerHTML = `<p id="the_message">
   Hello, I like the lyrics of the "hidden" philosophical meaning of  <a href="https://www.youtube.com/watch?v=A9DWYjGHRq0" target="_blank">Nanatsu no Taizai</a> or the 7 sins <span onclick="topFunction()" id="rf">👆</span>. Some atheists will say that time says nothing. But it must be analyzed philosophically, this does not refer to the same time of the theoretical clock of intervals for a universe or absolute time, nor to Einstein's relative physical time, it refers to non-physical analog time, or analogous to the stars, in other words it is a circumstantial time. That's why it says rewind the view, it refers to the reflection of events. It refers to the light of the intuition of truth, it refers to that shine, "behind or inside" the eyes. It refers to the observer's time, mental time. What governs physical time that gives reason to change. He also mentions a cord of karma that connects the truth or circumstantial time of each one's correlational value at one time in the form of a network. In reflection all theories of connections, node movements are brought together into a general theory and it is the time of the supreme mind that will tell the truth. Because when there is a part that says it wants to merge, it means that it shares the same central values, a multiple tautology happening in karmas of some important truths.
  </p>`;
}

function chg_src(li, id) {
  let message = `<p id="the_message">
   Hello everyone, I have realized that iframes previously generated a vulnerability with click recognition and that current browsers do not allow iframes from other web pages by themselves, unless when they die they give a kind of permission from the owner or they only give access within a configuration that they give, for example, you cannot share your list of youtubers that you have created with the raw link and you recommend and so it is similar not only with the iframes, it is along the lines of custom scraper websites As I learn more, I will improve the code. Provide a web scraping framework with better capabilities or more intelligent and at the same time safer, more general that could perhaps help in creative forms of oracles. Decentralized for the web3 is nothing more than connecting to other programs. from other internet applications to the Blockchain or dag of systems, cryptos or similar. I am also inspired by making apps that help simplify administrative things in life and not just business.
  </p>`;

  let result = ``;
  // let Id = li.id;
  let Id = li.getAttribute("id");
  switch (Id) {
    case "it1":
      result = `<p> You can use ctrl + mousescroll to adjust the page size.</p><iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/gyMwXuJrbJQ?si=_ooXFUPTI_mDqlSC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <p> prueba si funciono.</p>`;

      break;
    case "it2":
      result = `<p> You can use ctrl + mousescroll to adjust the page size.</p><iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/WIsXSwo4iDc?si=O8ALv0-SiYLDv0z-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;

      break;
    case "it3":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/-1GB6m39-rM?si=lxdYbwTPD9MqsKbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it4":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/pUWmJ86X_do?si=JDSNzhJvBDzKsamJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it5":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/Y3WMkl0AFJk?si=501GgHfhjAkf-xq2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it6":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/NJ_JD0YpEZ8?si=r50wbg1zWSL_u5yB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it7":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/eEKGzZ4R-B4?si=wMpnopWnmVwviPkG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it8":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/RmNHFvZCoWs?si=P7atarpd-xz6wBrh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it9":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/HlL2NZK5fVU?si=AqIIP6gQOivxXTnG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it10":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/M1_v5HBVHWo?si=rbtcrVdGUgEfguKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it0":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/gfmRrPjnEw4?si=dxeFJx0X2G9nIEcG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
      `;
      break;
    case "it11":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/j_8PLI_wCVU?si=POfNu-KE7Fa06gsa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it12":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/s5yza-s0bhM?si=ss-ocNlLVYjTEitU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it13":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/vDDjtwQDw2k?si=UkGfYul_7EhW1esa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
        `;
      break;
    case "it14":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/3wwiOSxDAmg?si=JOA58dKVZL5qsD-3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it15":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800" height="460" src="https://www.youtube.com/embed/VgzHT9quo5c?si=6IaxpBxuKVouz3Oa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
      break;
    case "it":
      result = `
      <p> You can use ctrl + mousescroll to adjust the page size.</p>
      <iframe id="demo" width="800px" height="460"
      src="https://www.youtube.com/embed/videoseries?si=iZYZiSAqPbAdEIbw&amp;list=PLGSMsQrrJyqSaqg8qiILGTr7jghI-99Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
      `;
      break;
  }

  // NO funciona cambiando la propiedad src segun dice por seguridad
  // no se porque no funciona con tag name
  // const Iframe = document.getElementsByTagName("iframe");
  const Iframe = document.getElementById("demo");
  Iframe.remove();
  let Iframe2 = document.getElementById("rigth-div");
  Iframe2.innerHTML = result;

  let the_message1 = document.getElementById("the_message");
  the_message1.remove;
  let The_message2 = document.getElementById("div_of_theMessage");
  The_message2.innerHTML = message;
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
