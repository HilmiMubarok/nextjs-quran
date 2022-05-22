import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../sections/Layout';

export async function getServerSideProps(context) {
	const { id } = context.query;

	context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	// Fetch data from external API
	const result = await fetch(`https://api.quran.sutanlab.id/surah/${id}`);
	const surah = await result.json();

	// Pass surah to the page via props
	return { props: { surah } };
}

const Surah = ({ surah }) => {
	const router = useRouter();

	// get surah by id
	const data = surah.data;

	return (
		<Layout>
			<div className="flex rounded-xl mt-5 flex-col justify-center items-center bg-gradient-to-tr from-teal-200 to-teal-700 dark:from-[#943df4] dark:to-[#2B0C8B] p-5">
				<div className="text-4xl">{data.name.transliteration.id}</div>
				<div className="text-lg">{data.name.translation.id}</div>
				<hr className="border-1 my-3 opacity-60 w-full mx-auto " />
				<div className="flex space-x-5">
					<div>{data.revelation.id}</div>
					<div>{data.numberOfVerses} Ayat</div>
				</div>
			</div>
			<div className="mt-5">
				{data.verses.map((verse, index) => (
					<div className="mb-5" key={index}>
						<div className="bg-teal-200 dark:bg-[#2B0C8B] justify-between px-5 py-4 rounded-lg flex items-center">
							<div className="bg-teal-700 text-white dark:bg-[#943df4] w-[30px] h-[30px] flex items-center justify-center rounded-full">
								{verse.number.inSurah}
							</div>
							<div className="flex ">
								<div>play</div>
							</div>
						</div>
						<div className="text-right px-5 py-4 text-xl leading-loose">{verse.text.arab}</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Surah;
