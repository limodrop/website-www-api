import { getServiceBySlug } from "@/lib/data/services"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)
  if (!service) {
    return new Response("Not found", { status: 404 })
  }
  return Response.json(service)
}
