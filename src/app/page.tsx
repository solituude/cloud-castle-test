import Image from "next/image";

import {
    Header,
    OrderCard,
    FlipCard,
    RegularInfoCard,
    Dropdown
} from "@/app/components";

import {
    BINGO_TERM,
    ORDER_STAGE,
    REGULAR_INFO
} from "@/app/lib/constants";

import s from "./styles/page.module.scss";

export default function Home() {
    return (
        <div className={s.page}>
            <div id={"begin"}/>
            <Header/>
            <main className={s.main}>
                <section id={"start"} className={s.start__section}>
                    <div className={s.mainIllustration}>
                        <div>
                            <Image src={'/main_illustration.svg'}
                                   alt={'main_illustration'}
                                   priority fill/>
                        </div>
                    </div>
                    <div className={s.infoContainer}>
                        <h1 className={s.h1}>Плотинка лесная отборная со вкусом подземного ручейка</h1>
                        <p className={"text"}>
                            Заводская плотина в Екатеринбурге была построена в 1723 году из уральской лиственницы,
                            которая не гниет в воде, а со временем лишь каменеет и становится крепче. В создании
                            плотинки принял деятельное участие российский военный инженер В. И. де Геннин.
                            <br/><br/>
                            С этого места началось всё строительство города. Одновременно стали возводить крепость,
                            защищающую будущий завод от набегов башкир, на чьих землях он и строился.
                        </p>
                    </div>


                </section>
                <section id={"whatWaitingFor"} className={s.waitingFor__section}>
                    <h2 className={"h2"}>Что ждёт за платинкой</h2>
                    <div className={s.waitingForImg__container}>
                        <Image src={'/forestWaitingFor.png'} alt={'forestWaitingFor'} fill/>
                    </div>
                    <h3 className={"h3"}>
                        Межгалактические порты и бесконечные просторы вселенной
                    </h3>

                </section>

                <section id={"path"} className={s.path__section}>
                    <div className={s.pathTitle}>
                        <h2 className={"h2"}>В первый день вас ждет интересный маршрут</h2>
                        <h3 className={"h3"}>
                            Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург, так
                            прилежащие к нему районы Свердловской области.
                        </h3>
                    </div>
                    <div className={s.cards__container}>
                        <div className={s.orderCards}>
                            {
                                ORDER_STAGE.map(stage => (
                                    <OrderCard key={stage.id} id={stage.id} icon={stage.icon} title={stage.title}/>
                                ))
                            }
                        </div>

                        <div className={s.regularCards}>
                            {REGULAR_INFO.map(card => <RegularInfoCard id={card.id} key={card.id}
                                                                       title={card.title}
                                                                       description={card.description}/>)}
                        </div>
                    </div>
                </section>

                <section id={"bingo"} className={s.bingo__section}>
                    <h2 className={"h2"}>Открой все карточки <br/> и собери свое бинго</h2>

                    <div className={s.bingoCards}>
                        {
                            BINGO_TERM.map(card => (
                                <FlipCard key={card.backgroundIcon} term={card.term} definition={card.definition}
                                          backgroundIcon={card.backgroundIcon}/>
                            ))
                        }
                    </div>
                </section>

                <section id={"FAQs"} className={s.faqs__section}>
                    <h2 className={"h2"}>Еще вопросы?</h2>

                    <div className={s.question__dropdowns}>
                        <Dropdown key={'dropdown-q-1'}/>
                        <Dropdown key={'dropdown-q-2'}/>
                        <Dropdown key={'dropdown-q-3'}/>
                    </div>
                </section>
            </main>
            <footer className={s.footer}>
                <span className={s.footer__c}>© 2024  CLOUD CASTLE</span>
            </footer>
        </div>
    );
}