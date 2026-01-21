import { getBlogPostBySlug } from "@/lib/data/blog"
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) return new Response("Not found", { status: 404 })
  return Response.json(post)
}
