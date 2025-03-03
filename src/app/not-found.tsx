import Header from "@/components/layouts/header"
import Main from "@/components/layouts/main"
import Footer from "@/components/layouts/footer"

/**
 * component as a Not-found page
 */
export default function Page() {
  return (<>
    <Header uri="not-found" />
    <Main uri="not-found" />
    <Footer />
  </>
  );
}