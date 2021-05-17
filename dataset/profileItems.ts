type ProfileItems = {
    itemTitle: string,
    itemImgPath: {
        main: string,
        imgs: string[]
    },
    url: string,
    github: string
}[]

export const profileItems: ProfileItems = [
    {
        itemTitle: "Take's portfolio",
        itemImgPath: {
            main: '/img/portfolio/it-typing/it-typing_top.jpg',
            imgs: [
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
            ]
        },
        url: 'https://take-portfolio.vercel.app/',
        github: 'https://github.com/Take327/take-portfolio'
    },
    {
        itemTitle: "IT-TYPING",
        itemImgPath: {
            main: '/img/portfolio/it-typing/it-typing_typing.jpg',
            imgs: [
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_typing.jpg',
                '/img/portfolio/it-typing/it-typing_registration.jpg',
                '/img/portfolio/it-typing/it-typing_login.jpg',
                '/img/portfolio/it-typing/it-typing_signup.jpg',
                '/img/portfolio/it-typing/it-typing_contact.jpg',
            ]
        },
        url: 'https://it-typing.web.app/',
        github: 'https://github.com/Take327/it-typing'
    }
]
