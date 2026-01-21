import { getNavigation } from "@/lib/data/navigation"
export async function GET() { return Response.json(await getNavigation()) }
