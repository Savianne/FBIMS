const closeNav = () => {
    return {
        type: 'CLOSE_NAV',
    }
}

const openNav = () => {
    return {
        type: 'OPEN_NAV',
    }
}

const switchToLargeNav = () => {
    return {
        type: 'TO_LARGE_NAV',
    }
}

const switchToSmallNav = () => {
    return {
        type: 'TO_SMALL_NAV',
    }
}

export { closeNav, openNav, switchToLargeNav, switchToSmallNav };