import { getBlogPosts } from "@/lib/data/blog"
export async function GET() { return Response.json(await getBlogPosts()) }
