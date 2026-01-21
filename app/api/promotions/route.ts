export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "New Year Special",
      description: "20% off all rides in January",
      code: "NEWYEAR2026"
    },
    {
      id: 2,
      title: "Corporate Package",
      description: "Special rates for corporate accounts",
      code: "CORPORATE"
    }
  ])
}
