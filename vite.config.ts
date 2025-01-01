import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
    webfontDownload(),
    svgr({
        svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
        include: "**/*.svg",
    }),
    ],
})
