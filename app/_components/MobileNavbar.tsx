'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { BlogPost } from '@/db/schema/blogPost'

export const MobileArticleSelector = (props: {
    pages: BlogPost[]
}) => {
    return (
        <div className='mx-5 mt-5 z-0 md:hidden'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent style={{
                            width: 'calc(100vw - 2.5rem)',
                            padding: '0 1rem',
                        }}>
                            {props.pages.map((page) => (
                                <NavigationMenuLink
                                    key={page.title}
                                    href={`/work/${encodeURI(`${page.id}`)}`}
                                    className="p-5"
                                >
                                    <div key={page.title} className="text-md">
                                        {page.title}
                                    </div>
                                    <div className="flex flex-row gap-2 text-sm">
                                        {page.description}
                                    </div>
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
