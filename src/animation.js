
export const pageAnimation = {
    hide: {
        x: 300,
        opacity: 0
    },

    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    exit: {
        opacity: 0,
        x: 300,
        transition: {
            duration: 1
        }
    }
}

