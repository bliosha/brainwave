﻿import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>
                    <ul className="mb-10 max-w-[22rem] md:mb-14">
                        {collabContent.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="check" />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 text-n-4 mt-3">{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button>Try it now</Button>
                </div>
                <div className="mt-4 lg:ml-auto xl:w-[38rem]">
                    <p className="body-2 text-n-4 mb-8 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>
                    <div className="border-n-6 -translate-x-1/2 relative left-1/2 flex aspect-square w-[22rem] rounded-full border md:scale-100 scale:75">
                        <div className="border-n-6 w-60 m-auto flex aspect-square rounded-full border">
                            <div className="bg-conic-gradient m-auto aspect-square w-[6rem] rounded-full p-[0.2rem]">
                                <div className="bg-n-8 flex h-full w-full items-center justify-center rounded-full">
                                    <img
                                        src={brainwaveSymbol}
                                        width={48}
                                        height={48}
                                        alt="brainwave"/>
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={app.id}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                                        }`}>
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                                            }`}>
                                        <img
                                            className="m-auto"
                                            width={app.width}
                                            height={app.height}
                                            alt={app.title}
                                            src={app.icon}/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve />
                        <RightCurve />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;