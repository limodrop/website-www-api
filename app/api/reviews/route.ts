import { getReviews } from "@/lib/data/reviews"
export async function GET() { return Response.json(await getReviews()) }
