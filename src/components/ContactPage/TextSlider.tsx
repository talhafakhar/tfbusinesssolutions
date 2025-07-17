import React from 'react';
import {ArrowRight} from 'lucide-react';

const CTASection = () => {
    const InfiniteScrollRow = ({
                                   direction = 'left',
                                   className = ''
                               }: {
        direction?: 'left' | 'right';
        className?: string;
    }) => (
        <div className={`flex items-center gap-8 ${className}`}>
            <div
                className={`flex items-center gap-8 animate-scroll whitespace-nowrap`}
                style={{
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationDuration: '60s'
                }}
            >
                {Array.from({length: 8}).map((_, index) => (
                    <React.Fragment key={index}>
                        <div className="text-4xl  font-bold text-white">
                            Let&#39;s collaborate to make something amazing
                        </div>
                        <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true" role="img"
                                 className="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <radialGradient id="IconifyId17ecdb2904d178eab21356" cx="20.035" cy="81.51"
                                                    r="35.58"
                                                    gradientTransform="matrix(.9391 .2342 -.3058 1.3142 66.323 -30.301)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFB300" offset=".249"></stop>
                                        <stop stop-color="#FFCA28" offset=".683"></stop>
                                        <stop stop-color="#FFB300" offset="1"></stop>
                                    </radialGradient>
                                    <path
                                        d="M61.29 122.73c-24.23 0-36.01-12.86-36.01-39.31V61.14c0-.76.05-1.25.11-1.55c.7.44 1.95 1.56 2.91 2.42c3.31 2.96 7.84 7.02 13.07 7.02h.11c.18-.01 18.49-1.38 33.41-1.38c15.2 0 17.85 1.41 18.3 1.84c4.41 4.21 6.9 7.03 6.9 15.89c0 18.05-10.19 37.35-38.8 37.35z"
                                        fill="url(#IconifyId17ecdb2904d178eab21356)"></path>
                                    <path
                                        d="M26.78 62.67c.18.16.35.31.51.46c3.49 3.13 8.26 7.41 14.07 7.41c.08 0 .15 0 .23-.01c.18-.01 18.43-1.38 33.3-1.38c14.1 0 16.93 1.25 17.33 1.48c4.19 4.01 6.37 6.52 6.37 14.74c0 9.67-3 18.42-8.45 24.63c-6.54 7.45-16.24 11.23-28.85 11.23c-12.76 0-21.7-3.54-27.34-10.82c-4.76-6.15-7.17-15.22-7.17-26.98V62.67M25 57.9c-.79 0-1.22.9-1.22 3.24v22.28c0 22.44 8.29 40.81 37.51 40.81s40.3-19.71 40.3-38.86c0-9.2-2.66-12.47-7.36-16.97c-1.8-1.72-9.95-2.25-19.34-2.25c-15.16 0-33.53 1.39-33.53 1.39c-7.41-.01-13.78-9.64-16.36-9.64z"
                                        fill="#EDA600"></path>
                                    <radialGradient id="IconifyId17ecdb2904d178eab21357" cx="75.915" cy="20.049"
                                                    r="71.484" fx="88.617" fy="-50.297"
                                                    gradientTransform="matrix(0 1 -1.0519 0 97.004 -55.866)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFCA28" offset="0"></stop>
                                        <stop stop-color="#FFB300" offset="1"></stop>
                                    </radialGradient>
                                    <path
                                        d="M87 78.81c-1 0-.98-.03-1.41-.1c-3.25-.5-5.97-2.88-6.84-6.06c-.16-.59-.69-1.02-1.29-1.09c-.06-.01-.14-.01-.21-.01c-.53 0-1.04.28-1.31.75a8.265 8.265 0 0 1-5.34 3.98c-.62.14-1.26.22-1.89.22c-3.89 0-7.23-2.65-8.11-6.45L47.95 15.49c-1.04-4.48 1.76-8.96 6.23-10c.62-.14 1.26-.22 1.89-.22c3.89 0 7.23 2.65 8.11 6.45l12.36 49.01c.17.67.78 1.27 1.46 1.27h.07c.71 0 1.3-.69 1.42-1.4l7.25-44.91c.62-4.04 4.16-7.11 8.23-7.11c.42 0 .86.02 1.28.08c4.54.7 7.67 4.95 6.97 9.49l-8.11 53.59c-.64 4.03-4.11 7.07-8.11 7.07z"
                                        fill="url(#IconifyId17ecdb2904d178eab21357)"></path>
                                    <path
                                        d="M56.08 6.77c3.19 0 5.92 2.18 6.65 5.29c0 .02.01.04.01.06l12.35 48.84A2.994 2.994 0 0 0 78 63.22h.13c1.42-.06 2.6-1.11 2.83-2.52l7.26-44.87c.51-3.3 3.41-5.8 6.74-5.8c.35 0 .7.03 1.05.08c3.72.57 6.29 4.07 5.71 7.79l-8.24 53.59c-.51 3.3-3.41 5.8-6.74 5.8a6.819 6.819 0 0 1-6.6-5.05a2.998 2.998 0 0 0-2.51-2.19c-.13-.02-.26-.02-.38-.02c-1.06 0-2.06.57-2.6 1.51c-.96 1.67-2.51 2.83-4.37 3.26c-.51.12-1.03.18-1.55.18c-3.19 0-5.92-2.18-6.65-5.29L49.41 15.15c-.85-3.67 1.44-7.35 5.11-8.2c.52-.12 1.04-.18 1.56-.18m0-3c-.74 0-1.48.08-2.23.26c-5.29 1.23-8.58 6.51-7.36 11.8l12.65 54.55c1.05 4.54 5.1 7.61 9.57 7.61c.74 0 1.48-.08 2.23-.26c2.77-.64 4.99-2.4 6.3-4.69c.99 3.64 4.03 6.54 7.99 7.15c.51.08 1.01.12 1.51.12c4.77 0 8.96-3.48 9.71-8.34l8.24-53.59c.83-5.37-2.86-10.39-8.22-11.21c-.51-.08-1.01-.12-1.51-.12c-4.77 0-8.96 3.48-9.71 8.34L78 60.23L65.65 11.39a9.842 9.842 0 0 0-9.57-7.62z"
                                        fill="#EDA600"></path>
                                    <radialGradient id="IconifyId17ecdb2904d178eab21358" cx="-242.96" cy="-47.686"
                                                    r="21.476"
                                                    gradientTransform="matrix(.1042 .9917 -.6606 .0732 43.587 296.18)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFCA28" offset=".599"></stop>
                                        <stop stop-color="#FFB300" offset="1"></stop>
                                    </radialGradient>
                                    <path
                                        d="M51.71 79.16c-4.46 0-8.11-3.35-8.51-7.79l-1.47-16.44c-.2-2.28.49-4.5 1.96-6.25s3.53-2.83 5.8-3.04c.26-.02.52-.04.78-.04a8.51 8.51 0 0 1 8.51 7.79l1.47 16.44c.2 2.28-.49 4.5-1.96 6.25s-3.53 2.83-5.8 3.04c-.27.03-.53.04-.78.04z"
                                        fill="url(#IconifyId17ecdb2904d178eab21358)"></path>
                                    <path
                                        d="M50.26 47.1c3.61 0 6.69 2.82 7.02 6.43l1.47 16.44c.17 1.88-.4 3.71-1.61 5.15a6.967 6.967 0 0 1-4.79 2.5a7.018 7.018 0 0 1-7.66-6.4l-1.47-16.44c-.17-1.88.4-3.71 1.61-5.15a6.967 6.967 0 0 1 4.79-2.5c.21-.02.42-.03.64-.03m-.01-3c-.3 0-.6.01-.91.04c-5.53.5-9.62 5.38-9.12 10.91L41.7 71.5c.47 5.23 4.86 9.16 10.01 9.16c.3 0 .6-.01.91-.04c5.53-.5 9.62-5.38 9.12-10.91l-1.47-16.44c-.48-5.24-4.87-9.17-10.02-9.17z"
                                        fill="#EDA600"></path>
                                    <radialGradient id="IconifyId17ecdb2904d178eab21359" cx="-357.28" cy="-158.66"
                                                    r="18.083"
                                                    gradientTransform="matrix(.1962 .9415 -.6662 .1385 -3.086 418.51)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFCA28" offset=".599"></stop>
                                        <stop stop-color="#FFB300" offset="1"></stop>
                                    </radialGradient>
                                    <path
                                        d="M35.49 81.92c-3.99 0-7.48-2.84-8.3-6.74L24.88 64.2c-.47-2.22-.04-4.49 1.2-6.39s3.14-3.2 5.36-3.67c.58-.12 1.17-.18 1.76-.18c3.99 0 7.48 2.84 8.3 6.74l2.31 10.98c.47 2.22.04 4.49-1.2 6.39s-3.14 3.2-5.36 3.67c-.58.12-1.18.18-1.76.18z"
                                        fill="url(#IconifyId17ecdb2904d178eab21359)"></path>
                                    <path
                                        d="M33.2 55.46c3.28 0 6.15 2.34 6.83 5.55l2.31 10.98c.79 3.77-1.63 7.49-5.4 8.28c-.48.1-.97.15-1.45.15c-3.28 0-6.15-2.34-6.83-5.55l-2.31-10.98c-.79-3.77 1.63-7.49 5.4-8.28c.48-.1.96-.15 1.45-.15m0-3c-.68 0-1.37.07-2.07.22c-5.4 1.14-8.86 6.43-7.72 11.83l2.31 10.98c.99 4.71 5.14 7.93 9.77 7.93c.68 0 1.37-.07 2.07-.22c5.4-1.14 8.86-6.43 7.72-11.83l-2.31-10.98c-1-4.7-5.15-7.93-9.77-7.93z"
                                        fill="#EDA600"></path>
                                    <path
                                        d="M87.89 89.9c-3.71-1.09-7.79-1.48-11.37.26c-3.7 1.8-5.57 5.42-7.06 9.06c-.73 1.79 2.17 2.56 2.89.8c1.23-3 2.8-6.05 5.96-7.35c2.85-1.18 5.91-.72 8.78.13c1.86.54 2.65-2.35.8-2.9z"
                                        fill="#EDA600"></path>
                                    <defs>
                                        <path id="IconifyId17ecdb2904d178eab21360"
                                              d="M54.83 70.33c-7.26 0-8.46 7.56-6.72 11.88c1.73 4.32 6.89 7.33 11.49 6.91c16.48-1.51 20.62.94 22.77 5.4c2.96 6.16 6.49 6.07 10.12 6.07c6.51 0 5.54-9.56 5.76-18.61c.26-10.22-18.7-14.02-18.7-14.02s-21.25 2.37-24.72 2.37z"></path>
                                    </defs>
                                    <clipPath id="IconifyId17ecdb2904d178eab21361">
                                        <use></use>
                                    </clipPath>
                                    <g clip-path="url(#IconifyId17ecdb2904d178eab21361)">
                                        <radialGradient id="IconifyId17ecdb2904d178eab21362" cx="-220.71" cy="233.9"
                                                        r="44.262"
                                                        gradientTransform="matrix(.7956 0 0 .8691 241.45 -122.3)"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFCA28" offset="0"></stop>
                                            <stop stop-color="#FFB300" offset="1"></stop>
                                        </radialGradient>
                                        <path
                                            d="M93.38 103.53c-2.97-.05-6.94-4.02-9.66-9.66c-2.32-4.82-6.69-6.7-15.61-6.7c-2.5 0-5.32.15-8.65.45c-.24.02-.49.03-.73.03c-3.82 0-7.88-2.64-9.23-6.01c-.84-2.09-.91-5.35.58-7.55c1.02-1.5 2.62-2.27 4.75-2.27c3.34 0 22.08-2.07 24.63-2.36c6.85 1.63 23.91 7.24 24.62 14.6c.76 7.99-.25 13.58-3.01 16.62c-1.73 1.91-4.15 2.83-7.39 2.83l-.3.02z"
                                            fill="url(#IconifyId17ecdb2904d178eab21362)"></path>
                                        <path
                                            d="M79.36 70.99c1.55.39 6.59 1.73 11.66 3.89c7.07 3.02 11.29 6.42 11.57 9.33c.72 7.55-.16 12.75-2.63 15.47c-1.43 1.58-3.49 2.34-6.28 2.34h-.27c-2.03-.04-5.7-3.34-8.33-8.81c-2.58-5.36-7.49-7.54-16.96-7.54c-2.54 0-5.42.15-8.79.46c-.19.02-.39.03-.6.03c-3.25 0-6.7-2.23-7.84-5.07c-.67-1.68-.75-4.4.43-6.15c.73-1.08 1.88-1.61 3.51-1.61c3.34 0 20.73-1.91 24.53-2.34m.19-3.04s-21.25 2.38-24.72 2.38c-7.26 0-8.46 7.56-6.72 11.88c1.63 4.05 6.26 6.95 10.62 6.95c.29 0 .58-.01.87-.04c3.31-.3 6.12-.45 8.51-.45c9.55 0 12.54 2.28 14.25 5.85c2.96 6.16 7.36 10.45 10.98 10.51h.32c12.05 0 12.76-12.1 11.9-21.1c-.96-10.17-26.01-15.98-26.01-15.98z"
                                            fill="#EDA600"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

    return (
        <section className="bg-secondary border-b-2 py-10 overflow-hidden">
            <div className="cta-wrapper">
                <div className="space-y-6 md:space-y-8 lg:space-y-10">
                    <div className="infinite-slider overflow-hidden">
                        <InfiniteScrollRow direction="left"/>
                    </div>
                    <div className="infinite-slider overflow-hidden">
                        <InfiniteScrollRow direction="right"/>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12">
                    <button
                        className="group relative inline-flex items-center gap-4 px-4 py-2 m border-2 border-white rounded-full text-white hover:bg-white hover:text-secondary transition-all duration-500 font-button font-bold">
                        <span className="text-xl">Schedule a call</span>
                        <div className="relative overflow-hidden w-6 h-6 md:w-7 md:h-7">
                            <ArrowRight
                                className="arrow-show absolute inset-0 w-full h-full transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0"/>
                            <ArrowRight
                                className="arrow-hide absolute inset-0 w-full h-full transition-all duration-500 -translate-x-6 translate-y-6 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"/>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;