const heroScreenshot = document.querySelector("#hero-screenshot");
const themeButtons = document.querySelectorAll(".theme-button");
const versionTargets = [
  document.querySelector("#release-version"),
  document.querySelector("#download-version"),
];
const minimumSystemTarget = document.querySelector("#minimum-system");
const publishDateTarget = document.querySelector("#publish-date");
const downloadLinks = [
  document.querySelector("#primary-download"),
  document.querySelector("#download-link"),
];

function firstText(parent, selectors) {
  for (const selector of selectors) {
    const node = parent.getElementsByTagName(selector)[0];
    if (node?.textContent?.trim()) {
      return node.textContent.trim();
    }
  }

  return "";
}

function setHeroTheme(theme) {
  if (!heroScreenshot) {
    return;
  }

  const nextSrc =
    theme === "dark"
      ? heroScreenshot.dataset.darkSrc
      : heroScreenshot.dataset.lightSrc;

  if (!nextSrc || heroScreenshot.getAttribute("src") === nextSrc) {
    return;
  }

  heroScreenshot.classList.add("is-swapping");
  window.setTimeout(() => {
    heroScreenshot.setAttribute("src", nextSrc);
    heroScreenshot.classList.remove("is-swapping");
  }, 110);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTheme = button.dataset.themeTarget || "light";

    themeButtons.forEach((otherButton) => {
      const isActive = otherButton === button;
      otherButton.classList.toggle("is-active", isActive);
      otherButton.setAttribute("aria-selected", String(isActive));
    });

    setHeroTheme(targetTheme);
  });
});

async function loadReleaseInfo() {
  try {
    const response = await fetch("appcast.xml", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Unexpected status: ${response.status}`);
    }

    const xmlText = await response.text();
    const xml = new DOMParser().parseFromString(xmlText, "application/xml");
    const item = xml.getElementsByTagName("item")[0];
    const enclosure = item?.getElementsByTagName("enclosure")[0];

    const version = item
      ? firstText(item, ["sparkle:shortVersionString", "title"]) || "Latest release"
      : "Latest release";
    const minimumSystem = item
      ? firstText(item, ["sparkle:minimumSystemVersion"]) || "macOS"
      : "macOS";
    const enclosureUrl =
      enclosure?.getAttribute("url") ||
      "https://github.com/herrkaefer/mai-releases/releases/latest";
    const pubDateRaw = item ? firstText(item, ["pubDate"]) : "";

    const formattedDate = pubDateRaw
      ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(new Date(pubDateRaw))
      : "Unknown";

    versionTargets.forEach((target) => {
      if (target) {
        target.textContent = version;
      }
    });

    if (minimumSystemTarget) {
      minimumSystemTarget.textContent = minimumSystem;
    }

    if (publishDateTarget) {
      publishDateTarget.textContent = formattedDate;
    }

    downloadLinks.forEach((link) => {
      if (link) {
        link.setAttribute("href", enclosureUrl);
      }
    });
  } catch {
    versionTargets.forEach((target) => {
      if (target) {
        target.textContent = "GitHub Releases";
      }
    });

    if (minimumSystemTarget) {
      minimumSystemTarget.textContent = "See release notes";
    }

    if (publishDateTarget) {
      publishDateTarget.textContent = "See release notes";
    }
  }
}

function setupReveal() {
  const revealNodes = document.querySelectorAll(".reveal");
  if (!revealNodes.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

loadReleaseInfo();
setupReveal();
