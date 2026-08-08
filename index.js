import{a as f,S as d,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="57063314-822dcdd9a6ef9e44a99adfa2d",p="https://pixabay.com/api/";async function y(s){return(await f.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${t.likes}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${t.views}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${t.comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${t.downloads}
              </p>
            </div>
          </a>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("is-visible")}function w(){l.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",v);async function v(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o){b(),L();try{const t=await y(o);if(t.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),u.reset()}}}
//# sourceMappingURL=index.js.map
