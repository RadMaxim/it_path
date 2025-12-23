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

                primary: 'hsl(var(--primary))',
                'primary-foreground': 'hsl(var(--primary-foreground))',

                destructive: 'hsl(var(--destructive))',
                'destructive-foreground': 'hsl(var(--destructive-foreground))',
                danger: 'hsl(var(--danger))',
                'danger-foreground': 'hsl(var(--danger-foreground))',

                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                white: 'hsl(var(--white))',
            },
        },

    },
    plugins: [],
}

export default config
