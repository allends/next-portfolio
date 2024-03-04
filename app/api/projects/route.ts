import { readFile, readdir, stat } from 'fs/promises'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const projectName = searchParams.get('projectName')

    if (!!projectName) {
        return getFileResponseByName(projectName)
    }

    const projectPath = `${process.cwd()}/app/api/projectFiles`

    let files: string[] = []
    try {
        files = await readdir(projectPath)
    } catch (error) {
        console.error(error)
        Response.error()
    }
    const projects = []

    for (const file of files) {
        const filePath = `${projectPath}/${file}`

        try {
            const fileContents = await readFile(filePath, 'utf-8')

            projects.push({
                title: file,
                content: fileContents,
            })
        } catch (error) {
            console.error(error)
            Response.error()
        }
    }

    return Response.json({ projects })
}

export async function getAllFiles() {
    const projectPath = `${process.cwd()}/app/api/projectFiles`

    let files: string[] = []
    try {
        files = await readdir(projectPath)
    } catch (error) {
        console.error(error)
        Response.error()
    }
    const projects = []

    for (const file of files) {
        const filePath = `${projectPath}/${file}`

        try {
            const fileContents = await readFile(filePath, 'utf-8')

            const metadataMap = new Map<string, string>()

            const [metadata, contents] = fileContents.split('---')

            metadata.split('\n').forEach((line) => {
                if (!line) return
                const [key, value] = line.split(':')

                metadataMap.set(key.trim(), value.trim())
            })

            projects.push({
                title: file.split('.')[0],
                metadata: Object.fromEntries(metadataMap),
                content: contents,
            })
        } catch (error) {
            console.error(error)
            Response.error()
        }
    }

    return projects
}

export async function getFileResponseByName(fileName: string) {
    try {
        const file = await getFileByName(fileName)
        return Response.json(file)
    } catch (error) {
        console.error(error)
        return Response.error()
    }
}

export async function getFileByName(fileName: string) {
    const filePath = `${process.cwd()}/app/api/projectFiles/${fileName}.md`
    const file = await readFile(filePath, 'utf-8')

    const metadataMap = new Map<string, string>()

    const [metadata, content] = file.split('---')

    for (const line of metadata.split('\n')) {
        if (!line) continue
        const [key, value] = line.split(':')
        metadataMap.set(key.trim(), value.trim())
    }

    return {
        title: fileName,
        metadata: Object.fromEntries(metadataMap),
        content,
    }
}

// function loadProjectFile(fileName: string) {

// }

// function parseProjectFile(file: File) {

// }
