import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Open+Sans:ital@1&family=Sora:wght@700&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
