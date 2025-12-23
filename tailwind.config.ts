import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}',
        './widgets/**/*.{ts,tsx}',
        './features/**/*.{ts,tsx}',
        './entities/**/*.{ts,tsx}',
        './shared/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                danger: 'hsl(var(--danger))',
                card: 'hsl(var(--card))',
                'card-foreground': 'hsl(var(--card-foreground))',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
        },
    },
    plugins: [],
}

export default config
