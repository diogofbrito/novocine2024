import { createClient } from '@sanity/client';


const sanityClient = createClient({
	projectId: '3b3ndxr9', 
	dataset: 'novocine', 
	apiVersion: '2023-10-25', 
	useCdn: false, 
});

export default sanityClient;

