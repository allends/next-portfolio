export const dynamic = 'force-dynamic'
import { getFileByName } from '@/app/api/projects/route'
import { Badge } from '@/components/ui/badge'
import { headers } from 'next/headers'
import Markdown from 'react-markdown'

type Project = {
    title: string
    content: string
    metadata: Record<string, string>
}

export default async function ProjectPage() {
    const head = headers()
    const pathname = head.get('next-url')
    const projectName = pathname?.split('/').at(-1)

    if (!projectName) {
        return <div>error</div>
    }

    const project = await getFileByName(projectName)

    return (
        <article className="prose mb-20 flex-1">
            <div className='flex flex-row gap-2 mb-2'>
            {
                project.metadata['tags'].split(',').map((tag: string) => {
                    return (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    )
                })
            }
            </div>
            <Markdown>{project.content}</Markdown>
        </article>
    )
}
