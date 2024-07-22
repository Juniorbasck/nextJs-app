"use client";

import { FilterBar } from '@/components/filter-bar';
import styles from './page.module.css';
import { ProductList } from '@/components/products-list';
import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {

  const client = new QueryClient();
  return(
    <QueryClientProvider client={client}>

      <main className={styles.maind}>
        <FilterBar/> 
        <ProductList/>
        <h1>teste</h1>
        <h1>teste</h1>
      </main>

    </QueryClientProvider>
  )
}