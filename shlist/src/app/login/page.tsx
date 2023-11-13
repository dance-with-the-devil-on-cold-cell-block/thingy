"use client";
import React, { useEffect, useState } from 'react';

interface Item {
  // Define the structure of your items here
  itemId: number;
  itemName: string;
  // Include other properties as per your database schema
}

const ItemsPage = () => {
  const [items, setItems] = useState<Item[]>([]); // State to store the items
  const [isLoading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState<string | null>(null); // State to store any errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace '/api/your-endpoint' with the path to your API endpoint
        const response = await fetch('shlist\src\app\testsql.ts'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError('Failed to load items');
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  if (isLoading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>{error}</div>; // Show error message

  // Render the list of items
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.itemId}>{item.itemName}</li> // Adjust according to your item properties
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
