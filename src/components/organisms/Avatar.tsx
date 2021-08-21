interface Props {
    avatar: string;
    name: string;
    position: string;
    location: string;
}

const avatarPlaceholder =
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

export const Avatar = ({
    avatar = avatarPlaceholder,
    name,
    position,
    location,
}: Props) => (
    <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-4 p-8 rounded shadow-xl hover:bg-black-700 cursor-pointer">
        <img
            src={avatar}
            alt={name}
            className="h-32 w-32 rounded-full border-4 border-green-400"
        />
        <section>
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-base font-medium">{position}</h2>
            <p className="text-xs">{location}</p>
        </section>
    </section>
);
