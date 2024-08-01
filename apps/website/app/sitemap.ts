import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://dokploy.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
}
