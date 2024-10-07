import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

// Imagens
import ultramarines from "../../public/imgs/Warhammer Space Marines Symbols/ultramarines.png";
import imperialFist from "../../public/imgs/Warhammer Space Marines Symbols/imperial_fist.png";
import salamanders from "../../public/imgs/Warhammer Space Marines Symbols/salamanders.png";
import ravenguard from "../../public/imgs/Warhammer Space Marines Symbols/raven_guards.png";
import whitescars from "../../public/imgs/Warhammer Space Marines Symbols/white_scars.png";
import bloodangels from "../../public/imgs/Warhammer Space Marines Symbols/blood_angels.png";
import spacewolves from "../../public/imgs/Warhammer Space Marines Symbols/space_wolves.png";
import darkangels from "../../public/imgs/Warhammer Space Marines Symbols/dark_angels.png";
import irongands from "../../public/imgs/Warhammer Space Marines Symbols/iron_guard.png";

export function SpaceMarineSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-[500px] grid"
      >
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={ultramarines}
            alt="Ultramarines"
            className="w-[140px] h-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Ultramarines</h3>
          <div>
            <p>
              Os Ultramarines são conhecidos por sua disciplina e habilidade
              tática. Eles são considerados a "espada de Terra", sendo a
              primeira linha de defesa do Império.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={imperialFist}
            alt="Imperial Fist"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Imperial Fist</h3>
          <div>
            <p>
              Os Imperial Fists são conhecidos por sua habilidade defensiva.
              Eles são os mestres da fortificação e são conhecidos por sua
              resistência.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={salamanders}
            alt="Salamanders"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Salamanders</h3>
          <div>
            <p>
              Os Salamanders são conhecidos por sua compaixão e habilidade em
              combate corpo a corpo. Eles são conhecidos por sua habilidade em
              forjar armas e armaduras.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={ravenguard}
            alt="Raven Guard"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Raven Guard</h3>
          <div>
            <p>
              Os Raven Guard são conhecidos por sua habilidade em combate
              furtivo. Eles são especialistas em emboscadas e ataques rápidos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={whitescars}
            alt="White Scars"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">White Scars</h3>
          <div>
            <p>
              Os White Scars são conhecidos por sua habilidade em combate
              rápido. Eles são especialistas em ataques rápidos e manobras de
              flanco.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={bloodangels}
            alt="Blood Angels"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Blood Angels</h3>
          <div>
            <p>
              Os Blood Angels são conhecidos por sua fúria em combate. Eles são
              conhecidos por sua habilidade em combate corpo a corpo e por sua
              fúria em combate.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={spacewolves}
            alt="Space Wolves"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Space Wolves</h3>
          <div>
            <p>
              Os Space Wolves são conhecidos por sua ferocidade em combate. Eles
              são especialistas em combate corpo a corpo e são conhecidos por
              sua fúria em combate.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={darkangels}
            alt="Dark Angels"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Dark Angels</h3>
          <div>
            <p>
              Os Dark Angels são conhecidos por sua habilidade em combate
              tático. Eles são conhecidos por sua habilidade em emboscadas e
              ataques rápidos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[350px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3 self-center top-10">
          <img
            src={irongands}
            alt="Iron Hands"
            className="w-[140px] relative top-[-90px] z-20"
          />
          <h3 className="font-bold underline mt-[-90px] text-lg">Iron Hands</h3>
          <div>
            <p>
              Os Iron Hands são conhecidos por sua habilidade em combate
              mecanizado. Eles são especialistas em combate com veículos e são
              conhecidos por sua resistência.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
