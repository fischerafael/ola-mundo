import { About } from "../../components/organisms/About";
import { Avatar } from "../../components/organisms/Avatar";
import { ExperienceEducationCard } from "../../components/organisms/ExperienceEducationCard";
import { Header } from "../../components/organisms/Header";

import { rafaelFischer as data } from "../../data/rafael-fischer";

export const Profile = () => (
    <div className="bg-black-900 text-white w-screen h-screen px-4">
        <header className="h-1/6 flex items-center justify-center">
            <Header />
        </header>

        <main className="h-5/6 overflow-y-auto flex flex-col items-center p-8 gap-8">
            <Avatar
                avatar={data.avatar.avatar}
                name={data.avatar.name}
                location={data.avatar.location}
                position={data.avatar.position}
            />

            <About about={data.about} />

            <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-12 p-8 hover:bg-black-700 cursor-pointer  rounded shadow-xl">
                <h2 className="font-medium">Experience</h2>
                {data.experience.map((expEd) => (
                    <ExperienceEducationCard key={expEd.id} item={expEd} />
                ))}
            </section>
        </main>
    </div>
);
