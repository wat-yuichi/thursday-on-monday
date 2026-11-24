import { mkdir, writeFile } from "node:fs/promises";

const joke = "I meal-prepped for the week; by Monday night, I was eating Thursday.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", joke, "utf8");
