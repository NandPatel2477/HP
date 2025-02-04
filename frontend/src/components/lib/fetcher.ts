// src/lib/fetcher.ts

export async function fetcher(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.json(); // Parse the JSON response
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  