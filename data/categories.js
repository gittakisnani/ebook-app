const categories = [
    {
        category: 'Fiction'
    },
    {
        category: 'Adventure'
    },
    {
        category: 'Crime & Mystery'
    },
    {
        category: 'Health'
    },
    {
        category: 'Tech'
    },
    {
        category: 'Development'
    }
].map((cat, id) => ({...cat, id: id + 1 }));

export default categories;