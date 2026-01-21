import { getSeo } from "@/lib/data/seo"
export async function GET() { return Response.json(await getSeo()) }
