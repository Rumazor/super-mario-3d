module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-pattern': 'url(../assets/img/wave-white.png)',
                'wave-pattern-dots': 'url(../assets/img/pattern-white-dots.png)',
                'character-mario': 'url(../assets/img/character-l.png)',
                'pattern-characters-red': 'url(../assets/img/pattern-characters-red.png)',
                'pattern-yellow-dots': 'url(../assets/img/pattern-yellow-dots.png)',
                'pattern-red-dots': 'url(../assets/img/pattern-red-dots.png)',
                'wave-pink': 'url(../assets/img/wave-pink.png)',
                'pattern-black': 'url(../assets/img/pattern-characters-black.png)',
                'pattern-white': 'url(../assets/img/pattern-characters-white.png)',
            }),
            screens:{
                'xsm': '320px',
                'xmd': '425px'
            },
            fontFamily:{
                Barlow: "'Barlow',serif",
                Libre:"'Libre Franklin', serif",
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}