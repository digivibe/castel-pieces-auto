import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// Plugin Vite personnalisé pour servir des fichiers spécifiques pour des routes spécifiques
function serveCustomHtml() {
    return {
        name: 'serve-custom-html',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url === '/centre-de-depollution') {
                    // Assurez-vous que le chemin est correct pour votre structure de projet
                    const filePath = resolve(__dirname, 'centre.html');
                    res.end(readFileSync(filePath));
                } else {
                    next();
                }
            });
        }
    };
}

export default defineConfig({
    plugins: [
        vue(),
        serveCustomHtml() // Ajoutez votre plugin personnalisé ici
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                centre: resolve(__dirname, 'centre.html')
            }
        }
    }
});