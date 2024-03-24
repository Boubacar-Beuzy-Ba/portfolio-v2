import { createClient } from "contentful";

const client = createClient({
  space: "0f5j3holhixt",
  accessToken: "gO4oeRZ4GDzMx8D9gb76N4xfBS9spek09Ai8RZuhqWY",
});

const getPortfolioItems = async () => {
  const response = await client.getEntries({
    content_type: "portfolioItem",
  });

  console.log(response.items);

  return response.items;
};

export default getPortfolioItems;
