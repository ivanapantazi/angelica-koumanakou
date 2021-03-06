import { request } from "graphql-request";

const graphqlAPI =
  "https://api-eu-west-2.graphcms.com/v2/cl1aw5ez90gzg01z3g3qg55bn/master";

export const getProducts = async () => {
  const { products } = await request(
    graphqlAPI,
    `
      { 
        products {
          id
          name
          slug
        }
      }
    `
  );

  return products;
};

export const getAbout = async () => {
  const { abouts } = await request(
    graphqlAPI,
    `
      {
        abouts {
          description
          downloadCta
          intro
          linkedInCta
          slug
          title
          bioImage {
            url
          }
        }
      }
    `
  );

  return abouts;
};

export const getContact = async () => {
  const { contacts } = await request(
    graphqlAPI,
    `
        {
          contacts {
            intro
            slug
            title
            description
            contactImage {
              url
            }
            email
            instagram
            linkedin
            mobile
          }
        }
      `
  );

  return contacts;
};

export const getServices = async () => {
  const { services } = await request(
    graphqlAPI,
    `
        {
          services {
            slug
            title
            intro
            description
            serviceItem1
            serviceItem2
            serviceItem3
            serviceItem4
            serviceItem5
            asset1 {
              url
            }
            asset2 {
              url
            }
            asset3 {
              url
            }
            asset4 {
              url
            }
            asset5 {
              url
            }
          }
        }
      `
  );

  return services;
};

export const getMenus = async () => {
  const { menus } = await request(
    graphqlAPI,
    `
        {
          menus {
            slug
            name
            id
          }
        }
      `
  );

  return menus;
};

export const getProjectDetails = async () => {
  const { projects } = await request(
    graphqlAPI,
    `  
    {
      projects {
        slug
        softwareTags
        tags
        title
        description
        projectThumbnail {
          url
        }
        projectAssets {
          url
        }
      }
    }
  `
  );

  return projects;
};
