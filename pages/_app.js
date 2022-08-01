import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme} resetCSS>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
