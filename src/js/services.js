export const DOMAIN = "http://localhost:8080";

export const trackEventsToServer = async (eventData) => {
  try {
    const response = await fetch(`${DOMAIN}/api/v1/track/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while tracking data", error);
    throw error;
  }
};

export const validateToken = async (token) => {
  const urlWithParams = new URL(`${DOMAIN}/api/v1/token/validate`);
  urlWithParams.searchParams.append("apiKey", token);
  try {
    const response = await fetch(urlWithParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response?.status === 200;
  } catch (error) {
    console.error("Error while validating token", error);
    throw error;
  }
};

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${DOMAIN}/api/v1/user/getInfo`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
