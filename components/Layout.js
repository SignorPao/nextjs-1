const { default: Footer } = require("./Footer");
const { default: Header } = require("./Header");

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
