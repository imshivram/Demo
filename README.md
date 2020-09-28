About:
--------------------------------------------------------
A simple web app for adding and searching movies.


Steps for Running spring-boot
--------------------------------------------------------
Go to root folder and run following command to start server

./mvnw spring-boot:run

Server will start to run in  http://localhost:8080


API Information
--------------------------------------------------------


Fetch All Movies

URL : v1/movies

Method: GET

[
    {
        "id": 1,
        "name": "Movie 2343asdf",
        "release_date": "2020-02-12",
        "categories": [
            "Thriller",
            "Action"
        ],
        "links": [
            {
                "href": "http://localhost:8080/v1/movies/1",
                "rel": "self",
                "method": "GET",
                "mediaType": "application/json"
            }
        ]
    }
]


Fetch  Movies by id

URL : v1/movies/1

Method: GET

{
    "id": 1,
    "name": "Movie 2343asdf",
    "release_date": "2020-02-12",
    "categories": [
        "Thriller",
        "Action"
    ],
    "links": [
        {
            "href": "http://localhost:8080/v1/movies/1",
            "rel": "self",
            "method": "GET",
            "mediaType": "application/json"
        }
    ]
}


URL : v1/movies

Method: POST


Add Movie(s):

[
  {
    "name": "Movie 2343asdf",
    "release_date": "2020-02-12",
    "categories": [
      "Action",
      "Thriller"
    ]
  }
]


Search Movie:

URL : v1/movies

Method: GET

params: categories, name , from_date &  to_date



