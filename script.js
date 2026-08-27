/* =====================================================
   ACEPEX — MAIN JAVASCRIPT
====================================================== */


/* =====================================================
   01. SMOOTH SCROLL
   Handles navigation links and anchor buttons.
====================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});


/* =====================================================
   02. HEADER / NAVIGATION
====================================================== */

const nav = document.querySelector(".nav");

let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;

    if (!nav) {
      return;
    }

    /*
      Add a subtle state while scrolling.
      CSS can use .nav.scrolled later.
    */

    if (currentScrollY > 30) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    lastScrollY = currentScrollY;
  },
  { passive: true }
);


/* =====================================================
   03. REVEAL ON SCROLL
====================================================== */

const revealElements = document.querySelectorAll(
  `
  .problem-intro,
  .system-comparison,
  .build-intro,
  .build-card,
  .process-intro,
  .process-step,
  .system-intro,
  .product-stage,
  .usecase-intro,
  .usecase-row,
  .why-intro,
  .why-card,
  .case-intro,
  .featured-case,
  .cta-main,
  .cta-principle,
  .footer
  `
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");

  revealObserver.observe(element);
});


/* =====================================================
   04. ACTIVE USE CASE
   Highlights a use-case row when the user hovers it.
====================================================== */

const usecaseRows = document.querySelectorAll(".usecase-row");

usecaseRows.forEach((row) => {

  row.addEventListener("mouseenter", () => {

    usecaseRows.forEach((item) => {
      item.classList.remove("is-hovered");
    });

    row.classList.add("is-hovered");
  });


  row.addEventListener("mouseleave", () => {
    row.classList.remove("is-hovered");
  });

});


/* =====================================================
   05. PRODUCT SYSTEM INTERACTION
====================================================== */

const workflowNodes = document.querySelectorAll(
  ".workflow-node"
);

workflowNodes.forEach((node) => {

  node.addEventListener("click", () => {

    workflowNodes.forEach((item) => {
      item.classList.remove("selected");
    });

    node.classList.add("selected");

  });

});


/* =====================================================
   06. PRODUCT SIDEBAR INTERACTION
====================================================== */

const appNavItems = document.querySelectorAll(
  ".app-nav a"
);

appNavItems.forEach((item) => {

  item.addEventListener("click", (event) => {

    event.preventDefault();

    appNavItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });

    item.classList.add("active");

  });

});


/* =====================================================
   07. CASE STUDY SIDEBAR INTERACTION
====================================================== */

const caseNavItems = document.querySelectorAll(
  ".case-side-item"
);

caseNavItems.forEach((item) => {

  item.addEventListener("click", () => {

    caseNavItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });

    item.classList.add("active");

  });

});


/* =====================================================
   08. BUTTON PRESS STATE
====================================================== */

const buttons = document.querySelectorAll(
  ".primary-btn, .nav-cta, .cta-button"
);

buttons.forEach((button) => {

  button.addEventListener("mousedown", () => {
    button.classList.add("pressed");
  });

  button.addEventListener("mouseup", () => {
    button.classList.remove("pressed");
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("pressed");
  });

});


/* =====================================================
   09. REDUCE MOTION ACCESSIBILITY
====================================================== */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

if (prefersReducedMotion.matches) {

  document.documentElement.classList.add(
    "reduce-motion"
  );

}


/* =====================================================
   10. INITIAL PAGE STATE
====================================================== */

window.addEventListener("DOMContentLoaded", () => {

  document.body.classList.add("page-loaded");

});