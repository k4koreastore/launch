document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================
     FLOATING NAV
  ========================= */

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* =========================
     SMOOTH ANCHOR SCROLL
  ========================= */

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");

      if (!id || id === "#") return;

      const target = document.querySelector(id);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  });

  /* =========================
     NAV SCROLL SPY
  ========================= */

  const updateActiveNav = () => {
    const marker = window.scrollY + 180;
    let current = "";

    sections.forEach((section) => {
      if (marker >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  };

  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });

  /* =========================
     REVEAL ON SCROLL
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  }

  /* =========================
     CAROUSELS
     Products: one product per scroll
     Testimonials: one card per scroll
  ========================= */

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const type = carousel.dataset.carousel;
    const track = carousel.querySelector(
      type === "testimonials" ? ".testimonial-track" : ".product-track"
    );

    if (!track) return;

    const slides = [...track.children];
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const currentLabel = carousel.querySelector("[data-carousel-current]");
    const viewport = carousel.querySelector(".carousel-viewport");

    let index = 0;
    let timer = null;
    let paused = false;
    let startX = 0;

    const render = () => {
      track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;

      if (currentLabel) {
        currentLabel.textContent = String(index + 1);
      }
    };

    const goTo = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length;
      render();
    };

    const restartAutoScroll = () => {
      if (reduceMotion || slides.length < 2) return;

      window.clearInterval(timer);

      timer = window.setInterval(() => {
        if (!paused) {
          goTo(index + 1);
        }
      }, type === "testimonials" ? 6000 : 5500);
    };

    prev?.addEventListener("click", () => {
      goTo(index - 1);
      restartAutoScroll();
    });

    next?.addEventListener("click", () => {
      goTo(index + 1);
      restartAutoScroll();
    });

    carousel.addEventListener("mouseenter", () => {
      paused = true;
    });

    carousel.addEventListener("mouseleave", () => {
      paused = false;
    });

    carousel.addEventListener("focusin", () => {
      paused = true;
    });

    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) {
        paused = false;
      }
    });

    viewport?.addEventListener(
      "touchstart",
      (event) => {
        startX = event.changedTouches[0].clientX;
      },
      { passive: true }
    );

    viewport?.addEventListener(
      "touchend",
      (event) => {
        const endX = event.changedTouches[0].clientX;
        const distance = endX - startX;

        if (Math.abs(distance) < 45) return;

        if (distance < 0) {
          goTo(index + 1);
        } else {
          goTo(index - 1);
        }

        restartAutoScroll();
      },
      { passive: true }
    );

    render();
    restartAutoScroll();
  });
});
