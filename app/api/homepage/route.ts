import { getHomepageData } from "@/lib/data/homepage"

export async function GET() {
  return Response.json(await getHomepageData())
}
