import { readFile, readdir, stat } from "fs/promises";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const projectName = searchParams.get('projectName')

    if (!!projectName) {
        console.log('getting file: ', projectName)
        return getFileByName(projectName)
    }

    const projectPath = `${process.cwd()}/app/api/projectFiles`

    let files : string[] = []
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
        } catch {
            Response.error()
        }
    }

    return Response.json({ projects })
}

async function getFileByName(fileName: string) {
    const filePath = `${process.cwd()}/app/api/projectFiles/${fileName}.md`

    try {
        const file = await readFile(filePath, 'utf-8')
        return Response.json({
            title: fileName,
            contents: file
        })
    } catch (error) {
        console.error(error)
        return Response.error()
    }
}

// function loadProjectFile(fileName: string) {

// }

// function parseProjectFile(file: File) {

// }