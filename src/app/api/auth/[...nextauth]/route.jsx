import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


const handler =NextAuth({
    providers: [
        GoogleProvider({
          clientId:process.env.OAUTH_ID,
          clientSecret:process.env.OAUTH_KEY,
        })
      ]
});

export {handler as GET , handler as POST};