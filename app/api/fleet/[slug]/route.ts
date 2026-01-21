export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    "luxury-sedan": {
      id: 1,
      name: "Luxury Sedan",
      slug: "luxury-sedan",
      seats: 3,
      description: "Executive sedan for professional transportation",
      image: "/images/fleet/sedan.jpg"
    },
    "suv": {
      id: 2,
      name: "Premium SUV",
      slug: "suv",
      seats: 6,
      description: "Spacious SUV for group travel",
      image: "/images/fleet/suv.jpg"
    },
    "sprinter-van": {
      id: 3,
      name: "Mercedes Sprinter Van",
      slug: "sprinter-van",
      seats: 12,
      description: "Large group transportation",
      image: "/images/fleet/sprinter.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
