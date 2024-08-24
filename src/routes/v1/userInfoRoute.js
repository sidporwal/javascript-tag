import { Router } from "express";

const router = Router();

router.get("/getInfo", (req, res) => {
  // Example user data
  const userData = {
    headline: "Welcome Back, Rohan!",
    imageUrl: "http://localhost:8080/images/user-image.jpg",
  };

  return res.json(userData);
});

export default router;
