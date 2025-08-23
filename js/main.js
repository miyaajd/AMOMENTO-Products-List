window.addEventListener("load", function(){
    const copyBtn =this.document.querySelector("#copyMore")
    const copyTxt =this.document.querySelector(".copyTxt")
    copyBtn.addEventListener("click" ,(e)=>{
        const isOpen = copyTxt.classList.toggle("open")
        copyBtn.textContent = isOpen ? "-" : "+";
        e.currentTarget.setAttribute("aria-expanded", isOpen ? "true" : "false");
    })
})