import '../styles/globals.scss'

interface Props {
    Component: any,
    pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
    return <Component {... pageProps} />
}

export default MyApp