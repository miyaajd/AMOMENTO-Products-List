window.addEventListener("load", function () {
  const aTag = this.document.querySelectorAll("a");
  aTag.forEach((a) => {
    a.addEventListener("click", (e) => {
      if (a.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
  const copyBtn = this.document.querySelector("#copyMore");
  const copyTxt = this.document.querySelector(".copyTxt");
  copyBtn.addEventListener("click", (e) => {
    const isOpen = copyTxt.classList.toggle("open");
    copyBtn.textContent = isOpen ? "-" : "+";
    e.currentTarget.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // help Btn
  const helpBtn = this.document.querySelector("#helpBtn");
  const helpwrap = this.document.querySelector(".helpwrap");
  helpBtn.addEventListener("click", (e) => {
    const isOpenHelp = helpwrap.classList.toggle("open");
    helpBtn.style.transform = "scale(0.8)";
    this.setTimeout(() => {
      helpBtn.style.transform = "scale(1)";
    }, 150);
    const isClick = helpBtn.classList.toggle("click");
    helpBtn.textContent = isClick ? "✕" : "Help";
    e.currentTarget.setAttribute("aria-expanded", isClick ? "true" : "false");
    const helpMenuBtn = this.document.querySelectorAll(
      ".helpMenu > li > button"
    );
    const helpMenu = this.document.querySelectorAll(
      ".helpMenu > li > button >i, .helpMenu > li > button >span"
    );
    if (isOpenHelp) {
      helpMenu.forEach((menu) => {
        menu.classList.remove("active");
      });
      if (helpMenu.length > 0) {
        helpMenu[0].classList.add("active");
        helpMenu[1].classList.add("active");
      }
    }
    helpMenuBtn.forEach((button) => {
      button.addEventListener("click", () => {
        helpMenu.forEach((menu) => {
          menu.classList.remove("active");
        });
        helpMenu.forEach((m) => {
          if (button.contains(m)) {
            m.classList.add("active");
          }
        });
      });
    });
  });

  //
  //goTop
  const goTop = this.document.querySelector("#goTop");
  goTop.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  //
  // modal
  const modalClose = this.document.querySelector("#modalClose");
  const modal = this.document.querySelector(".modalWrap");
  modalClose.addEventListener("click", () => {
    modal.classList.add("none");
  });
});
