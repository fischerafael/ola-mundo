import { Avatar } from "../../components/organisms/Avatar";
import { Header } from "../../components/organisms/Header";
import { rafaelFischer } from "../../data/rafael-fischer";

export const Profile = () => (
    <div className="bg-black-900 text-white w-screen h-screen px-4">
        <header className="h-1/6 flex items-center justify-center">
            <Header />
        </header>

        <main className="h-5/6 overflow-y-auto flex flex-col items-center py-8 gap-8">
            <Avatar
                avatar={rafaelFischer.avatar.avatar}
                name={rafaelFischer.avatar.name}
                location={rafaelFischer.avatar.location}
                position={rafaelFischer.avatar.position}
            />

            <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-4 p-8 rounded shadow-xl hover:bg-black-700 cursor-pointer">
                <h2 className="text-base font-medium">Sobre</h2>
                <p className="text-xs max-w-screen-sm leading-6">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </section>

            <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-4 p-8 rounded shadow-xl hover:bg-black-700 cursor-pointer">
                <h2 className="font-medium">Experiência</h2>
                <article className="flex gap-4">
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C4D0BAQFEHGBCFWI5bQ/company-logo_200_200/0/1568286886020?e=2159024400&v=beta&t=t-g41VjuoXG9ol18gdjyiwzlGeMLPk2C3iGL_RBLQiQ"
                        alt=""
                        className="w-16 h-16 rounded-full"
                    />
                    <section className="flex flex-col gap-4">
                        <section>
                            <h2 className="font-medium">
                                UX Developer: UX & UI Designer & Frontend
                                Developer
                            </h2>
                            <p className="text-xs max-w-screen-sm">Guildhawk</p>
                            <p className="text-xs max-w-screen-sm">
                                Jun 2021 - Presente
                            </p>
                        </section>
                        <ul className="text-xs flex flex-col gap-2">
                            <li>
                                Experience designing the experience and
                                interfaces of a big scale project management web
                                application (stakeholder engaments, user flows,
                                usability tests, prototyping, Maze, Figma).
                            </li>
                            <li>
                                Experience architecting and developing a big
                                scale project management web application (React,
                                NextJS, Typescrip).
                            </li>
                        </ul>
                    </section>
                </article>
            </section>
        </main>
    </div>
);
