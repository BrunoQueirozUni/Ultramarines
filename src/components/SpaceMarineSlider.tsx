import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css';

// Imagens
import ultramarines from "../../public/imgs/symbols/ultramarine.webp";
import imperialFist from "../../public/imgs/symbols/imperial_fist.webp";
import salamanders from "../../public/imgs/symbols/salamanders.png";
import ravenguard from "../../public/imgs/symbols/ravenguard.png";
import whitescars from "../../public/imgs/symbols/whitescars.webp";
import bloodangels from "../../public/imgs/symbols/bloodangels.webp";
import spacewolves from "../../public/imgs/symbols/spacewolves.png";
import darkangels from "../../public/imgs/symbols/darkangels.png";
import irongands from "../../public/imgs/symbols/ironhands.png";

export function SpaceMarineSlider() {
  return (
    <>
      <Swiper effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={ultramarines} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Ultramarines</h3>
          <div>
            <p>
              Os Ultramarines são conhecidos por sua disciplina e habilidade
              tática. Eles são considerados a "espada de Terra", sendo a
              primeira linha de defesa do Império.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={imperialFist} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Imperial Fist</h3>
          <div>
            <p>
              Os Imperial Fists são conhecidos por sua habilidade defensiva.
              Eles são os mestres da fortificação e são conhecidos por sua
              resistência.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={salamanders} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Salamanders</h3>
          <div>
            <p>
              Os Salamanders são conhecidos por sua compaixão e habilidade em
              combate corpo a corpo. Eles são conhecidos por sua habilidade em
              forjar armas e armaduras.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={ravenguard} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Raven Guard</h3>
          <div>
            <p>
              Os Raven Guard são conhecidos por sua habilidade em combate
              furtivo. Eles são especialistas em emboscadas e ataques rápidos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={whitescars} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">White Scars</h3>
          <div>
            <p>
              Os White Scars são conhecidos por sua habilidade em combate
              rápido. Eles são especialistas em ataques rápidos e manobras de
              flanco.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={bloodangels} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Blood Angels</h3>
          <div>
            <p>
              Os Blood Angels são conhecidos por sua fúria em combate. Eles são
              conhecidos por sua habilidade em combate corpo a corpo e por sua
              fúria em combate.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={spacewolves} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Space Wolves</h3>
          <div>
            <p>
              Os Space Wolves são conhecidos por sua ferocidade em combate. Eles
              são especialistas em combate corpo a corpo e são conhecidos por
              sua fúria em combate.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={darkangels} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Dark Angels</h3>
          <div>
            <p>
              Os Dark Angels são conhecidos por sua habilidade em combate
              tático. Eles são conhecidos por sua habilidade em emboscadas e
              ataques rápidos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[420px] bg-white mx-8 p-5 text-center flex flex-col items-center gap-3">
          <img src={irongands} alt="" className="w-[120px] h-[100px]" />
          <h3 className="text-center font-bold underline">Iron Hands</h3>
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
