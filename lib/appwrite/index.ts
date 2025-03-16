"use server";

import { Account, Avatars, Client, Databases, Storage } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";

// Appwrite istemcisi oluşturulması
export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  // Kullanıcı oturum bilgisini çerezden al
  const session = (await cookies()).get("appwrite-session");

  // Oturum verisi yoksa hata fırlat
  if (!session || !session.value) {
    // Oturum yoksa kullanıcıyı login sayfasına yönlendirebilirsiniz
    throw new Error("No session");
  }

  // Oturum verisini Appwrite istemcisine set et
  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

// Yönetici erişim için istemci oluşturulması
export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatars() {
      return new Avatars(client);
    },
  };
};
