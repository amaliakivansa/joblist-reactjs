import React from "react";
import CardJobList from "./CardJobList";
import Footer from "./Footer";
import FormInputSearch from "./FormInputSearch";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <FormInputSearch />
      <CardJobList />
      <Footer />
    </>
  );
}
