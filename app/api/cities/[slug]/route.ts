import { getCityBySlug } from "@/lib/data/cities"
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const city = await getCityBySlug(params.slug)
  if (!city) return new Response("Not found", { status: 404 })
  return Response.json(city)
}
