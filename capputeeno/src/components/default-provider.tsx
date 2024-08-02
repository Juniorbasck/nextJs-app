"use client";

import { FilterContextProvider } from "@/contexts/filter-contex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

interface DefaultProviderProps {
  children: React.ReactNode;
}

const them = {
  desktopBreakpoint: "768px",
};

export function DefaultProvider({ children }: DefaultProviderProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={them}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
