export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Airport Transportation",
      slug: "airport-transportation",
      description: "Professional airport pickup and drop-off service",
      image: "/images/services/airport.jpg"
    },
    {
      id: 2,
      name: "Corporate Travel",
      slug: "corporate-travel",
      description: "Executive transportation for business professionals",
      image: "/images/services/corporate.jpg"
    },
    {
      id: 3,
      name: "Wine Tours",
      slug: "wine-tours",
      description: "Guided wine country tours with professional chauffeur",
      image: "/images/services/wine.jpg"
    }
  ])
}
