import React from "react"
import Navbar from "./navbar"
import Head from "next/head"

const Layout = ({pageName, children}) => {
    return (
        <div>
            <Head>
                <title>Ethan Pusch | {pageName}</title>
            </Head>

            <div className={pageName === "Home" ? "fade-in-slow" : ""}>
                <Navbar pageName={pageName}/>
            </div>

            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;

