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
import { ToastContainer } from "react-toastify";

const FIRST_INDEX = 0;

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
      <ToastContainer />
      <Header
        image={data?.contents[FIRST_INDEX].headerImage}
        title={data?.contents[FIRST_INDEX].text1}
        subtitle={data?.contents[FIRST_INDEX].text2}
      />
      <Info
        link={data?.contents[FIRST_INDEX].mapLink}
        label1={data?.contents[FIRST_INDEX].text3}
        label2={data?.contents[FIRST_INDEX].text4}
        phone={data?.contents[FIRST_INDEX].text5}
      />
      <ShopInfo
        text={data?.contents[FIRST_INDEX].text6}
        text2={data?.contents[FIRST_INDEX].sobota}
        text3={data?.contents[FIRST_INDEX].niedziela}
      />
      {data && <Asortiment data={data.sections} />}
      <Contact
        link={data?.contents[0].mapLink}
        label1={data?.contents[0].text3}
        label2={data?.contents[0].text4}
        phone={data?.contents[0].text5}
      />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
