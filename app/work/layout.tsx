import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { getAllFiles } from '../api/projects/route'

const Layout = async ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) => {
    const projects = await getAllFiles()

    const pages = projects.map((project) => {
        return {
            title: project.title,
            description: project.metadata['description'],
        }
    })

    return (
        <div
            className="flex-1 mt-10 grid relative"
        >
            <div className="w-48 ml-5 absolute">
                <ScrollArea className="h-72 w-48 rounded-md border">
                    <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">
                            Projects
                        </h4>
                        {pages.map((page) => (
                            <>
                                <Link href={`/work/${encodeURI(page.title)}`}>
                                    <div key={page.title} className="text-md">
                                        {page.title}
                                    </div>
                                    <div className="flex flex-row gap-2 text-sm">
                                        {page.description}
                                    </div>
                                </Link>
                                <Separator className="my-2" />
                            </>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            <div className="flex-1 flex justify-center px-56">
                {children}
            </div>
        </div>
    )
}

export default Layout
