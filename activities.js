import express from 'express'; // Import the express module
import helmet from 'helmet'; // Import the helmet module for security
import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from "node:fs/promises"

const activityList = "./activities.json"

export async function getActivities() {
    try {
        const data = await readFile(activityList, "utf8");
        console.log(data);
    } catch (error) {
        console.log("Error reading file", error);
        throw error;
    }
}