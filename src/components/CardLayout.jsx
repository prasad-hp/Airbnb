import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function CardLayout() {
    const [data, setData] = useState([]);
    const [statusMessage, setStatusMessage] = useState(""); 

    useEffect(() => {
        async function getData() {
            try {                
                const response = await axios({
                    method: "get",
                    url: "https://api.npoint.io/89133bc07e58830e3e07",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                    });
                    setData(response.data);
                    console.log(response)
            } catch (error) {
                setStatusMessage(error.response?.data?.message || "An error occured");
            }
        }
        getData();
    }, []);

    return (
        <div className='lg:px-20 md:px-10 sm:px-5 w-screen content-center'>
            <div className='flex justify-center'>
                {data.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
                        {data.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
                    </div>
                ) : (
                    <p>No data available</p>
                )}
            </div>
            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
}

export default CardLayout;
