export default {
    state: {
        navigationLinks: [
            {
                url: '/',
                text: 'Main'
            },
            {
                url: '/products',
                text: 'Products'
            },
            {
                url: '/cart',
                text: 'Cart'
            }
        ]
    },
    getters: {
        navigationLinks(state) {
            return state.navigationLinks
        }
    }
}