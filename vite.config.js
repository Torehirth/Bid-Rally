import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/Bid-Rally/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        auctions: resolve(__dirname, "auctions/index.html"),
        create: resolve(__dirname, "new-listing/index.html"),
        register: resolve(__dirname, "register/index.html"),
        login: resolve(__dirname, "login/index.html"),
        profile: resolve(__dirname, "profile/index.html"),
        about: resolve(__dirname, "about/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        itemDetail: resolve(__dirname, "auctions/item.html"),
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
