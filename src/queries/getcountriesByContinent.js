import { gql } from "apollo-boost";


const GET_COUNTRIES_BY_CONTINENT = gql`
query {
    continents {
        code
        name
        countries {
            code
            name
            capital
            currency
            phone
            emoji
            languages {
                name
            }
        }
    }
}
`;

export default GET_COUNTRIES_BY_CONTINENT;