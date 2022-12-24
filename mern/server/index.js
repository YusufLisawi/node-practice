import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 1337;

app.post("/api/register", (req, res) => {
  res.status(200).json(req.body);
  console.log(req.body);
});

app.listen(port, (error) => {
  console.log(`Server is listening on port ${port}`);
});
