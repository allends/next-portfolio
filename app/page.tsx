import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Image } from '@assetstack/react'

const projectCards = [
    {
        title: "Blueberry: A backend framework",
        description: "Simple, modern, extensible, written in Rust"
    },
    {
        title: "ChapterLink",
        description: "An organization manager for the busy"
    },
    {
        title: "VoxArt",
        description: "Create beautiful presentations with just your voice"
    },
    {
        title: "AssetStack",
        description: "Manage your assets safely in the cloud"
    }
]

export default function Home() {
    return (
        <main className="flex flex-col flex-1 items-center justify-around p-24">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-center">
                    I am a software engineer based in nyc
                </h1>
                <p className="text-sm font-light text-center">
                    Here is a collection of my work.
                </p>
            </div>
            <Carousel
                className="w-3/4"
                opts={{
                    loop: true
                }}
            >
                <CarouselContent>
                    {
                        projectCards.map(projectCard => {
                            return (
                                <CarouselItem key={projectCard.title} className="md:basis-1 lg:basis-1/3">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{projectCard.title}</CardTitle>
                                            <CardDescription>{projectCard.description}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
        </main>
    )
}
