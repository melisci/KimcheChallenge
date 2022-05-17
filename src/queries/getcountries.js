import { gql } from '@apollo/client'

const COUNTRIES_QUERY = gql`
{
  countries {
    code
    emoji
    capital
    name
    phone
    currency
    continent{
      name
    }
    languages{
      name
    }
  }
}
`

  export default COUNTRIES_QUERY