import { TOKENS } from "../db/tokens.js";
import { trackClickEvents, trackPageView } from "./tracking.js";
import { DOMAIN } from "./services.js";
import { validateToken } from "./services.js";
import { updateHeroSection } from "./modifyUserContent.js";

// Get API KEY
const getAPIKey = async () => {
  const scriptTag =
    document.currentScript ||
    document.querySelector(`script[src^='${DOMAIN}']`);
  const scriptURL = scriptTag.getAttribute("src");
  const params = new URLSearchParams(scriptURL.split("?")[1]);
  const apiKey = params.get("id");
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  const isValid = await validateToken(apiKey);
  if (!isValid) {
    throw new Error("Invalid API Key");
  }
  return apiKey;
};

async function main() {
  await getAPIKey();
  trackPageView();
  trackClickEvents();
  updateHeroSection();
}

main();
