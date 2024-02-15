import { Client, Databases } from "appwrite";
import { config } from "./config";

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.project_id);

export const database = new Databases(client);
export { ID } from "appwrite";
