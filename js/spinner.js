window.addEventListener("load", ()=>{
    const loader =document.querySelector(".loader");

    loader.classList.add("loader-hidden");
    setTimeout(() => {
        loader.addEventListener("transtionend",()=>{
            document.body.removeChild("loader")
        })
    }, 2000);
   
})