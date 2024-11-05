export function createSlug(name) {
	return name
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '');
}
