export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    portland: {
      id: 1,
      name: "Portland",
      slug: "portland",
      description: "Premium chauffeur service in Portland, Oregon",
      image: "/images/cities/portland.jpg"
    },
    beaverton: {
      id: 2,
      name: "Beaverton",
      slug: "beaverton",
      description: "Professional transportation in Beaverton",
      image: "/images/cities/beaverton.jpg"
    },
    hillsboro: {
      id: 3,
      name: "Hillsboro",
      slug: "hillsboro",
      description: "Executive car service in Hillsboro",
      image: "/images/cities/hillsboro.jpg"
    },
    vancouver: {
      id: 4,
      name: "Vancouver",
      slug: "vancouver",
      description: "Luxury transportation in Vancouver, WA",
      image: "/images/cities/vancouver.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
