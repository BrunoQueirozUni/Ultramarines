import { SpaceMarineSlider } from "../../components/SpaceMarineSlider";

export function Home() {
  return (
    <>
      <main className="pt-[calc(80vh)] overflow-hidden">
        <section className="w-full flex flex-col items-center justify-center mt-48">
          <div className="text-pretty w-1/2">
            <h1 className="font-bold text-2xl mb-6">
              O que é um Space Marine?
            </h1>
            <p>
              Os Space Marines, ou Adeptus Astartes, são os guerreiros mais
              formidáveis do universo de Warhammer 40k. Criados pelo Imperador
              da Humanidade, eles são super-humanos, melhorados geneticamente
              para serem superiores em todos os aspectos em comparação aos
              humanos comuns.
            </p>
          </div>
          <div className="mt-20 flex flex-col items-center">
            <h2 className="text-center font-bold text-xl underline mb-8">
              Divisões dos Space Marines
            </h2>
            <div className="w-[26%]">
              <SpaceMarineSlider />
            </div>
          </div>
          <div>
            <h1>Ultramarine</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione ad magni officia iusto, ex dolor deserunt placeat distinctio illum eveniet blanditiis, eum quis autem tempore quibusdam ipsum cum. Eum. </p>
            <div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
