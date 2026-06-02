/* Case-study image lightbox — progressive enhancement, zero dependencies.
   If this script never runs, the figures simply display inline as normal. */
(function () {
    "use strict";

    var figures = document.querySelectorAll(".cs-figure img");
    if (!figures.length) return;

    var overlay = document.createElement("div");
    overlay.className = "cs-lightbox";
    overlay.hidden = true;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Expanded image");

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "cs-lightbox-close";
    closeBtn.setAttribute("aria-label", "Close image");
    closeBtn.textContent = "×"; // × multiplication sign

    var bigImg = document.createElement("img");
    bigImg.className = "cs-lightbox-img";
    bigImg.alt = "";

    overlay.appendChild(closeBtn);
    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    var lastFocused = null;

    function open(src, alt) {
        bigImg.src = src;
        bigImg.alt = alt || "";
        overlay.hidden = false;
        overlay.scrollTop = 0; // tall screenshots start at the top
        document.body.classList.add("cs-lightbox-open");
        lastFocused = document.activeElement;
        closeBtn.focus();
    }

    function close() {
        overlay.hidden = true;
        bigImg.removeAttribute("src");
        document.body.classList.remove("cs-lightbox-open");
        if (lastFocused && typeof lastFocused.focus === "function") {
            lastFocused.focus();
        }
    }

    figures.forEach(function (img) {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", function () {
            open(img.currentSrc || img.src, img.alt);
        });
    });

    // A click anywhere on the overlay (backdrop, image, or close button) dismisses.
    overlay.addEventListener("click", close);

    document.addEventListener("keydown", function (e) {
        if (!overlay.hidden && (e.key === "Escape" || e.key === "Esc")) {
            close();
        }
    });
})();
