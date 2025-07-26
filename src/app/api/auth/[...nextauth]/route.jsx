import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


const handler =NextAuth({
    providers: [
        GoogleProvider({
          clientId:"219008763940-htlv0h0sb9o80rmafl26lkbviq5863lf.apps.googleusercontent.com",
          clientSecret:"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",
        })
      ]
});

export {handler as GET , handler as POST};