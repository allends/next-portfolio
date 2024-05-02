import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Centered } from './_components/Center'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const AllenHero = () => {
    return (
        <Centered className="p-5">
            <div className="flex flex-col">
                <div
                    className={`text-5xl text-left mb-20 mr-10 sm:mr-0 ${playfairDisplay.className}`}
                >
                    Full Stack SWE crafting beautiful software
                </div>
                <div className="text-right animate-bounce">
                    <a href="/work" className="text-3xl">
                        more <ChevronRightIcon className="inline size-8" />
                    </a>
                </div>
            </div>
        </Centered>
    )
}

export default async function Home() {
    const numRaindrops = 100
    return (
        <main className="h-screen w-screen">
            <AllenHero />
        </main>
    )
}
