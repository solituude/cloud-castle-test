
import s from "./page.module.scss";
import {Header} from "@/app/components/header/Header";
import Image from "next/image";

export default function Home() {

    return (
        <div className={s.page}>
            <Header/>
            <main className={s.main}>
                <section className={s.start__section}>
                    <div className={s.infoContainer}>
                        <h1 className={s.h1}>Плотинка лесная отборная со вкусом подземного ручейка</h1>
                        <p className={s.text}>
                            Заводская плотина в Екатеринбурге была построена в 1723 году из уральской лиственницы, которая не гниет в воде, а со временем лишь каменеет и становится крепче. В создании плотинки принял деятельное участие российский военный инженер В. И. де Геннин.
                            <br/><br/>
                            С этого места началось всё строительство города. Одновременно стали возводить крепость, защищающую будущий завод от набегов башкир, на чьих землях он и строился.
                        </p>
                    </div>

                    <div className={s.mainIllustration}>
                        <div>
                            <Image src={'/main_illustration.svg'}
                                   alt={'main_illustration'}
                                   priority fill
                            />
                        </div>

                    </div>


                </section>
                <section id={"whatWaitingFor"} className={s.waitingFor__section}>
                    <h2 className={s.h2}>Что ждёт за платинкой</h2>
                    <div className={s.waitingForImg__container}>
                        <Image src={'/forestWaitingFor.png'} alt={'forestWaitingFor'} fill/>
                    </div>

                </section>

                <section id={"path"}>
                    <h2>В первый день вас ждет интересный маршрут</h2>
                </section>

                <section id={"bingo"}>
                    <h2>Открой все карточки <br/> и собери свое бинго</h2>
                </section>

                <section id={"FAQs"}>
                    <h2>Еще вопросы?</h2>
                </section>
            </main>
            <footer className={s.footer}>

            </footer>
        </div>
    );
}