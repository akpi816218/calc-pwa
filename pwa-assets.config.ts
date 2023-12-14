import {
	defineConfig,
	minimal2023Preset as preset
} from '@vite-pwa/assets-generator/config';

export default defineConfig({
	preset,
	images: ['src/public/z_base_icon.svg']
});
