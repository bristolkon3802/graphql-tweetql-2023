# GraphQL - API

```
npm init -y
npm i apollo-server graphql
npm i nodemon -D
```

### gql `type Query{}`

### type Query schema 설계

### type Mutation

    POST - DELETE PUT

### 모든 필드는 기본적으로 nullable / Non Nullable Fields

    ! - field 들이 null이면 안됨

    value or null

### resovers

    tweet(root, args){}
    postTweet(_, { text, userId }){}
    deleteTweet(){_, { id }}
