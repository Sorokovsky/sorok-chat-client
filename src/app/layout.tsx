import type { Metadata } from "next";
import React, {FC, JSX, ReactNode} from "react";
import "@/styles/global.sass"
import { MainLayout } from '@/components/layouts/main-layout/main-layout';

export const metadata: Metadata = {
  title: {
      template: "Sorok chat | %s",
      default: "Sorok chat",
  },
  description: "Best ukrainian messenger",
};

const RootLayout: FC<Readonly<{children: ReactNode;}>> = ({children}): JSX.Element => {
  return <MainLayout>{children}</MainLayout>;
}
export default RootLayout;
