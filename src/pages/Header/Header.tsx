import * as Dialog from "@radix-ui/react-dialog";

// Icones
import { List } from "@phosphor-icons/react";
// Imagens
import ultra from "../../../public/imgs/ultra2.png";
import warhammer from "../../../public/imgs/warhammer.png";
import omega from "../../../public/imgs/omega.png";
import spacemarine from "../../../public/imgs/spacemarine.webp";
import spacemarine2 from "../../../public/imgs/spacemarine2.png";
import dreadnought from "../../../public/imgs/dreadnought.png";

// Adeptus Astartes
import ultramarines from "../../../public/imgs/Warhammer Chapters Symbols/ultramar.png";
import imperialFist from "../../../public/imgs/Warhammer Chapters Symbols/imperial_fist.png";
import salamanders from "../../../public/imgs/Warhammer Chapters Symbols/salamanders.png";
import ravenguard from "../../../public/imgs/Warhammer Chapters Symbols/raven_guard.png";
import whitescars from "../../../public/imgs/Warhammer Chapters Symbols/white_scars.png";
import bloodangels from "../../../public/imgs/Warhammer Chapters Symbols/blood_angels.png";
import spacewolves from "../../../public/imgs/Warhammer Chapters Symbols/space_wolves.png";
import darkangels from "../../../public/imgs/Warhammer Chapters Symbols/dark_angels.png";
import irongands from "../../../public/imgs/Warhammer Chapters Symbols/iron_hands.png";

export function Header() {
  return (
    <>
      <header className="w-full h-[80%] flex flex-col items-center justify-center absolute">
        <nav className="w-full flex items-center mt-2 pl-2 relative">
          <div>
            <Dialog.Root>
              <Dialog.Trigger>
                <List className="w-9 h-9 z-30" />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed w-screen h-screen top-0 bg-modalBackground z-10" />
                <Dialog.Content className="h-full bg-gray-700 fixed top-0 flex flex-col items-center z-20">
                  <Dialog.Title className="pt-6">
                    <img src={warhammer} alt="" className="w-[200px]" />
                  </Dialog.Title>
                  <tr className="w-[80%] h-[1px] my-5 bg-gray-600" />
                  <div className="flex flex-col">
                    <ul className="flex flex-col w-full">
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={ultramarines} className="w-6 h-6" />
                          Ultramarines
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={imperialFist} className="w-6 h-6" />
                          Imperial Fist
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={salamanders} className="w-6 h-6" />
                          Salamanders
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={ravenguard} className="w-6 h-6" />
                          Raven Guard
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={whitescars} className="w-6 h-6" />
                          White Scars
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={bloodangels} className="w-6 h-6" />
                          Blood Angels
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={spacewolves} className="w-6 h-6" />
                          Space Wolves
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={darkangels} className="w-6 h-6" />
                          Dark Angels
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a
                          className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8"
                          href="#"
                        >
                          <img src={irongands} className="w-6 h-6" />
                          Iron Gands
                        </a>
                      </li>
                    </ul>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
        <div className="flex w-full h-full ">
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="w-full h-full flex justify-center items-center relative">
              <img src={ultra} alt="" className="w-[535px] absolute" />
              <img
                src={omega}
                alt=""
                className="w-[720px] ml-20 opacity-10 absolute top-2 select-none z-[1]"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-start items-center relative">
            <img
              src={dreadnought}
              alt=""
              className="w-[580px] absolute top-32 right-96 select-none opacity-70 z-[3]"
            />
            <img
              src={spacemarine2}
              alt=""
              className="w-[500px] ml-64 absolute top-20 select-none opacity-60 z-[2]"
            />
            <img
              src={spacemarine}
              alt=""
              className="w-[320px] absolute top-20 left-36 select-none opacity-90 z-[4]"
            />
          </div>
        </div>
      </header>
    </>
  );
}

{
  /* 

<Sidebar className="">
               <Menu>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Noticias</MenuItem>
                  <MenuItem>Inovação</MenuItem>
                  <MenuItem>Batalhas</MenuItem>
                  <MenuItem>Eventos</MenuItem>
                  <SubMenu label="More" title="Mais">
                     <MenuItem>Negócios</MenuItem>
                     <MenuItem>Teorias</MenuItem>
                     <MenuItem>Imperium</MenuItem>
                  </SubMenu>
                  <MenuItem>Contacts</MenuItem>
               </Menu>
            </Sidebar>
*/
}
