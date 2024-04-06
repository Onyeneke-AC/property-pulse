'use client';
import {useState, useEffect} from 'react';

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
export const useFetchProperties = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {

        //handle the case where the domain isn't available yet
        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/properties`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();

        setProperties(data);   
      } catch(err) {
        console.log(err);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);
  return {properties, loading};
};

// Fetch a single property
export const useFetchProperty = (id) => {

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {

      if (!id) return;

      try {

        //handle the case where the domain isn't available yet
        if (!apiDomain) {
            return null;
        }

        const res = await fetch(`${apiDomain}/properties/${id}`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();

        setProperty(data);   
      } catch(err) {
        console.log(err);
        return null;
      } finally {
        setLoading(false);
      }
    };
    if ( property === null ){
      fetchProperty();
    }
  }, [id, property]);

  return {property, loading};
};
