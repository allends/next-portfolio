import { redirect } from "next/navigation"

const EnvironmentManager = {
    getEnvironment: () => {
        return process.env.ENVIRONMENT
    },
    isProduction: () => {
        return process.env.ENVIRONMENT === 'production'
    },
    isDevelopment: () => {
        return process.env.ENVIRONMENT === 'development'
    }
}

export default function Layout(props: { children: React.ReactNode }) {
    if (!EnvironmentManager.isDevelopment()){
        return redirect('/work')
    }

    return <>{props.children}</>
}