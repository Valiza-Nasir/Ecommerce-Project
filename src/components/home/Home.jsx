import React, { useEffect, useState } from 'react';
import { getFullData } from '../../apis/const';
import Card from '../card/Card';
function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await getFullData();
      console.log('fetch data',response.data);
      setData(response.data);
    } catch (error) {
      console.log('Failed to Load Data');
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((value) => (
              <Card  id={value._id} title={value.title} image={value.image}  price={value.price} description={value.description}/>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </>
  );
}

export default Home;
