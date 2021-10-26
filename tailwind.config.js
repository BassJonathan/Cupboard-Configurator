module.exports = {
    prefix: 'tw-',
    screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
    },
    purge: ['./index.html', './scr/**/*.{vue, js, ts, jsx, tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': {
                    'DEFAULT': '#012840',
                    'gradient1': '#003352',
                    'gradient2': '#002033'
                },
                'blue': '#115D8C',
                'red': '#400808',
                'green': {
                    'DEFAULT': '#403F08',
                    'dark': '#8C8A0A'
                }
            },
            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}