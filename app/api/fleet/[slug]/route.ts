import { getVehicleBySlug } from "@/lib/data/fleet"
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const vehicle = await getVehicleBySlug(params.slug)
  if (!vehicle) return new Response("Not found", { status: 404 })
  return Response.json(vehicle)
}
