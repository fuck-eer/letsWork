import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/modules/Layout/Layout";
import JobsContextProvider from "../context/context";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
