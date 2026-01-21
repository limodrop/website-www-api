import { getServices } from "@/lib/data/services"

export async function GET() {
  return Response.json(await getServices())
}
