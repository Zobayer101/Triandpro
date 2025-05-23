import { SessionProvider } from "next-auth/react";
import { GlobalProvider } from "@/app/context/GobalContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <GlobalProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </GlobalProvider>
  );
}
