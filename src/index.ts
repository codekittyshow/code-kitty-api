import dotEnv from "dotenv";
dotEnv.config({ path: __dirname+'/.env' });

import app from "./app"



const PORT: number = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
