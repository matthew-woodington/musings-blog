import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

export default function Layout({ children } : { children:any }) {// styles the main html tag
  const router = useRouter()
  if (router.pathname.includes('/admin')) {
    return (
      <>
          <main>
            {children}     
          </main>
      </>
    );
  } else {
    return (
      <>
         <Header />
          <main>
            {children}     
          </main>
         <Footer />
      </>
    );
  }
  
}