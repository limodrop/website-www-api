import { getFooter } from "@/lib/data/footer"
export async function GET() { return Response.json(await getFooter()) }
