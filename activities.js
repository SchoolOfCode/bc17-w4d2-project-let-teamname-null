import { readFile } from "node:fs/promises";

const activityList = "./activities.json";

export async function getActivities() {
  try {
    const data = await readFile(activityList, "utf8");
    console.log(data);
  } catch (error) {
    console.log("Error reading file", error);
    throw error;
  }
}
