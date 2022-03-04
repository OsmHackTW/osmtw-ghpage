/* eslint-disable import/no-named-default */
import React, { useState } from "react";
import { default as NextLink } from "next/link";

const logo = "/assets/images/logo.png";

// common components 共通元件
const Link = ({ href, children, ...props }) => (
    <NextLink href={href}>
        <a {...props}>
            {children}
        </a>
    </NextLink>
)

const ExtLinkIcon = () => (
    <svg className="inline-block w-4 xl:w-5 m-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
)

const EnIcon = () => (<span className="text-xs text-slate-400">(英語)</span>);

const OsmtwGuideTitle = () => (
    <h1 className="flex flex-grow-0 place-items-center ">
        <span className="sr-only">入門指南</span>
        <span className="block h-10 w-10"><img src={logo} alt="OSMTW 開放街圖台灣" aria-label="開放街圖台灣LOGO" /></span>
        <span className="px-4 text-xl font-semibold text-fern-green-500 inlne">入門指南</span>
    </h1>
)

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="shadow-md border rounded my-4">
            <button type="button" className="flex w-full justify-between p-4 leading-normal duration-700" onClick={() => setIsActive(!isActive)}>
                <div className="block-inline">{title}</div>
                <div className="text-lg block-inline">{isActive ? "-" : "+"}</div>
            </button>
            {isActive ? (
                <div className="overflow-hidden border-l-2 bg-slate-50 border-indigo-500 leading-normal">
                    <div className="p-5">{content}</div>
                </div>
            ) : null}
        </div>

    );
}

const Pre = ({ content }) => <span className="font-mono bg-indigo-50 mx-0.5">{content}</span>

export {
    ExtLinkIcon, EnIcon, OsmtwGuideTitle, Accordion, Pre, Link
}