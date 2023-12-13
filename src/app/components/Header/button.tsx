import React from 'react';
import Image from 'next/image'

export interface ButtonProps {
    text: string;
    imageSrc: string;
}

const Button: React.FC<ButtonProps> = ({ text, imageSrc}) => {
    return (
        <button className='items-center flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-black font-semibold bg-slate-300 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'>
            <Image src={imageSrc} alt={text} height={24} width={24}/>
            <span>{text}</span>
        </button>
    );
};

export default Button;
