import { headers } from "next/headers"

type Project = {
    title: string,
    contents: string,
}

export default async function ProjectPage() {

    const head = headers()
    const pathname = head.get('next-url')
    const projectName = pathname?.split('/').at(-1)

    console.log(projectName)

    if (!projectName) {
        return (
            <div>error</div>
        )
    }

    const projectUrl = `http://localhost:3000/api/projects?` + new URLSearchParams({
        projectName
    })

    console.log(projectUrl)

    const projectResponse = await fetch(projectUrl)
    const project = await projectResponse.json() as Project

    return (
        <div>
            {
                project.contents
            }
        </div>
    )
}