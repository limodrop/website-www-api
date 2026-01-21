export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    "airport-transportation": {
      id: 1,
      name: "Airport Transportation",
      slug: "airport-transportation",
      description: "Professional airport pickup and drop-off service",
      image: "/images/services/airport.jpg"
    },
    "corporate-travel": {
      id: 2,
      name: "Corporate Travel",
      slug: "corporate-travel",
      description: "Executive transportation for business professionals",
      image: "/images/services/corporate.jpg"
    },
    "wine-tours": {
      id: 3,
      name: "Wine Tours",
      slug: "wine-tours",
      description: "Guided wine country tours with professional chauffeur",
      image: "/images/services/wine.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
