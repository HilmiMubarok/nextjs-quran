import { BookOpenIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/">
			<a className="my-2 flex items-center space-x-1 text-teal-500 dark:text-teal-300">
				<BookOpenIcon className="h-8 w-8 flex-shrink-0 mr-3" />
				<span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">Next-js Quran</span>
			</a>
		</Link>
	);
};

export default Logo;
