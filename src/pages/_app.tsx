import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
			<head>
				<title>CodeVenture</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.png' />
				<meta
					name='description'
					content='Web application that contains leetcode problems and video solutions'
				/>
			</head>
			{/* <ToastContainer /> */}
			<Component {...pageProps} />
		</RecoilRoot>
  );
}
