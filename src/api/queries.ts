import { gql } from '@apollo/client';

//Queries
export const SAMPLE_GET = gql`
  query lookupCustomerOrder {
    customer {
      id
      first_name
      last_name
      username
      email
      phone
      orders {
        id
        order_date
        product
        purchase_price
        discount_price
      }
    }
  }
`;
