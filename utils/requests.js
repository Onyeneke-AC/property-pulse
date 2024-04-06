'use client';
import {useState, useEffect} from 'react';

const useFetchProperties = () => {

  const [properties, setProperties] = useState([]);

  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

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
      }
    };
    fetchProperties();
  }, []);
  return properties;
};

export default useFetchProperties;