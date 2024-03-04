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
import { getAllFiles } from './api/projects/route'

export default async function Home() {
    const projects = await getAllFiles()

    const projectCards = projects.map((project) => {
        return {
            name: project.title,
            cardTitle: project.metadata['descriptiveTitle'],
            description: project.metadata['description'],
        }
    })

    return (
        <main className="flex flex-col flex-1 items-center justify-center p-24 relative">
            <div className="mb-10 text-center">
                <div className="text-xl">
                    I am a Software Engineer based in New York.
                </div>
                <div className="text-md">
                    Check out some of my work below.
                </div>
            </div>
            <Carousel
                className="w-3/4"
                opts={{
                    loop: true,
                }}
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
        </main>
    )
}
