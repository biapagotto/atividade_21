document.addEventListener("DOMContentLoaded",function(){let s=document.querySelectorAll("[data-tab-button]");let e=document.querySelector(".hero").clientHeight;window.addEventListener("scroll",function(){window.scrollY>e?document.querySelector("header").classList.add("header--is-hidden"):document.querySelector("header").classList.remove("header--is-hidden")}),s.forEach(e=>{e.addEventListener("click",function(e){var t=e.target.dataset.tabButton,t=document.querySelector(`[data-tab-id=${t}]`);document.querySelectorAll("[data-tab-id]").forEach(e=>{e.classList.remove("shows__list--is-active")}),t.classList.add("shows__list--is-active"),s.forEach(e=>{e.classList.remove("shows__tabs__button--is-active")}),e.target.classList.add("shows__tabs__button--is-active")})})});