const page = document.body.dataset.page;

const setCurrentYear = () => {
  document.querySelectorAll("#year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
};

const setActiveRoute = () => {
  document.querySelectorAll("[data-route]").forEach((link) => {
    if (link.dataset.route === page) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });
};

const setupMobileNav = () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
};

const setupAnimalFilters = () => {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".animal-card");

  if (!buttons.length || !cards.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((chip) => chip.classList.remove("is-active"));
      button.classList.add("is-active");

      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.hidden = !matches;
      });

      logEvent(`Animal filter applied: ${filter}`);
    });
  });
};

const variantContent = {
  control: {
    headline: "Default message: Protect more habitats with every click.",
    copy: "Use the controls to simulate variant changes without editing the page structure.",
  },
  "variant-a": {
    headline: "Variant A: Join the fastest-growing supporter program this season.",
    copy: "This version uses stronger social-proof language and a more promotional tone.",
  },
  "variant-b": {
    headline: "Variant B: Fund a single habitat today and track the impact instantly.",
    copy: "This version shifts to a direct action framing with a simpler promise.",
  },
};

const logEvent = (message) => {
  const eventLog = document.querySelector("#event-log");

  if (!eventLog) {
    return;
  }

  if (eventLog.children.length === 1 && eventLog.firstElementChild?.textContent === "Waiting for interaction...") {
    eventLog.innerHTML = "";
  }

  const item = document.createElement("li");
  item.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
  eventLog.prepend(item);
};

const setupLab = () => {
  const buttons = document.querySelectorAll("[data-variant]");
  const headline = document.querySelector("#lab-headline");
  const copy = document.querySelector("#lab-copy");

  if (!buttons.length || !headline || !copy) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.variant;
      const content = variantContent[key];

      if (!content) {
        return;
      }

      headline.textContent = content.headline;
      copy.textContent = content.copy;
      logEvent(`Variant selected: ${key}`);
    });
  });
};

const setupDemoForm = () => {
  const form = document.querySelector("#signup-form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    logEvent("Sample adoption form submitted");
    form.reset();
  });
};

window.testSite = {
  page,
  logEvent,
};

setCurrentYear();
setActiveRoute();
setupMobileNav();
setupAnimalFilters();
setupLab();
setupDemoForm();
