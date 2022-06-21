import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9exrf1gk001xi94av8mhz/master',
    cache: new InMemoryCache()
})
