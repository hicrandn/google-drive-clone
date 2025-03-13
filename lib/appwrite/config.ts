export const appwriteConfig = {
    endpointUrl: "https://cloud.appwrite.io/v1", // "/v1" eklendi!
    projectId: "67c6cc57002f9a8966ee",
    databaseId: "67c6cdaa002145719534",
    usersCollectionId: "67c6cdfd00059012a4c7",
    filesCollectionId: "67c6cfa7002ab3636bd1",
    bucketId: "67c6d24a000a2c7a5598",
    secretKey: process.env.NEXT_APPWRITE_SECRET,
};

  console.log("Loaded Appwrite Config:", appwriteConfig);
console.log("Database ID:", process.env.NEXT_PUBLIC_APPWRITE_DATABASE);
