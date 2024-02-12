import Container from "../Container";
import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { PiTiktokLogoFill } from "react-icons/pi";

import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Categorias</h3>
            <Link href="#">Roperos</Link>
            <Link href="#">Veladores</Link>
            <Link href="#">Escritorios</Link>
            <Link href="#">Comodas</Link>
            <Link href="#">Sala</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Servicios</h3>
            <Link href="#">Contactanos</Link>
            <Link href="#">Preguntas Frecuentes</Link>
            <Link href="#">Politicas</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Nosotros</h3>
            <p className="mb-2">afdsaf holaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>
              &copy; {new Date().getFullYear()} Melatec. All Rights Reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Siguenos</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24}></MdFacebook>
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24}></AiFillTwitterCircle>
              </Link>
              <Link href="#">
                <AiFillInstagram size={24}></AiFillInstagram>
              </Link>
              <Link href="#">
                <PiTiktokLogoFill size={24}></PiTiktokLogoFill>
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
