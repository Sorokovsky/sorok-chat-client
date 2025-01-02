import type { Metadata } from "next";
import React, {FC, JSX, ReactNode} from "react";
import "@/styles/global.sass"
import {Provider} from "@/components/provider";
import {Header} from "@/components/header/header";

export const metadata: Metadata = {
  title: {
      template: "Sorok chat | %s",
      default: "Sorok chat",
  },
  description: "Best ukrainian messenger",
};

const RootLayout: FC<Readonly<{children: ReactNode;}>> = ({children}): JSX.Element => {
  return (
      <html lang={"en"} suppressHydrationWarning>
      <body>
          <Provider>
              <Header />
              {children}
          </Provider>
      </body>
      </html>
  );
}
export default RootLayout;
