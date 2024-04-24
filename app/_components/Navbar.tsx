import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export const Navbar = () => {

    const links = [
        {
          name: 'home',
          path: '/',
        }, {
          name: 'work',
          path: '/work'
        }, {
          name: 'about',
          path: '/about'
        }
      ] as const

    return (
    <div id="header" className="flex flex-col items-center w-screen z-10 absolute">
        <div className="flex flex-row w-full justify-between py-2 px-2 md:px-10  bg-white opacity-90" style={{
          backdropFilter: 'blur(30px)',
        }}>
          <div className="flex flex-col">
              <div className={`text-lg text-left ${playfairDisplay.className}`}>Allen Davis-Swing</div>
              <div className="text-sm text-left">Software Engineer</div>
          </div>
          <div className="flex flex-row gap-1 font-light">
            {
              links.map((link, index) => {

                if (index === links.length - 1) {
                  return <Link key={link.path} href={link.path}>{link.name}</Link>
                }

                return (
                  <>
                    <Link key={link.path} href={link.path}>{link.name}</Link>
                    <div className="pointer-events-none">/</div>
                  </>
                )
              })
            }
          </div>
        </div>
        <Separator />
      </div>
    )
}