"use client"

import { createPost } from "@/app/api/blog/service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Page(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const onSubmit = async () => {
        createPost({
            title,
            description,
            content,
        })
    }

    return (
        <div className="mt-20 flex flex-col items-center gap-2">
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    )
}