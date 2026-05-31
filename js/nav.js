(function () {
  const headers = document.querySelectorAll(".topbar");

  headers.forEach((header) => {
    const nav = header.querySelector(".nav-links");
    const inner = header.querySelector(".nav-inner");

    if (!nav || !inner || inner.querySelector(".menu-toggle")) {
      return;
    }

    const button = document.createElement("button");
    button.className = "menu-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Open navigation menu");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = "<span></span><span></span><span></span>";

    inner.insertBefore(button, nav);

    button.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-menu-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        header.classList.remove("is-menu-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");
      }
    });
  });
})();
