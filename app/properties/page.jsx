'use client'
import { useEffect, useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';

export default async function PropertiesPage() {
  // const properties = await fetchProperties();
  const  [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/properties");

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setProperties(data);
      } catch(err) {
        console.log(err);
      }
    };

    fetchProperties();
  }, []);

  console.log(properties);

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

