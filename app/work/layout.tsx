import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { getAllFiles } from '../api/projects/utils'
import { MobileArticleSelector } from '../_components/MobileNavbar'

const DesktopArticleSelector = (props: {
    pages: { title: string; description: string }[]
}) => {
    return (
        <div className="w-screen px-5 md:p-0 md:w-48 md:mx-5 mt-5 md:fixed hidden md:block">
            <ScrollArea className="h-72 w-full rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">
                        Projects
                    </h4>
                    {props.pages.map((page) => (
                        <div key={page.title}>
                            <Link href={`/work/${encodeURI(page.title)}`}>
                                <div key={page.title} className="text-md">
                                    {page.title}
                                </div>
                                <div className="flex flex-row gap-2 text-sm">
                                    {page.description}
                                </div>
                            </Link>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}


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
        <div className="max-w-screen w-screen flex-1 grid relative overflow-x-auto mt-16">
            <MobileArticleSelector pages={pages} />
            <DesktopArticleSelector pages={pages} />
            <div className="flex-1 flex md:mx-auto md:px-56">{children}</div>
        </div>
    )
}

export default Layout
