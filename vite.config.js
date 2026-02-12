import { defineConfig } from "vite";

export default defineConfig({
    base: "/thread-emergent/",
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    publicDir: 'public'
})