import './App.css'
import PagesHandler from './PagesHandler';
import {BrowserRouter} from 'react-router-dom'
// import {ApolloProvider} from '@apollo/react-hooks'
// import ApolloBoost from 'apollo-boost'
// import {ApolloClient} from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient,InMemoryCache } from '@apollo/client';
// import TestPage from './Pages/TestPage';
// import {Routes, Route} from "react-router-dom";
// import Builder from './Components/Builder';

const httpLink = new createHttpLink({
  uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgx5fh9m0odv01t86s67atv5/master',
  headers: {
    authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODI1NDQzMjMsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZ3g1Zmg5bTBvZHYwMXQ4NnM2N2F0djUvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImM3OTA3ZWIyLTgzNjMtNDhlMS1iMGQyLTZiZjM5NGU1ZTM2ZSIsImp0aSI6ImNsZ3k3ZzU0NjFtb2QwMXRhZmN3dzdnaTMifQ.Zy3orzSTOC4ppN3SBJfmbTdcTzlVL_YJJoce8XIVfZjd3eP_G4rOF1zne2M82Gg6btpIFs8ZhkigE72nNMgSJO7tScOU2hXS2t9AZbjIvJK0r6KIqpIDbeGKURGUdt7jRr8VkcnVvo7127mUu3nekgt8qYPj3FiD2q1BYvcv2MB5yxXL9oq_pD0Vw9qrdYBwU8CIFJm3U373pQ8BUqVJiL_q9QsJIEY_C48MpTnNi6uuWChshSJ3VjplOCRrt6nT02KK2_pj4sI0EdQ131kjoaiqk22d59Vex4sHpNvo5ErovMWcJRjUwgUxbQECxZhH7Ltk_pGKlnro7X0biiiRyR72pPlSWN_cLoTKgcyIfQTtd18LMoDS8NLLuKshLQwC-n7WJ_HRbfddaFv8LZCDBp1tEXPrZV0BFSchh2GaPsEeDFBUosliVe5dEohbZe9hCmfLgVFeIEKSm-ZC14lpY6cQsAXfzT-2-m16Y8u5S9w2YO1r4JIFlF7xbmzQJ2z09fhOmXDGEPjJae6NlLjG_HHdjDtVT44ZtQjyHa9aSnJA3EDJId2yBiI5mxIN-19TrXRn_1ywR8PBVOEr7QzL410oect1lI6FMxu9x14DKlYAxpRtQQBAc3g5S8Uwe3EfixQ8oLzRtaayEdpYuOQnmFxDK1NtblOaLMFDY-vQSkk`,
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <PagesHandler/>
      </BrowserRouter>
    </ApolloProvider>
  )
}