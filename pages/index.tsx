import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// Rendering dentro de nuestro servidor
export const getStaticProps = async () => {
  const res = await fetch('https://curso-nextjs-topaz.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await res.json()

  return {
    props: {
      productList,
    }
  }
}

const HomePage = ({productList}: {productList:TProduct[]}) => {

  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
