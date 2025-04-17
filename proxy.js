const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/encurtar", async (req, res) => {
  const { link } = req.body;

  try {
    const response = await axios.post("https://suauurl.com/api/ApiNewShort/request", {
      link: link,
      typelink: 1,
      shortlinkconfigid: 2,
      userId: 75738
    });

    res.json(response.data);
  } catch (error) {
    console.error("Erro na API:", error.message);
    res.status(500).json({ error: "Erro ao encurtar link" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});