const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function featuredProperties() {
  try {
    //handle the case where the domain isn't available yet
      if (!apiDomain) {
          return [];
      }

      const res = await fetch(`${apiDomain}/properties/featured`, { cache: 'no-store' });

      if (!res.ok){
        throw new Error('Failed to fetch data');
      }

      return res.json();

  } catch (err){
    console.log(err);
  }
}

export { featuredProperties };