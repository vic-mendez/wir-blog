import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query{
    posts{
      author {
        name, 
      },
      title,
      datePublished, 
      content{
        html
      }, 
      location{latitude, longitude}, 
      slug, 
      coverPhoto {
        url
      },
      category,
      rating,
      ingredientsHowToMakeIt{
        html
      }
      foodImage{
        url
      }
      additionalImage{
        url
      }
    }
  }
`;

export const useData = () => {
  const { error, data, loading } = useQuery(GET_DATA);

  return {
    error,
    data,
    loading,
  }
}
