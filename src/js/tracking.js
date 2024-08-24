import { trackEventsToServer } from "./services.js";

const trackPageViewToServer = () => {
  const eventData = {
    url: window.location.href,
    eventType: "pageView",
    timestamp: new Date().getTime(),
  };
  return trackEventsToServer(eventData);
};

export const trackPageView = () => {
  // Initial page load tracking
  window.addEventListener("load", () => {
    console.log("Page loaded");
    trackPageViewToServer();
  });

  // Track hash changes (for hash-based routing)
  window.addEventListener("hashchange", () => {
    console.log("Hash changed");
    trackPageViewToServer();
  });

  // Track history changes (for History API-based routing)
  const originalPushState = history.pushState;

  history.pushState = function (...args) {
    console.log("Pushing state");
    originalPushState.apply(this, args);
    trackPageViewToServer();
  };

  // Handle back/forward navigation
  window.addEventListener("popstate", () => {
    console.log("Navigating back/forward");
    trackPageViewToServer();
  });
};

const trackClickEventsToServer = (event) => {
  const eventData = {
    url: window.location.href,
    eventType: "click",
    timestamp: new Date().getTime(),
    target: event.target.outerHTML,
    tagName: event.target.tagName,
    id: event.target?.id || null,
  };
  return trackEventsToServer(eventData);
};

export const trackClickEvents = () => {
  document.addEventListener("click", (event) => {
    trackClickEventsToServer(event);
  });
};
