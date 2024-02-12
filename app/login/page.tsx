"use client";

import Image from "next/image";
import { FormEvent } from 'react'

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { MdOutlineEmail } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";

function Page() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    const data = await response.json()
    console.log(data)
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            width={200}
            height={200}
            className="w-8 h-8 mr-2"
            src="https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c"
            alt="logo"
          ></Image>
          Melatec
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
              Inicia sesion
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div className="mt-10 mb-10">
                <Input
                  type="email"
                  label="Email"
                  isRequired
                  placeholder="tu@ejemplo.com"
                  labelPlacement="outside"
                  startContent={
                    <MdOutlineEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
              </div>
              <div>
                <Input
                  label="Contrasena"
                  placeholder="Ingresa tu contrasena"
                  labelPlacement="outside"
                  isRequired
                  startContent={
                    <IoKeyOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
              </div>

              <Button
                type="submit"
                disableRipple
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Aun no tienes cuenta?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Registrate
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
