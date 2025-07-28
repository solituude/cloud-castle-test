import type {Metadata} from "next";

import "@/app/styles/globals.scss";


export const metadata: Metadata = {
    title: "Плотинка лесная",
    description: "Свердловская область",
    icons: {
        icon: "/logo.svg"
    },
    authors: {
        name: "Belousova Darya"
    },

    keywords: ["Екатеринбург", "Свердловская область"],


    openGraph: {
        title: "Плотинка лесная",
        description: "Красивый лесной массив в Свердловской области",
        url: "https://cloudcastle.ru/",
        siteName: "Природа Урала",
        images: [
            {
                url: "/main_illustration.svg",
                width: 600,
                height: 600,
                alt: "Фото лесной плотинки",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>
            {children}
            </body>
        </html>
    );
}
