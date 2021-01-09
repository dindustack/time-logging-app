window.Data = (function () {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) +15);
    }

    const products = [
        {
            id: 1,
            title: 'qooore',
            description: 'Investing app for hypebeasts',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://ph-files.imgix.net/35e45a01-b9eb-4315-84fb-fd9e58834c18.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
        },
        {
            id: 2,
            title: 'SavvyCal',
            description: "Sending your scheduling link shouldn't feel weird.",
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://ph-files.imgix.net/3c00b383-3d09-48a4-b635-562a7c9bcc44.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
        },
        {
            id: 3,
            title: 'tappity',
            description: "World's largest library of interactive lessons for kids",
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://ph-files.imgix.net/f5f2eef9-6ffe-4f5b-a659-a8b951287370.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
        },
        {
            id: 4,
            title: 'onrise',
            description: 'Build nano habits to become the person you aspire to be',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: '',
            productImageUrl: 'https://ph-files.imgix.net/2e67e9e3-f954-4b23-854f-6cdcf7a2c3e5.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
        },
    ];
    return { products: products };
}());