import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { MobileArticleSelector } from '../_components/MobileNavbar'
import { PostService } from '@/db/service/postService'
import { Post } from '@/db/schema/post'

const DesktopArticleSelector = (props: {
    pages: Post[]
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
                            <Link href={`/work/${encodeURI(`${page.id}`)}`}>
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
    const postsIndex = await PostService.getPostsIndex()
    const allPosts = await PostService.getPosts()

    return (
        <div className="max-w-screen w-screen flex-1 grid relative overflow-x-auto mt-16">
            <MobileArticleSelector pages={allPosts} />
            <DesktopArticleSelector pages={allPosts} />
            <div className="flex-1 flex md:mx-auto md:px-56">{children}</div>
        </div>
    )
}

export default Layout
