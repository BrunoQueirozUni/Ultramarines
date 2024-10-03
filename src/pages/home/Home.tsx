import ultramarines from "../../../public/imgs/symbols/ultramarine.webp"
import imperialFist from "../../../public/imgs/symbols/imperial_fist.webp"
import salamanders from "../../../public/imgs/symbols/salamanders.png"
import ravenguard from "../../../public/imgs/symbols/ravenguard.png"
import whitescars from "../../../public/imgs/symbols/whitescars.webp"
import bloodangels from "../../../public/imgs/symbols/bloodangels.webp"
import spacewolves from "../../../public/imgs/symbols/spacewolves.png"
import darkangels from "../../../public/imgs/symbols/darkangels.png"

export function Home() {
  return (
    <>
      <main className="pt-[calc(80vh)]">
        <section className="w-full flex justify-center pt-20 text-black">
          <div className="text-pretty w-1/2">
            <h1 className="font-bold text-2xl mb-6">O que é um Space Marine?</h1>
            <p>Os Space Marines, ou Adeptus Astartes, são os guerreiros mais formidáveis do universo de Warhammer 40k. Criados pelo Imperador da Humanidade, eles são super-humanos, melhorados geneticamente para serem superiores em todos os aspectos em comparação aos humanos comuns.</p>
          </div>
          <div>
            <h2>Divisões dos Space Marines</h2>
            <div>
              <img src={ultramarines} alt="" className="w-[250px]" />
              <img src={imperialFist} alt="" className="w-[250px]" />
              <img src={salamanders} alt="" className="w-[250px]" />
              <img src={ravenguard} alt="" className="w-[250px]" />
              <img src={whitescars} alt="" className="w-[250px]" />
              <img src={bloodangels} alt="" className="w-[250px]" />
              <img src={spacewolves} alt="" className="w-[250px]" />
              <img src={darkangels} alt="" className="w-[250px]" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
