import { fetchUserData } from "./services.js";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to fetch user data and update the hero section
export async function updateHeroSection() {
  try {
    const userData = await fetchUserData();
    if (!document.getElementById("hero-headline")) {
      await sleep(1000);
      updateHeroSection();
    }

    // Update the headline and image based on user data
    document.getElementById("hero-headline").textContent = userData.headline;
    document.getElementById("hero-image").src = userData.imageUrl;
    document.getElementById("hero-image").alt = userData.headline; // Optional: Set alt text for accessibility
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
