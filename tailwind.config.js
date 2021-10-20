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
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}