import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'michael hajj ─ developer';
	const description = "Hey 👋 I'm michael hajj, a developer";

	return {
		title,
		description,
		canonical: `https://michael-hajj.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'michael hajj',
			url: `https://michael-hajj.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://michael-hajj.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@sameemul_haque',
			site: '@sameemul_haque',
		},
		...props,
	};
}
