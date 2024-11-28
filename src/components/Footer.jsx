import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="gap-10 container flex items-center justify-center sm:justify-between max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    � {new Date().getFullYear()}. All rights reserved.
                </p>
                <ul className="gap-5 flex flex-wrap">
                    {socials.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            className="w-10 h-10 bg-n-7 flex items-center justify-center rounded-full transition-colors hover:bg-n-6">
                            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;