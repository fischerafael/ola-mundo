interface Item {
    id: string;
    avatar: string;
    title: string;
    institution: string;
    from: string;
    to: string;
    location: string;
    description?: string[];
}

interface Props {
    item: Item;
}

export const ExperienceEducationCard = ({ item }: Props) => {
    const avatar =
        item.avatar ||
        "data:image/png;base64,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";
    return (
        <article className="flex gap-4 ">
            <img src={avatar} alt="" className="w-16 h-16 rounded-full" />
            <section className="flex flex-col gap-4">
                <section>
                    <h2 className="font-medium">{item.title}</h2>
                    <p className="text-xs max-w-screen-sm">
                        {item.institution}
                    </p>
                    <p className="text-xs max-w-screen-sm">
                        {item.from} - {item.to}
                    </p>
                </section>
                <ul className="text-xs flex flex-col gap-2 max-w-xl">
                    {item.description?.map((description) => (
                        <li key={description}>{description}</li>
                    ))}
                </ul>
            </section>
        </article>
    );
};
