export const About = ({ about }) => (
    <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-4 p-8 rounded shadow-xl hover:bg-black-700 cursor-pointer">
        <h2 className="text-base font-medium">About</h2>
        <p className="text-xs max-w-screen-sm leading-6">{about}</p>
    </section>
);
