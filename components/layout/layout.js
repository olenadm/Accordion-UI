import { Fragment } from "react";
import { Work_Sans } from "next/font/google";
const work_sans = Work_Sans({ subsets: ["latin"] });

function Layout(props) {
  return (
    <Fragment>
      <main className={`container h-100 my-auto py-2  ${work_sans.className}`}>
        <div className="row h-100 justify-content-center align-items-center">
          {props.children}
        </div>
      </main>
    </Fragment>
  );
}

export default Layout;
