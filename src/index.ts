import app from "./app";

const PORT: number = 4000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
