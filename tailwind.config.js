/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			colors: {
				// background: 'hsl(var(--background))',
				// foreground: 'hsl(var(--foreground))',
				'background': '#000000',
				'foreground': '#FFFFFF',
				'bpStart': '#10A8EA',
				'bpEnd': '#B21BF9',
				'bStart': '#80EBF2',
				'bEnd': '#10A8EA',
				'pStart': '#8316F0',
				'pEnd': '#4B0D8A',
				'navbar': 'rgb(0 0 0 / 55%)',
  			// card: {
  			// 	DEFAULT: 'hsl(var(--card))',
  			// 	foreground: 'hsl(var(--card-foreground))'
  			// },
  			// popover: {
  			// 	DEFAULT: 'hsl(var(--popover))',
  			// 	foreground: 'hsl(var(--popover-foreground))'
  			// },
  			// primary: {
  			// 	DEFAULT: 'hsl(var(--primary))',
  			// 	foreground: 'hsl(var(--primary-foreground))'
  			// },
  			// secondary: {
  			// 	DEFAULT: 'hsl(var(--secondary))',
  			// 	foreground: 'hsl(var(--secondary-foreground))'
  			// },
  			// muted: {
  			// 	DEFAULT: 'hsl(var(--muted))',
  			// 	foreground: 'hsl(var(--muted-foreground))'
  			// },
  			// accent: {
  			// 	DEFAULT: 'hsl(var(--accent))',
  			// 	foreground: 'hsl(var(--accent-foreground))'
  			// },
  			// destructive: {
  			// 	DEFAULT: 'hsl(var(--destructive))',
  			// 	foreground: 'hsl(var(--destructive-foreground))'
  			// },
  			border: 'hsl(var(--border))',
  			// input: 'hsl(var(--input))',
  			// ring: 'hsl(var(--ring))',
  			// chart: {
  			// 	'1': 'hsl(var(--chart-1))',
  			// 	'2': 'hsl(var(--chart-2))',
  			// 	'3': 'hsl(var(--chart-3))',
  			// 	'4': 'hsl(var(--chart-4))',
  			// 	'5': 'hsl(var(--chart-5))'
  			// }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'custom': '0.625rem',
  		}
  	}
  },
	plugins: [require("tailwindcss-animate")],
	variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
};
