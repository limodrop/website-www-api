import { getContact } from "@/lib/data/contact"
export async function GET() { return Response.json(await getContact()) }
