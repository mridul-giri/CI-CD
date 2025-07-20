import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("hi theres"));
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const user = client.user.create({
    data: { username, password },
  });
  res.json({ message: "signup successfully", user });
});

app.listen(3002, () => console.log("app is listening on port 3002"));
