import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'Tirana Run',short_name:'Tirana Run',description:'Ec dhe zbulo Tiranën përmes një itinerari historik.',theme_color:'#45a914',background_color:'#fafbf8',display:'standalone',start_url:'/',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]},workbox:{navigateFallback:'/index.html'}})],test:{environment:'jsdom',setupFiles:'./src/test/setup.ts',css:true}});
