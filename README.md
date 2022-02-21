# server-deployment-practice

I'm creating and deploying a web server using CI and CD to get used to the general process of building and deploying servers.

## Task Submission

1. ![Development Server](https://karamalqinne-server-deploy-dev.herokuapp.com/)
2. ![Production Server](https://karamalqinn-server-deploy-prod.herokuapp.com/)
3. ![PR Link](https://github.com/karamalqinneh/server-deployment-practice/pull/3)
4. ![Github Actions](https://github.com/karamalqinneh/server-deployment-practice/actions/workflows/node.js.yml)

## Task Notes

To use this App you should

1. Clone this repo to your local machine.
2. Run the command "npm install" in your terminal to install all the dependencies.
3. Customize the server routes as you prefer.
   1. index.js contains the exported server from server.js
   2. to modify the end points and their responses edit the route handlers in server.js
4. Customize the unit tests as you prefer (the unit tests were done using the jest package)

   1. install jest and supertest as a devDependencies. Using the command npm i –D <packagename>
   2. create a file called <servername>.test.js and export the server to it.
   3. Require supertest, supertest don’t run your server although it runs a mock server to test your server against the unit tests)
   4. Follow the following templat for writing the test

   ```
   describe("test suit name", () => {
   it("test name", () => {
       expect(value).toEqual(outputValue)
   });
   it("example test /", async () => {
       const response = await request.get("/");
       expect(response.text).toEqual("home route");
   });

   });

   ```

   5. In package.json modify the scripts.test to “jest” this makes the command npm test runs the jest test for you.
   6. If the test is passed you are good to go.

5. Add a new action to your github repo and make sure it follows [main, devBranch1, devBranch1, ...]
6. Before starting all your work hould be done on a seperate branch (let's call it dev as I did).
7. If all the test are passed deploy your project.
8. If the deployment is successful create a PR from the dev to main and merge it.
9. Deploy the main branch as your production deployment.
