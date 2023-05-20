

export default async function fetchData() {
    const response = await fetch('/api/getSearch');
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
}
  