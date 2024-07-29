import Head from "next/head";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Head>
          <title>Patricia Granados Blog </title>
          <meta
            name="description"
            content="Data Analyst/Industrial Engineer"
            key="desc"
          ></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white ">
          <section className=" min-h-screen"></section>
        </main>
      </div>
    </div>
  );
}

export default App;
