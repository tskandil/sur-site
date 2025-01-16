import { createClient } from "@sanity/client";

const sanityClient = createClient({
	projectId: "q1oa8v6m",
	dataset: "production",
	useCdn: false,
	apiVersion: "2024-11-01",
});

export default sanityClient;