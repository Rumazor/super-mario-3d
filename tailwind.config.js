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
                'wave-pink': 'url(../assets/img/wave-pink.png)',
            }),
            screens:{
                'xsm': '320px'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}