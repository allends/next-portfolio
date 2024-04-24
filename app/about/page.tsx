// import { Image } from "@assetstack/react"
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

const BACKGROUND =
    "I'm a passionate software developer with a strong focus on crafting high-performance React applications for large-scale projects. Beyond my professional work, I thrive on delving into smaller-scale projects, exploring various front-end frameworks in my spare time. My insatiable curiosity drives me to continually expand my skill set, and I find myself drawn to low-level languages like Rust and C. Whether it's optimizing user interfaces or delving into systems programming, I'm always eager to embrace new challenges and opportunities to learn."

const AboutPage = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col justify-center items-center gap-5">
                <Image
                    src="https://asset-stack.s3.us-east-1.amazonaws.com/RP-32a675ac-4f5c-4721-ac25-6d104908471c/AS-577ae1f2-f8fb-43be-b34d-b82436db9fea/VR-7729bf57-d96d-492c-a5af-e2943dbe5d14"
                    alt="A professional headshot of Allen"
                    width={100}
                    height={100}
                    style={{
                        marginTop: '5rem',
                        width: '10rem',
                        height: '10rem',
                        borderRadius: '50%',
                    }}
                    className="rounded-full"
                />
                <div>about me</div>
                <div className="flex flex-row gap-5">
                    <Link
                        href="https://www.github.com/allends"
                        referrerPolicy="no-referrer"
                        target="_blank"
                    >
                        <GitHubLogoIcon />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/allendavisswing"
                        referrerPolicy="no-referrer"
                        target="_blank"
                    >
                        <LinkedInLogoIcon />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col px-5 lg:px-24 py-5 items-center">
                <div className="text-center">{BACKGROUND}</div>
            </div>
        </div>
    )
}

export default AboutPage
