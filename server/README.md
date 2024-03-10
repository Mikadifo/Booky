# Booky API

This folder contains a Node + Express API that is linked to a mongoDB database.

## Server Features

- Book

  - List
  - Create
  - Update
  - Delete
  - Borrow
  - Return

- Customer
  - Get by ID
  - Create

## Endpoints

| NAME            | DESCRIPTION                                                                         | URL                            | METHOD | BODY                                                                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------- | ------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Book-List       | Returns a list of all the books in the app.                                         | /book/list                     | GET    | NA                                                                                                                                                          |
| Book-Create     | Creates a new book and returns the new object as a json.                            | /book/create                   | POST   | `{ "title": string, "author": string, "isbn": string, "genre": string, "year": number(1-currentYear), "copies": number(1-35), "availableOnline": boolean }` |
| Book-Update     | Updates a book by its id and returns the new object as a json.                      | /book/update/{id}              | PUT    | `{"title": string, "author": string, "isbn": string, "genre": string, "year": number(1-currentYear), "copies": number(1-35), "availableOnline": boolean }`  |
| Book-Delete     | Deletes a book by its id.                                                           | /book/delete/{id}              | DELETE | NA                                                                                                                                                          |
| Book-Borrow     | A user can borrow a book. It returns a customer and book object as a json.          | /book/borrow/{userId}/{bookID} | PUT    | NA                                                                                                                                                          |
| Book-Return     | A user can return a borrowed book. It returns a customer and book object as a json. | /book/return/{userId}/{bookID} | PUT    | NA                                                                                                                                                          |
| Customer-Get    | Returns a customer using the given ID.                                              | /customer/{userID}             | GET    | NA                                                                                                                                                          |
| Customer-Create | Creates a new customer and returns the new object as a json.                        | /customer/create               | POST   | `{ "userID": string, "name": string }`                                                                                                                      |

## Libraries

- **express (4.18.3 and above):** API functionality.
- **mongoose (8.2.0 and above):** Connection with mongoDB.
- **cors (2.8.5 and above):** CORS enabling with express.
- **dotenv (16.4.5 and above):** Reading of `.env` files.
