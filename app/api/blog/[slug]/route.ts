export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    "oregon-wine-tour-destinations": {
      id: 1,
      title: "Top 5 Oregon Wine Tour Destinations",
      content: "Oregon offers some of the most beautiful vineyards in the Pacific Northwest. Our chauffeur service can take you to all the top destinations including Willamette Valley, Dundee Hills, and more. Enjoy a worry-free wine tasting experience.",
      image: "/images/blog/wine-tour.jpg"
    },
    "corporate-travel-benefits": {
      id: 2,
      title: "Why Choose a Chauffeur for Corporate Travel",
      content: "Corporate travel requires reliability and professionalism. Our chauffeur service ensures you arrive on time, every time. Focus on your work while we handle the driving.",
      image: "/images/blog/corporate.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
