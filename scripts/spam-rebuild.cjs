const fs = require("fs/promises");
const path = require("path");

const DELAY = 250;

async function runAsync() {
  const thePath = path.resolve(__dirname, "../src/main.js");

  for (i = 0; true; i++) {
    let js = await fs.readFile(thePath, { encoding: "utf-8" });

    js += `//`;

    await fs.writeFile(thePath, js, { encoding: "utf-8" });
    console.log(i);

    await new Promise((resolve) => setTimeout(resolve, DELAY));
  }
}

runAsync().catch(console.error);
