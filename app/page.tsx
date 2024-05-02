import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Centered } from './_components/Center'
import { Playfair_Display } from 'next/font/google'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
            <Centered className="mx-5 md:w-2/3 md:mx-auto break-words p-1">
                <div className="flex flex-row gap-2 items-center justify-start w-fit mr-auto mb-2">
                    <div className='text-xl'>{`I'm Allen`}</div>
                    <Badge className="bg-purple-500">back end</Badge>
                    <Badge className="bg-teal-500">front end</Badge>
                    <Badge className="bg-sky-500">dev ops</Badge>
                </div>
                <div className="text-5xl leading-tight md:leading-snug md:mb-5 text-wrap">
                    Crafting beautiful software to solve <Badge className="text-5xl">real-world</Badge> problems
                </div>
                <Link className='ml-auto' href="/work">
                    <Button className="bg-transparent active:bg-slate-100 hover:bg-slate-100 text-slate-700 shadow-none outline outline-slate-700">more</Button>
                </Link>
            </Centered>
        </main>
    )
}
