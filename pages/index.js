/* eslint-disable react/jsx-key */
import Layout from '../sections/Layout';
import Link from 'next/link';

export async function getServerSideProps({ req, res }) {
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	const result = await fetch(`https://api.quran.sutanlab.id/surah`);
	const surahs = await result.json();

	return { props: { surahs } };
}

export default function Home({ surahs }) {
	return (
		<Layout>
			<div className="grid mt-5 grid-cols-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
				{surahs &&
					surahs.data.map((surah, index) => (
						<Link href="/surah/[id]" as={`/surah/${surah.number}`} key={index}>
							<div className="bg-gradient-to-tl from-teal-200 to-teal-700 dark:from-[#943df4] dark:to-[#2B0C8B] hover:shadow-xl hover:cursor-pointer shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
								<div className="flex flex-col group">
									<h1 className="text-2xl font-bold">
										{surah.number} {surah.name.transliteration.id}
									</h1>
									<p className="mt-2">{surah.name.translation.id}</p>
								</div>
							</div>
						</Link>
					))}
			</div>
		</Layout>
	);
}
