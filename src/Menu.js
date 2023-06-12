import React, { useState, useEffect } from "react";
import axios from 'axios';


function MenuList() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/menu/');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    function OrderNow() {
      // Replace the URL below with the desired destination URL
      var url = "https://wa.me/+2348078983638?text=I'm%20interested%20in%20buying%20smoothie%20and%20parfait";
  
      // Redirect the user to the specified URL
      window.location.href = url;
    }
    
    return (

            <div>
                  <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((smoothie) => (
                    <div key={smoothie.id} className="bg-white p-4 shadow">
                    <img src={smoothie.image} alt={smoothie.name} className="w-full h-40 object-cover mb-4" />
                    <h2 className="text-lg font-bold">{smoothie.name}</h2>
                    <p className="text-gray-600">{smoothie.price} Naira</p>
                    <p className="text-gray-600 text-bold font-bold">{smoothie.description}</p>
                    <button onClick={OrderNow} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      ORDER NOW
                    </button>

                    </div>
                  ))}
              </div>
              </div>
            </div>
              

    )
  }

  export default MenuList;