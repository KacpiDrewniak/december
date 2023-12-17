import { request } from "graphql-request";

export const actionGetData = async () =>
  await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clpbwytih8hel01t60huph7mg/master",
    `
                  {
                    sections {
                      id
                      title
                      product {
                        ... on Product {
                          id
                          title
                          image {
                            id
                            url
                          }
                          isPromoted
                          productCard {
                            ... on Card {
                              id
                              title
                              price
                            }
                          }
                        }
                      }
                    }
                } `,
  );
