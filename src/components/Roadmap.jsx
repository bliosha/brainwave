import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What we�re working on" />

            <div className="gap-6 relative grid md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {
                    const status = item.status === "done" ? "Done" : "In progress";
                    return (
                        <div
                            className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                                }`}
                            key={item.id}>
                            <div className="p-8 bg-n-8 relative overflow-hidden rounded-[2.4375rem] xl:p-15">
                                <div className="top-0 left-0 absolute max-w-full">
                                    <img
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"/>
                                </div>
                                <div className="z-1 relative">
                                    <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                                        <Tagline>{item.date}</Tagline>
                                        <div className="px-4 py-1 bg-n-1 text-n-8 flex items-center rounded">
                                            <img
                                                className="mr-2.5"
                                                src={item.status === "done" ? check2 : loading1}
                                                width={16}
                                                height={16}
                                                alt={status}/>
                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>
                                    <div className="mb-10 -my-10 -mx-15">
                                        <img
                                            className="w-full"
                                            src={item.imageUrl}
                                            width={628}
                                            height={426}
                                            alt={item.title}/>
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <Gradient />
            </div>
            <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
                <Button href="/roadmap">Our roadmap</Button>
            </div>
        </div>
    </Section>
);

export default Roadmap;