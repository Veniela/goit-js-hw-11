import{a as f,S as d,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="57063314-822dcdd9a6ef9e44a99adfa2d",p="https://pixabay.com/api/";async function y(s){return(await f.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(s){const o=s.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${r.likes}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${r.views}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${r.comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${r.downloads}
              </p>
            </div>
          </a>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function h(){l.innerHTML=""}function b(){c.classList.add("is-visible")}function L(){c.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",w);async function w(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o){h(),b();try{const i=await y(o);if(i.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),u.reset()}}}
//# sourceMappingURL=index.js.map
