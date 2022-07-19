import React from 'react'
import Navbar from '@components/Navbar/Navbar'

import styles from './layout.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>)
}

export default Layout