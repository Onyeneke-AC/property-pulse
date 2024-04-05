const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties(){
  try {
    //handle the case where the domain isn't available yet
    if (!apiDomain) {
        return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    // const res = await fetch("http://localhost:3000/api/propertiessefkwe");

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
    
  } catch(err) {
    console.log(err);
    return [];
  }
}

export { fetchProperties };