import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import mm from '../assets/myanmar.png'
import us from '../assets/united-states.png'
import logo from "../assets/detlogo.png";
export const LanguagePicker = () => {
    const { t, i18n} = useTranslation();
    console.log(i18n.language)
    i18n.language == "en"?console.log(i18n.store.data.en.translation.HOME.CARD):console.log(i18n.store.data.mm.translation.HOME.CARD)


    const data = [
        {
            name: "English",
            language: "en",
            img: us
        },
        {
            name: "Myanmar",
            language: "mm",
            img: mm
        }
    ]
    const [visible, setVisible] = useState(false)
    // console.log(visible)
    return (
        <div className="ms-5 flex ">
            <button onClick={() => setVisible((pre)=>!pre)}>
                <div className="flex gap-3 p-4 py-3 border border-text text-text rounded-lg">
                    <img src={i18n.language == "en"?us: mm} className="h-6" alt="err"/>
                    Language
                </div>
            </button>
            {visible &&<div className="absolute top-20 w-[150px] flex flex-col border border-text overflow-hidden rounded-md">
                    {
                        data.map((value) => (
                            <button className="bg-darkBg hover:bg-gray-700  duration-100"
                                    onClick={() => {
                                        i18n.changeLanguage(value.language)
                                            setVisible(false)
                                    }}>
                                <div className="flex gap-3 text-text p-4 py-3">
                                    <img src={value.img} className="h-6" alt="err"/>
                                    {value.name}
                                </div>
                            </button>
                        ))
                    }
            </div>}

        </div>

    )
}
