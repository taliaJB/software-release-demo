# Open Source / Team Work Demo

## Prerequisites

- Fork the repo to your own account

- Clone the repo to your local machine

```bash
git clone https://github.com/assafushy/software-release-demo.git
```

- install dependencies

```bash
npm i install
```

## Instructions

### Stage 1: Contributing

- Create a new branch

```bash
git checkout -b <branch-name>
```

- Add your route to the routes folder
- Test your route - by running the server and sending a request to your route

```bash

npm start
curl http://<your-ip>:3000/<your-route>

```

### Stage 2: Testing your docker file

- Build your docker image

- Run your docker image

### Stage 3: Pushing your code to Github

- Push your code to your forked repo on Github
  - for this you will need create a token and sign in from your terminal

```bash
git push origin <branch-name>
```

### Stage 4: Install a private runner

- Go to your forked repo on Github and go to Settings -> Actions -> Runners
- Follow the instructions to install a private runner on your local machine
- Run the runner(Not in Service mode)

### Stage 5: Create a pull request to the original repo

- Wait for the pipeline to complete - test your change on your machine

### Stage 6: Merge your pull request

- wait for the pipeline to complete - test your change on our Production
