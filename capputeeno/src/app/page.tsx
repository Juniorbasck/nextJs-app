"use client";

import { FilterBar } from '@/components/filter-bar';
import styles from './page.module.css';
import { ProductList } from '@/components/products-list';
import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {

  const client = new QueryClient();
  return(
      <main className={styles.main}>
        <FilterBar/> 
        <ProductList/>
      </main>
  )
}