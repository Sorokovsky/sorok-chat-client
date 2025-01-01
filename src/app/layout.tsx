import type { Metadata } from "next";
import React, {FC, JSX, ReactNode} from "react";
import "@/styles/global.sass"
import {Provider} from "@/components/provider";
import {Header} from "@/components/header/header";
import {EnvironmentKeys} from "@/enums/environment-keys.enum";
import {getServerURL} from "@/utils/backand";

export const metadata: Metadata = {
  title: {
      template: "Sorok chat | %s",
      default: "Sorok chat",
  },
  description: "Best ukrainian messenger",
};
const server: string = getServerURL(
    process.env[EnvironmentKeys.SERVER_PROTOCOL]!,
    process.env[EnvironmentKeys.SERVER_HOST]!,
    process.env[EnvironmentKeys.SERVER_PORT]!,
)
const RootLayout: FC<Readonly<{children: ReactNode;}>> = ({children}): JSX.Element => {
  return (
      <html lang={"en"} suppressHydrationWarning>
      <body>
          <Provider>
              <Header server={server} />
              {children}
          </Provider>
      </body>
      </html>
  );
}
export default RootLayout;
