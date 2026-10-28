// Next.js applies basePath to routes, but not to fetch() or DOM asset URLs.
export function withBasePath(path: string) {
    return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}
