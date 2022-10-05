import Document, { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/nav'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@800&display=swap" rel="stylesheet" />
                </Head>
                <body className="bg-zinc-900 bg-gradient-to-r from-violet-900/10 to-pink-900/10 w-full antialiased font-inter">
                    <Nav />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument