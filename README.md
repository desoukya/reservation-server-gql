# Run Server
`npm start`

Go to:
http://localhost:3000/graphiql

```
{
  reservation(id: "5a78daf11b396b37744bbc9c") {
    _id
    name
    hotelName
    arrivalDate
    departureDate
  }
  allReservations {
    name
  }
}
```

Using Postman
`/GET`
```
http://localhost:3000/graphql?query={ reservation(id: "5a78daf11b396b37744bbc9c") { _id name hotelName arrivalDate departureDate } allReservations { name } }
```


`/POST`

```
mutation {
  createReservation(input: {
    name: "Amr Farouk Desouky",
    hotelName: "Hilton",
    arrivalDate: "02-22-2018",
    departureDate: "02-23-2018"    
  }) {
    _id
    name
    hotelName
    arrivalDate
    departureDate
  }
}
```