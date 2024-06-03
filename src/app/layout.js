"use client";

import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { AppProgressBar } from "next-nprogress-bar";

const inter = Inter({ subsets: ["latin"] });
const dmsans = DM_Sans({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <Provider store={store}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
          <AppProgressBar
            height="2px"
            color="#0ea5e9"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </Provider>
      </body>
    </html>
  );
}
