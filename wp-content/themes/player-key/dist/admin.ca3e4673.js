const n=()=>{window.addEventListener("load",()=>{const t=document.querySelector('.post-new-php.post-type-coupon input[name="post_title"]'),o=document.querySelector("#title-prompt-text");if(t){o.classList.add("screen-reader-text");let e=Date.now().toString();e=`pki${e.slice(6)}`,t.value=e}})};n();