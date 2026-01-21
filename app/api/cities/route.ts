import { getCities } from "@/lib/data/cities"
export async function GET() { return Response.json(await getCities()) }
