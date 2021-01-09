window.Data = (function () {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) +15);
    }

    const products = [
        {
            id: 1,
            title: 'gmail inbox readability score',
            description: 'calculating the readability score of an email',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 2,
            title: 'gmail inbox readability score',
            description: 'calculating the readability score of an email',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 3,
            title: 'gmail inbox readability score',
            description: 'calculating the readability score of an email',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 4,
            title: 'gmail inbox readability score',
            description: 'calculating the readability score of an email',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        },
    ];
    return { products: products };
}());