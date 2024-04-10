'use client';
import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import Spinner from '@/components/Spinner';
import { useFetchProperties } from '@/utils/requests';

export default function PropertiesPage() {
  
  const {properties, loading} = useFetchProperties();

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
  <>
    <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col">
            <PropertySearchForm />
        </div>
    </section>
    {
    loading ? (
        <Spinner loading={loading} />
    ) : (
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
  </>
  )
}

