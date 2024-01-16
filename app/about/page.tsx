import { Image } from "@assetstack/react"

const AboutPage = () => {
    return (
        <div>
            <Image src="headshot" alt="A professional headshot of Allen" style={{
                width: '10rem',
                height: '10rem'
            }} className="rounded-full" />
        </div>
    )
}

export default AboutPage