export const dynamic = 'force-dynamic'
import { getFileByName } from '@/app/api/projects/route'
import { headers } from 'next/headers'

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

    console.log(projectName)

    const project = await getFileByName(projectName)

    return <div className=''>{project.content}</div>
}
