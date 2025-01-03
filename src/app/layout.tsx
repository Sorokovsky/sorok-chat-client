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
      <html className={"h-full"} lang={"en"} suppressHydrationWarning>
      <body className={"h-full flex flex-col"}>
          <Provider>
              <Header />
              <div className={"flex-grow"}>
                  {children}
              </div>
          </Provider>
      </body>
      </html>
  );
}
export default RootLayout;
