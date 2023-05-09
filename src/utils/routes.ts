export const header: Array<any> = [
    { id: 1, title: 'Главная', path: '/', popup: false },
    { id: 2, title: 'Портфолио', path: '/portfolio', popup: false },
    { id: 3, title: 'Блог', path: '/blog', popup: [
        { id: 1, title: 'Статьи', path: '/blog' },
        { id: 2, title: 'Добавить', path: '/blog/add' }
    ]},
    { id: 4, title: 'Контакты', path: '/contact', popup: false },
]

export const footer: Array<any> = [
    { id: 1, title: 'Product', list: [
        { id: 1, title: 'Overview', path: '/' },
        { id: 2, title: 'Features', path: '/' },
        { id: 3, title: 'Solutions', path: '/' },
        { id: 4, title: 'Changelog', path: '/' }
    ] },
    { id: 1, title: 'Blog', list: [
        { id: 1, title: 'All Posts', path: '/' },
        { id: 2, title: 'Engineering', path: '/' },
        { id: 3, title: 'Community', path: '/' },
        { id: 4, title: 'Customer Stories', path: '/' }
    ] },
    { id: 1, title: 'Legal', list: [
        { id: 1, title: 'About', path: '/' }, 
        { id: 2, title: 'Contact Us', path: '/' }, 
        { id: 3, title: 'Privacy Policy', path: '/' }, 
        { id: 4, title: 'Cookie Preferences', path: '/' }
    ] },
]