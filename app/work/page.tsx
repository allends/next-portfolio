import { redirect } from "next/navigation"
import { getAllPosts } from "../api/blog/service"

const WorkPage = async () => {
    const pages = await getAllPosts()

    if (pages.length === 0) {
        return <div>no projects</div>
    }

    if (pages[0].title) {
        redirect(`/work/${pages[0].id}`)
    }

    return (
        <div>
            <h2>Click on a project to learn more</h2>
        </div>
    )
}

export default WorkPage
