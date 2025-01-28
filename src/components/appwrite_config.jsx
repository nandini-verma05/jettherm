import { Client, Account, Storage, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint (e.g., https://cloud.appwrite.io/v1 for Appwrite Cloud)
  .setProject('6790c07f0018598d5209');    // Replace with your Project ID

// Optional: Export commonly used services for convenience
const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

export { client, account, storage, databases };
