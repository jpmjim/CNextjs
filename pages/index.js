import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {

    window
      .fetch('api/avo')
      .then((res) => res.json())
      .then(({ data, length}) => {
        setProductList(data);
      })
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Hola Platzi!</h1>
      <ul>
        {productList.map((product) => (
          <div>{product.name}</div>
        ))}
        </ul>
    </div>
  )
}

export default Home