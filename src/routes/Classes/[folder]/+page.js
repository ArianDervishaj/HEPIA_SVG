
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return { folder: params.folder };
}
