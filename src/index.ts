import app from "./app";
import config from "./config/config";

const PORT: number = parseInt(config.PORT) || 4000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
