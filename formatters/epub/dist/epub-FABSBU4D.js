(()=>{var s=document.querySelector.bind(document),o=document.querySelectorAll.bind(document);function r(e){document.readyState!=="loading"?e():document.addEventListener("DOMContentLoaded",e)}var l="hll";window.addEventListener("swup:page:view",t);t();function t(){o("[data-group-id]").forEach(e=>{e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",i)})}function i(e){let n=e.currentTarget,a=e.type==="mouseenter",c=n.getAttribute("data-group-id");n.parentElement.querySelectorAll(`[data-group-id="${c}"]`).forEach(u=>{u.classList.toggle(l,a)})}r(()=>{t()});})();