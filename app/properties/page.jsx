'use client';
import PropertyCard from '@/components/PropertyCard';
import { useFetchProperties } from '@/utils/requests';

export default function PropertiesPage() {
  
  const properties = useFetchProperties();

  const sortedProperties = [...properties].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        { sortedProperties.length === 0 ? (
            <p>No properties found</p>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedProperties.map((property, index) => (
              <PropertyCard key={property._id} property={property}/>
            ))}
          </div>
          )}          
      </div>
    </section>
  )
}

