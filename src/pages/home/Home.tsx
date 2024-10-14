import { SpaceMarineSlider } from "../../components/SpaceMarineSlider";

export function Home() {
  return (
    <>
      <main className="pt-[calc(80vh)] overflow-hidden">
        <section className="w-full flex flex-col items-center justify-center mt-48">
          <div className=" w-1/2">
            <h1 className="font-ancient text-3xl tracking-wider mb-6">
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
          <div className="mt-28 flex flex-col items-center">
            <h2 className="text-center font-ancient text-5xl tracking-wider mb-8">
              Divisões dos Space Marines
            </h2>
            <div className="w-[26%]">
              <SpaceMarineSlider />
            </div>
          </div>
          <div className="text-pretty w-1/2 mt-28">
            <h1 className="font-ancient text-4xl tracking-wider mb-6">Ultramarine</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione ad magni officia iusto, ex dolor deserunt placeat distinctio illum eveniet blanditiis, eum quis autem tempore quibusdam ipsum cum. Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam culpa ad voluptatum, est eius facilis nostrum quae unde dignissimos itaque, asperiores reiciendis iste ipsum quis placeat dicta inventore aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed iure quod, voluptas impedit quae eligendi ea nostrum sint deserunt architecto ipsum esse eaque optio, perferendis minima vero in fugit ipsa. </p>
            <div>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
