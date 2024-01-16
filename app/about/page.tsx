import { Image } from "@assetstack/react"

const BACKGROUND = "I'm a passionate software developer with a strong focus on crafting high-performance React applications for large-scale projects. Beyond my professional work, I thrive on delving into smaller-scale projects, exploring various front-end frameworks in my spare time. My insatiable curiosity drives me to continually expand my skill set, and I find myself drawn to low-level languages like Rust and C. Whether it's optimizing user interfaces or delving into systems programming, I'm always eager to embrace new challenges and opportunities to learn."

const AboutPage = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-row justify-center items-center gap-36 mt-5">
                <div>about me</div>
                <Image src="headshot" alt="A professional headshot of Allen" style={{
                    width: '5rem',
                    height: '5rem',
                    borderRadius: '50%'
                }} className="rounded-full" />

            </div>
            <div className="flex flex-col p-24">
                <div>
                    {BACKGROUND}
                </div>
            </div>
        </div>
    )
}

export default AboutPage