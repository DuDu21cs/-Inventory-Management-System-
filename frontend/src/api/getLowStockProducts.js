import fetchWithAuth from '../utils/fetchWithAuth';

export const getLowStockProducts = async () => {
  try {
    const res = await fetchWithAuth('http://localhost:5000/api/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    // Filter products where quantity is below 5
    return data.filter(product => product.quantity <= 5);
  } catch (err) {
    console.error('Low Stock Error:', err.message);
    return [];
  }
};