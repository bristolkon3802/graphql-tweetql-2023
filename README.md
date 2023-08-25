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

### type 내부의 field = resolver function 만들기

### tweets users schema 연결

### schema 명세 작성

### Movies => data를 graphql api 변환

    npm i node-fetch
