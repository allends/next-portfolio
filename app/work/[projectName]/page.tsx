'use client'
import { Centered } from '@/app/_components/Center'
import { getFileByName } from '@/app/api/projects/utils'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

const CodeBlock = (props: any) => {
    console.log(props)
    return (
        <pre className="max-w-screen overflow-x-scroll">
            <code>{props.children}</code>
        </pre>
    )
}

export default function ProjectPage() {
    const pathname = usePathname()
    const [project, setProject] = useState<Awaited<
        ReturnType<typeof getFileByName>
    > | null>(null)
    const projectName = pathname.split('/').pop()

    useEffect(() => {
        let aborted = false

        const fetchProject = async () => {
            if (!projectName) {
                return
            }
            const project = await getFileByName(projectName as string)
            if (aborted) return
            setProject(project)
        }

        fetchProject()

        return () => {
            aborted = true
        }
    }, [projectName])

    if (!project) {
        return (
            <Centered>
                <Progress />
            </Centered>
        )
    }

    return (
        <article className="prose max-w-[100vw] mt-5 px-5 md:px-0 flex-1 break-words text-wrap">
            <div className="flex flex-row gap-2 mb-2">
                {project.metadata['tags'].split(',').map((tag: string) => {
                    return (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    )
                })}
            </div>
            <Markdown components={{
                a: (props) => {
                    const { node, ...rest } = props
                    return (
                        <a {...rest} target='_blank' />
                    )
                }
            }}>
                {project.content}
            </Markdown>
        </article>
    )
}
