# topcon-mirage

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)


### Topcon Solution
Full CRUD for todo applications, with labels.\
Labels are fetched during bootstrap of the application (`config/boostrap.js`).\
All helpers can be found in `api/helpers` this are the equivalent of services in Sails.

Application uses MySql 5.7, axios, and mocha with supertest for api testing.


### Run in docker
Make sure you have [docker-compose](https://docs.docker.com/compose/) installed and run `docker-compose up -d`.
You will notice a delay between mysql going up and the node application because mysql takes quite a bit to be ready to handle connections.

### Run test
Use `npm run custom-tests` to execute tests.

### TODO
- Had issues with the sailsjs orm mysql implementation not supporting authentication.  I think with a bit more time to search I can find a solution to support MySql8 authentication.
- Had issues with mocha and typescript. I could not get mocha to interpret TS files in the application.  So I switched back to javascript.
- Implement a completed boolean for the Todo model.
- Fix docker file to use a node user instead of running on root.
- Add more testing for the helpers.
