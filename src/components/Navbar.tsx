import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Transition } from "@headlessui/react";
import Brand from '../assets/brand.svg'
import { config } from '../../config';

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header
            id="page-header"
            className="relative items-center py-8"
        >
            <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 xl:max-w-7xl">
                <div className="flex items-center">
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-xl font-normal tracking-wide text-gray-900 hover:text-primary dark:text-gray-100"
                    >
                        {/* @ts-expect-error */}
                        <Brand className="d-inline-block align-top" height="30" alt="Logo {{config.brand}}" />
                        <span>{config.brand}</span>
                    </a>
                </div>

                <div className="flex items-center">
                    <nav className="hidden gap-4 xl:gap-6 lg:flex">
                        {config.navbar.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="inline-flex items-center p-2 transition-all text-gray-900 hover:text-primary dark:text-white/70"
                            >
                                <FontAwesomeIcon className="size-5! fill-inherit" icon={item.icon} />
                            </a>
                        ))}
                    </nav>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileNavOpen(true)}
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:active:border-gray-700"
                            aria-label="Mobile Navigation Toggle"
                        >
                            <svg
                                className="hi-mini hi-bars-3 inline-block size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={mobileNavOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"

                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    onClick={() => setMobileNavOpen(false)}
                    className="fixed inset-0 w-full h-full bg-gray-900/20 backdrop-blur-xs will-change-auto lg:hidden dark:bg-gray-900/80"
                />
            </Transition>

            <Transition
                show={mobileNavOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-50 scale-125"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-50 scale-75"
            >
                <nav
                    id="tkMobileNav"
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[40%] max-h-[90%] margin-x-auto flex flex-col overflow-hidden bg-white/95 shadow-lg rounded-lg lg:hidden dark:bg-gray-800/95"
                    tabIndex={-1}
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-xl font-normal tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                            >
                                {/* @ts-expect-error */}
                                <Brand className="d-inline-block align-top " height="30" alt="Logo {{config.brand}}" />
                                <span>{config.brand}</span>
                            </a>
                        </div>

                        {/* Close Mobile Navigation */}
                        <button
                            onClick={() => setMobileNavOpen(false)}
                            type="button"
                            className="ml-4 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:active:border-gray-700"
                        >
                            <svg
                                className="hi-mini hi-x-mark -mx-0.5 inline-block size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                        {/* END Close Mobile Navigation */}
                    </div>
                    <div className="h-px bg-gray-200/75 dark:bg-gray-700/75" />
                    <div className="flex px-6 py-5 justify-center overflow-y-scroll">
                        <nav className="flex flex-col gap-2">
                            {config.navbar.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="inline-flex items-center p-2 transition-color text-sm font-normal text-gray-900 hover:text-primary dark:text-white/70"
                                >
                                    <FontAwesomeIcon className="size-5 fill-inherit" icon={item.icon} />
                                    <p className="ml-3">{item.name}</p>
                                </a>
                            ))}
                        </nav>
                    </div>
                </nav>
            </Transition>
        </header >
    );
}
