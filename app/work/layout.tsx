import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const pages = [
    {
        id: '1234',
        title: 'ChapterLink',
        tags: ['next.js'],
    },
    {
        id: '1325',
        title: 'VoxArt',
        tags: ['solid.js', 'ai'],
    },
    {
        id: '1234',
        title: 'Blueberry',
        tags: ['rust'],
    },
]

const Layout = ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div className="flex-1 w-full mt-10 grid" style={{
            gridTemplateColumns: '300px 1fr 300px'
        }}>
            <div className="w-48 ml-5">
                <ScrollArea className="h-72 w-48 rounded-md border">
                    <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">
                            Projects
                        </h4>
                        {pages.map((page) => (
                            <>
                                <Link href={`/work/${encodeURI(page.title)}`}>
                                    <div key={page.title} className="text-sm">
                                        {page.title}
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        {
                                            page.tags.map(tag => (
                                                <Badge key={tag} variant="outline">{tag}</Badge>
                                            ))
                                        }
                                    </div>
                                </Link>
                                <Separator className="my-2" />
                            </>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            {children}
            <div className="w-48">
            </div>
        </div>
    )
}

export default Layout