# Next-Chatroom
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