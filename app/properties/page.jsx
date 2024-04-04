import PropertyCard from '@/components/PropertyCard';

async function fetchProperties(){
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

    const res = await fetch("http://localhost:3000/api/properties");

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
    
  } catch(err) {
    console.log(err);
  }
}

export default async function PropertiesPage() {
  const properties = await fetchProperties();

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        { properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <PropertyCard key={property._id} property={property}/>
            ))}
          </div>
          )}          
      </div>
    </section>
  )
}

