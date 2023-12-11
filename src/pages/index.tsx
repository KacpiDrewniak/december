import { FC, useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import React from "react";

import { actionGetData } from "../actions/action.getData";

const IndexPage: FC<PageProps> = () => {
  const [data, setData] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        const response = await actionGetData();
        setData(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
