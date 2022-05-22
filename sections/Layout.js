import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Nextjs - Quran</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preload" href="/fonts/Quran/quran.ttf" as="font" crossOrigin="" />
			</Head>

			<div className="min-h-screen mx-auto container px-5 flex flex-col">
				<Header />
				<main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Layout;
