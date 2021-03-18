# Word-Wolf-Multiplayer-Game
Word Wolf is a game where. Here is the rulebook for more info: [https://boardgamegeek.com/boardgame/266098/word-wolf](https://boardgamegeek.com/boardgame/266098/word-wolf)

## Word Wolf Features


## Word Wolf Rules
- Every player is given a word. One player receives a different word from the others. People vote on who has the different word.
- In the Describe phase, everyone says something about their word (blend in if you believe you are the minority).
- In the Discussion phase, everyone discusses whose answer is the most suspicious
- In the Death phase, everyone votes or skips.
- Phases repeat in the order Describe, Discussion, Death

## Coming Soon Balancing
- More people means more word info making it easier for the minority. Scaling the minority will be a next step.
- 

##  Changes from Generated Chatroom 
- removed /client/ to remove Next.js SSR & Reactstrap 
	- Reactstrap - layout components do not work with Next.js
	- Next.js - SSR results in styled-components & material-ui/core giving errors during development
		- Do not need SSR for this app since I have a server, so Next.js is compiled into a build anyways
- `npx create-react-app client`
- added @material-ui/core 

## Next.js / Node.js Chatroom README
Created a Next.js/Node.js SocketIO Chatroom

- Initialized chatroom projec with tutorial here: [https://dev.to/kamo/simple-react-based-chat-application-1p0](https://dev.to/kamo/simple-react-based-chat-application-1p0)
- Fixed WebSocket CORS here: [https://socket.io/docs/v3/handling-cors/](https://socket.io/docs/v3/handling-cors/)
- Deployed to Heroku with article here: [https://jtway.co/deploying-subdirectory-projects-to-heroku-f31ed65f3f2](https://jtway.co/deploying-subdirectory-projects-to-heroku-f31ed65f3f2)

## Deploying App
- Deployed Next.js client to Netlify
  - base directory: `/client/`
  - build command: `npm run build && npm run export`
  - publish directory: `/client/build`
  - Environment Variables:
    - set `API_URL: heroku_url`
    - set `NODE_ENV: production`
- Deployed Node.js server to Heroku
  - install Heroku CLI
  - run in root `heroku create`
  - deploy /server/ folder to Heroku
    - `git subtree split --prefix server -b deploy`
      - creates branch, deploy, with /server/ content
    - `git push heroku deploy:master`
      - pushes branch deploy to heroku
