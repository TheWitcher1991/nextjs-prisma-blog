export const header: Array<any> = [
    { id: 1, title: 'Главная', path: '/', popup: false },
    { id: 2, title: 'Портфолио', path: '/portfolio', popup: false },
    { id: 3, title: 'Блог', path: '/blog', popup: [
        { id: 1, title: 'Статьи', path: '/blog' },
        { id: 2, title: 'Добавить', path: '/blog/add' }
    ]},
    { id: 4, title: 'Контакты', path: '/contact', popup: false },
]