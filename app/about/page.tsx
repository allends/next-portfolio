import { Image } from "@assetstack/react"
import Link from "next/link"

const BACKGROUND = "I'm a passionate software developer with a strong focus on crafting high-performance React applications for large-scale projects. Beyond my professional work, I thrive on delving into smaller-scale projects, exploring various front-end frameworks in my spare time. My insatiable curiosity drives me to continually expand my skill set, and I find myself drawn to low-level languages like Rust and C. Whether it's optimizing user interfaces or delving into systems programming, I'm always eager to embrace new challenges and opportunities to learn."

const AboutPage = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
                <Image src="headshot" style={{
                    width: '10rem',
                    height: '10rem',
                    borderRadius: '50%'
                }} className="rounded-full" />
                <div>about me</div>
                <div className="flex flex-row gap-5">
                    <Link href="https://www.github.com/allends" referrerPolicy="no-referrer" target="_blank">
                        <Image style={{
                            width: '2rem',
                            height: '2rem',
                        }} src="github" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/allendavisswing" referrerPolicy="no-referrer" target="_blank">
                        <Image style={{
                            width: '2rem',
                            height: '2rem',
                        }} src="linkedin" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col p-24 items-center">
                <div className="text-center w-1/2">
                    {BACKGROUND}
                </div>
            </div>
        </div>
    )
}

export default AboutPage