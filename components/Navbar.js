import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-6 py-3">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Link href="/" className="text-gray-900 no-underline">
							<span className="font-semibold text-xl tracking-tight">Next.js Quran</span>
						</Link>
					</div>
					<div className="flex md:hidden items-center">
						{/* Hamburger Menu */}
						<button className="block text-gray-900 no-underline focus:outline-none">
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								<path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
							</svg>
						</button>
					</div>
					<div className="md:flex items-center hidden">
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Home
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Documentation
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Examples
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Blog
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Jobs
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Pricing
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Docs
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Support
						</Link>
						<Link href="/" className="mr-6 no-underline text-gray-600 hover:text-gray-900">
							Sign in
						</Link>
						<Link href="/" className="no-underline text-gray-600 hover:text-gray-900">
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
