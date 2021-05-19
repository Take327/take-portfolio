type ProfileItems = {
    itemTitle: string,
    itemImgPath: {
        main: string,
        imgs: string[]
    },
    url: string,
    github: string,
    text:string,
    tech:string
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
        github: 'https://github.com/Take327/take-portfolio',
        text:`現在アクセスしていただいているWEBサイトになります。¥n
        Next.jsを使用しランニングページをとして作成しました。
        現在の私のスキルや製作物について知っていただくことを目標としています。`,
        tech:'Next.js,TypeScript,SCSS,Material-ui'
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
                //'/img/portfolio/it-typing/it-typing_signup.jpg',
                //'/img/portfolio/it-typing/it-typing_contact.jpg',
            ]
        },
        url: 'https://it-typing.web.app/',
        github: 'https://github.com/Take327/it-typing',
        text:`こちらはユーザー独自のフリーワードでタイピングできるWEBアプリケーションとなります。\r\n
        日々のタイピングでよく使用するワードを登録し練習することで、\n
        従来のタイピングソフトより効率的かつ実践的にタイピング練習をすることができます。
        Reactで作成をしFirebaseへデプロイしています。`,
        tech:'React,TypeScript,Material-ui,Firebase Hosting,\r\nFirebase Cloud Functions,Firebase Cloud Firestore,Firebase Authentication'
    }
]
