import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ keep your secret API key here
const VARION_API_KEY = "sk-default-4qFUvZiQyRimaFIoxGNx0NsVfeV5dkLp";
const VARION_ENDPOINT = "https://agent-prod.studio.lyzr.ai/v3/inference/chat/";

app.post("/api/chat", async (req, res) => {
  try {
    const { message, user_id } = req.body;

    const payload = {
      user_id: user_id || "ahamadfiroz157@gmail.com",
      agent_id: "68e24a823637bc8ddca005f7",
      session_id: "68e24a823637bc8ddca005f7-859ns255n0y",
      message: message,
    };

    const response = await axios.post(VARION_ENDPOINT, payload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": VARION_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
