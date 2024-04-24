import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { getAllFiles } from './api/projects/utils'
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Centered } from './_components/Center'
import { playfairDisplay } from './layout'

const ProjectCardCarousel = async () => {
    const projects = await getAllFiles()

    const projectCards = projects.map((project) => {
        return {
            name: project.title,
            cardTitle: project.metadata['descriptiveTitle'],
            description: project.metadata['description'],
        }
    })

    return (
        <Centered>
            <Carousel
                className="px-20"
                opts={{
                    loop: true,
                }}
                id="#carousel"
            >
                <CarouselContent>
                    {projectCards.map((projectCard) => {
                        return (
                            <CarouselItem
                                key={projectCard.name}
                                className="md:basis-1 lg:basis-1/3"
                            >
                                <Link href={`/work/${projectCard.name}`}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                {projectCard.cardTitle}
                                            </CardTitle>
                                            <CardDescription>
                                                {projectCard.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
        </Centered>
    )
}

const AllenHero = () => {
    return (
        <Centered className="p-5">
            <div className="flex flex-col">
                <div className={`text-5xl text-left mb-20 mr-10 sm:mr-0 ${playfairDisplay.className}`}>Full Stack SWE crafting beautiful software</div>
                <a href="/work" className="text-3xl text-right">more <ChevronRightIcon className="inline size-8" /></a>
            </div>
        </Centered>
    )
}

const pages = [<AllenHero key="hero" />, <ProjectCardCarousel key="carousel" />]

export default async function Home() {
    return (
        <main className="h-screen w-screen">
            <AllenHero />
        </main>
    )
}
