import {IBingoCard, IMenuItem, IOrderStage, IRegularInfoCard} from "@/app/lib/types";
export const MENU_ITEMS: IMenuItem[] = [
    {title: "Что ждет", href: "#whatWaitingFor"},
    {title: "Маршрут", href: "#path"},
    {title: "Бинго", href: "#bingo"},
    {title: "FAQs", href: "#FAQs"},

];
export const ORDER_STAGE: IOrderStage[] = [
    { id: 0, icon: 'firstStageOrder.svg', title: 'Как получить заказ?'},
    { id: 1, icon: 'secondStageOrder.svg', title: 'Как оплатить заказ?'},
    { id: 2, icon: 'thirdStageOrder.svg', title: 'Как обменять заказ?' }
];

export const REGULAR_INFO: IRegularInfoCard[] = [
    {id: 0, title: "Физика", description: "Шокирующая правда о преломлении света"},
    {id: 1, title: "Литература", description: "О чем молчат картины: великие художники"},
    {id: 2, title: "Искусство", description: "Пушкин наше всё!"},
    {id: 3, title: "Математика", description: "Шокирующая правда о преломлении света"},
    {id: 4, title: "Химия", description: "О чем молчат картины: великие художники"},
    {id: 5, title: "История", description: "Пушкин наше всё!"}
];

export const BINGO_TERM: IBingoCard[] = [
    {
        term: "Физика",
        definition: "Фи́зика — область естествознания: наука о наиболее общих законах природы, о материи, её структуре, движении и правилах трансформации.",
        backgroundIcon: "/back_illustr_1.svg"
    },
    {
        term: "Литература",
        definition: "Литература — в широком смысле слова совокупность любых письменных текстов. Чаще всего под литературой понимают художественную литературу, то есть литературу как вид искусства.",
        backgroundIcon: "/back_illustr_2.svg"
    },
    {
        term: "Искусство",
        definition: "Иску́сство — одна из наиболее общих категорий эстетики, искусствознания и художественной практики.",
        backgroundIcon: "/back_illustr_3.svg"
    },
    {
        term: "Математика",
        definition: "Матема́тика — точная формальная наука, первоначально исследовавшая количественные отношения и пространственные формы.",
        backgroundIcon: "/back_illustr_4.svg"
    },
    {
        term: "Химия",
        definition: "Хи́мия — одна из важнейших и обширных областей естествознания, наука, изучающая вещества, также их состав и строение, их свойства, зависящие от состава и строения, их превращения, ведущие к изменению состава — химические реакции, а также законы и закономерности, которым эти превращения подчиняются.",
        backgroundIcon: "/back_illustr_5.svg"
    },
    {
        term: "История",
        definition: "Исто́рия, историческая наука — наука, научная (академическая) дисциплина, предметом изучения которой является человеческое прошлое.",
        backgroundIcon: "/back_illustr_6.svg"
    }
]