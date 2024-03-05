import { redirect } from "next/navigation"
import { getAllFiles } from "../api/projects/utils"

const WorkPage = async () => {
    const pages = await getAllFiles()

    if (pages.length === 0) {
        return <div>no projects</div>
    }

    if (pages[0].title) {
        redirect(`/work/${pages[0].title}`)
    }

    return (
        <div>
            <h2>Click on a project to learn more</h2>
        </div>
    )
}

export default WorkPage
