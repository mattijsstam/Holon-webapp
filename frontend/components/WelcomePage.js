import React from 'react';
import Link from 'next/link';

import HolonButton from './Buttons/HolonButton';
import Image from 'next/image';

import zenmoLogo from '../public/media/zenmo_logo.png';
import tnoLogo from '../public/media/tno_logo.png';
import WBLogo from '../public/media/WB_logo.png';
import quintelLogo from '../public/media/quintel_logo.png';

export default function WelcomePage() {
    return (
        <div className="flex-col items-start">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-6xl font-semibold underline decoration-holon-gold-200 decoration-[16px] underline-offset-[-2px]">Welkom!</h1>
                <p className="mt-8 text-lg">HOLON en de kunst van het Loslaten</p>
            </div>
            <div className="mt-4 flex justify-center">
                <div className="m-8 w-1/3">
                    <h2 className="text-6xl underline decoration-holon-gold-200 decoration-[16px] underline-offset-8">Energietransitie</h2>
                    <p className="my-8 w-4/5">We hebben nu een centraal gestuurd energiesysteem. Dat is aan het veranderen. Hoe ziet het energiesysteem van de toekomst eruit?</p>
                    <Link href="#introVideo"><HolonButton variant="gold">Vertel me meer!</HolonButton></Link>
                </div>
                <div className="m-8 w-1/3">
                    <h2 className="text-6xl underline decoration-holon-slated-blue-300 decoration-[16px] underline-offset-8">Russisch gas</h2>
                    <p className="my-8 w-4/5">We willen snel een alternatief voor aardgas uit Rusland. Welke mogelijkheden zijn er binnen Europa en wat is de rol van Nederland?</p>
                    <a href="https://holon-gas.netlify.app/" target="_blank" rel="noreferrer"><HolonButton variant="darkblue">Naar de tool</HolonButton></a>
                </div>
            </div>
            <div className="mx-24 my-16 h-11 flex justify-between">
                <Image alt="Logo Zenmo" src={zenmoLogo} ></Image>
                <Image alt="Logo TNO" src={tnoLogo} ></Image>
                <Image alt="Logo Witteveen+Bos" src={WBLogo} ></Image>
                <Image alt="Logo Quintel" src={quintelLogo} ></Image>
            </div>
        </div>
    )
}
