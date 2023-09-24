import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
import { globSync } from "glob";
import { parse } from 'path'

export default defineConfig({
    plugins: [
        react(),
        imagePresets({
            small: widthPreset({
                widths: [350, 700],
                formats: {
                    jpg: { quality: 70 },
                },
            }),
        }),
        ViteImageOptimizer()
    ],
    build: {
        rollupOptions: {
            input: Object.fromEntries(globSync("**/*.html" ).filter(name => {
                return (!parse(name).dir.includes("build")) && (!parse(name).dir.includes("dist"))
            }).map(file => {
                const strings = [
                    file.replace(/[.]/g, '-'),
                    file
                ]
                return strings
            }))
        },
    },
});
