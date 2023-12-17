import { FC, useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import React from "react";

import { actionGetData } from "../actions/action.getData";
import { Response } from "../types/type";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { ShopInfo } from "../components/ShopInfo";
import { Contact } from "../components/Contact";
import { Asortiment } from "../components/Asortiment";

const IndexPage: FC<PageProps> = () => {
  const [data, setData] = useState<Response>();

  useEffect(() => {
    (async () => {
      try {
        const response = await actionGetData();
        setData(response as Response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="">
      <Header />
      <Info />
      <ShopInfo />
      {data && <Asortiment data={data.sections} />}
      <Contact />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
