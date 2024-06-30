import { UserConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";

const config: UserConfig = {
    plugins: [react()],
    server: {
        port: 3000,
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: '[local]__[hash:base64:5]',
        },
    },
}

export default config