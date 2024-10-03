//import * as Dialog from "@radix-ui/react-dialog";

// Icones
//import { Aperture, Atom, House, List, Newspaper, Sword } from "@phosphor-icons/react";
// Imagens
import ultra from "../../../public/imgs/ultra2.png";
import omega from "../../../public/imgs/omgas.png";
import spacemarine from "../../../public/imgs/spacemarine.webp";
import spacemarine2 from "../../../public/imgs/spacemarine2.png";
import dreadnought from "../../../public/imgs/dreadnought.png";

export function Header() {
  return (
    <>
      <header className="w-full h-[80%] flex flex-col items-center justify-center absolute bg-ultramarine-color overflow-hidden">
        <nav className="w-full flex justify-center items-center gap-2 mt-4 relative">
          <div className="w-1/3 pl-10">
            {/* Placeholder para possíveis conteúdos à esquerda */}
          </div>
          <div className="w-1/3 flex justify-center select-none"></div>
          <div className="w-1/3 flex justify-end">
            <ul className="flex pr-10 gap-2 font-bold">
              <li>
                <a href="#">Login</a>
              </li>
              <span>/</span>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
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
              src={spacemarine2}
              alt=""
              className="w-[500px] ml-64 absolute top-20 select-none opacity-60 z-[2]"
            />
            <img
              src={dreadnought}
              alt=""
              className="w-[580px] absolute top-32 right-96 select-none opacity-70 z-[3]"
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




                        <Dialog.Root>
              <Dialog.Trigger><List className="w-9 h-9" /></Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed w-screen h-screen top-[70px] bg-modalBackground " />
                <Dialog.Content className="h-full bg-gray-700 fixed top-[70px] flex flex-col items-center">
                  <Dialog.Title className="pt-6">
                    <img src={ultra} alt="" className="w-[160px]" />
                  </Dialog.Title>
                  <tr className="w-[80%] h-[1px] my-5 bg-gray-600" />
                  <div className="flex flex-col">
                    <ul className="flex flex-col w-full">
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <House className="w-6 h-6" />
                          Home
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Newspaper className="w-6 h-6" />
                          Noticias
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Atom className="w-6 h-6" />
                          Inovação
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Sword className="w-6 h-6" />
                          Batalhas
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Aperture className="w-6 h-6" />
                          Eventos
                        </a>
                      </li>
                    </ul>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
*/
}
