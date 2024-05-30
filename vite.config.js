import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readFileSync } from 'fs'

export default defineConfig(({ mode }) => {
    
    const env = loadEnv(mode, process.cwd())
    
    const maintenanceMode = env.VITE_MAINTENANCE_MODE == 'true'

    function serveCustomHtml() {
        return {
            name: 'serve-custom-html',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    const publicFiles = ['/css/Global.css', '/images/logo.svg', '/js/jquery.js', '/js/wf.js']
                    if (maintenanceMode && !publicFiles.includes(req.url) && req.url !== '/maintenance.html' && req.url !== '/maintenance') {
                        res.writeHead(302, { Location: '/maintenance' })
                        res.end()
                    } else if (!maintenanceMode && req.url === '/maintenance') {
                        res.writeHead(302, { Location: '/' })
                        res.end()
                    } else if (!maintenanceMode && req.url === '/centre-de-depollution') {
                        const filePath = resolve(__dirname, 'centre.html')
                        res.writeHead(200, { 'Content-Type': 'text/html' })
                        res.end(readFileSync(filePath))
                    } else {
                        next()
                    }
                })
            }
        }
    }

    return {
        plugins: [
            vue(),
            serveCustomHtml()
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
    }
})