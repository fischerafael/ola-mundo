export const Profile = () => {
  return (
    <div className="bg-black-900 text-white w-screen h-screen px-4">
      <header className="h-1/6 flex items-center justify-center">
        <section className="max-w-screen-md w-full flex justify-between">
          <p className="text-base">
            <span className="font-bold">ux</span>developer
          </p>
        </section>
      </header>

      <main className="h-5/6 overflow-y-auto flex flex-col items-center py-8 gap-8">
        <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-1 p-8 rounded shadow-xl hover:bg-black-700 cursor-pointer">
          <img
            src="https://avatars.githubusercontent.com/u/47259718?v=4"
            alt=""
            className="h-32 w-32 rounded-full border-4 border-green-400"
          />
          <h1 className="text-3xl font-bold">Rafael Fischer</h1>
          <h2 className="text-base font-medium">
            Frontend Developer & UX/UI Designer
          </h2>
          <p className="text-xs">Curitiba, Paraná, Brazil</p>
        </section>

        <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-2 p-8 rounded shadow-xl hover:bg-black-700 cursor-pointer">
          <h2 className="text-base font-medium">Sobre</h2>
          <p className="text-xs max-w-screen-sm leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </section>

        <section className="max-w-screen-md w-full flex flex-col bg-black-800 gap-2 p-8 rounded shadow-xl hover:bg-black-700 cursor-pointer">
          <h2 className="text-base font-medium">Sobre</h2>
          <p className="text-xs max-w-screen-sm leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </section>
      </main>
    </div>
  );
};
