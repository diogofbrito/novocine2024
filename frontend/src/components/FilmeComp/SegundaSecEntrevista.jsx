import React from "react";
import { PortableText } from "@portabletext/react";
import { ImagemEntrevista } from "./ImagemEntrevista";
import { useLang } from "../LangProvider";

export function SegundaSecEntrevista({ film }) {
    const { lang } = useLang();

    const entrevista = lang === "PT" ? film.entrevista : film.entrevistaENG;

    return (
        <div className="my-14 ">
            <div className="flex justify-center ">
                <div className="w-2/4 font-regular text-xl">
                    <div className="pb-4 font-oblique text-base">
                        {film.autorEntrevista}
                    </div>
                    {entrevista && entrevista.length > 0 ? (
                        <PortableText
                            value={entrevista}
                            components={{ types: { image: ImagemEntrevista } }}
                        />
                    ) : (
                        <div className="text-center">
                            Nenhuma entrevista disponível
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
