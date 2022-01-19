/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function RoadMap() {
    return (
        <div className='homepage'>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <section className='xl:pt-40 lg:pt-32 md:pt-24 pt-12 xl:pb-40 lg:pb-32 md:pb-60 pb-64 RoadMap-cta'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className="grid grid-cols-12 xl:gap-12 lg:gap-8 gap-4">
                        <div className="md:col-span-5 col-span-12">
                            <h1 className='service-cta-title xl:text-6xl lg:text-6xl md:text-4xl text-4xl font-bold text-white lg:mb-40 mb-8'>
                                Roadmap
                            </h1>

                            <div className='btn-alpha-wrap relative'>
                                <div className='btn-alpha-blur'>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7 col-span-12">
                            <div className='max-w-xl text-left w-full'>
                                <p className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-4 mb-6'>
                                    Apart from the games (which will be added as they are prepared for alpha/beta testing),
                                    our roadmap includes the basics that The Expanse will need to begin to grow.
                                    After these first two phases are complete, options will be presented and the future of the
                                    Expanse will be built as needed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='xl:pt-40 lg:pt-32 md:pt-24 pt-12'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='lg:mb-24 mb-8'>
                        <h2 className='xl:text-5xl lg:text-4xl text-3xl font-bold text-white text-center mb-2'>
                            PHASE 1
                        </h2>
                        <h4 className='max-w-2xl mx-auto xl:text-2xl text-xl text-center  text-purple font-bold te mb-10'>
                            First World & Tools
                        </h4>
                    </div>

                    <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse  mb-16 lg:gap-12 gap-8">
                        <div>
                            <div className='max-w-xl text-left w-full '>
                                <h4 className='xl:text-2xl text-xl  text-purple font-bold mb-6'>
                                    Transportation Mechanics
                                </h4>
                                <ul className='list-disc ml-4'>
                                    <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                                        Shuttles between buildings and worlds.
                                    </li>
                                    <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                                        Walk the surface of the Expanse and visit different cities.
                                    </li>
                                    <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                                        In-world, in-theme teleportation devices.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img className='lg:max-w-xl md:max-w-md w-full' src='/assets/images/transportationImg.png' alt='worldBanner' />
                        </div>
                    </div>

                    <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:gap-12 gap-4">
                        <div>
                            <img className='lg:max-w-xl md:max-w-md w-full' src='/assets/images/NFTImage.png' alt='NFTImage' />
                        </div>
                        <div>
                            <div className='max-w-xl text-left w-full '>
                                <h4 className='xl:text-2xl text-xl  text-purple font-bold mb-6'>
                                    TNFT Sharing Tools
                                </h4>
                                <ul className='list-disc ml-4'>
                                    <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                                        Place posters, 3D models, etc., in your personal space!
                                    </li>
                                    <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                                        Remote viewing tool - show your NFTs off anywhere you go.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse  mb-16 lg:gap-12 gap-8">
                        <div>
                            <div className='max-w-xl text-left w-full '>
                                <h4 className='xl:text-2xl text-xl text-purple font-bold mb-6'>
                                    Tools
                                </h4>
                                <ul className='list-disc ml-4'>
                                    <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                                        Content Creation Tool — Add assets to and edit your world in whatever way you see fit.
                                    </li>
                                    <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                                        Character Creation Lab — Upload your custom characters and ensure your animations are compatible with The Expanse!
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img className='lg:max-w-xl md:max-w-md w-full' src='/assets/images/transportationImg.png' alt='worldBanner' />
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}