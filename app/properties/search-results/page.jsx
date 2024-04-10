'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const SearchReasultsPage = () => {
    const searchParams = useSearchParams();

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const res = await fetch(`/api/properties/search?location=${location}&propertyType=${propertyType}`);

                if (res.status === 200) {
                    const data = await res.json();
                    setProperties(data);
                } else {
                    setProperties([]);
                }
            } catch(err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchSearchResults();
    },[propertyType, location]);

    console.log(properties);

  return (
    <div>SearchReasultsPage</div>
  )
}

export default SearchReasultsPage