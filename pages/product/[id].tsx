import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>()
  // router
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  return (
    <section>
      <h1>Página producto: {product?.name} </h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div>
        <p>Name: {product?.name}</p>
        <p>Price: {product?.price}</p>
        <p>Description: {product?.sku}</p>
        <img src={product?.image} alt="" />
      </div>
    </section>
  )
}

export default ProductPage