import { Separator } from "@/components/ui/separator"
import Link from "next/link"

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
    <div id="header" className="flex flex-col items-center gap-12 mt-12">
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
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-normal text-3xl">allen davis swing</h1>
          <p>software engineer - nyc</p>
        </div>
        <Separator />
      </div>
    )
}