import { getServiceArea } from "@/lib/data/serviceArea"
export async function GET() { return Response.json(await getServiceArea()) }
