import Document, { Head, Html, Main, NextScript } from "next/document"
import Footer from "../components/footer"
import Nav from "../components/nav"

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/logo.png" />
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@800&family=Montserrat&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="font-inter w-full bg-zinc-900 bg-gradient-to-r from-violet-900/10 to-pink-900/10 antialiased">
					<Nav />
					<Main />
					<Footer />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
