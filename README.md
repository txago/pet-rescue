# petrescue

This project was taken from the OmniStack Week 11, a challenge created by brazilian bootcamp [Rocketseat](https://github.com/Rocketseat), in which we create a web and mobile app using **Node.js, React.js and React Native**.

## The project

**petrescue** is a platform that was created with the aim of bringing rescuers and people interested in adopting pets together. It's a custom version from the OmniStack platform, since their solution was focused on NGOs.

## The challenge

I started developing the back-end with **Node.js and Express**, creating the database, routes and testing them with Postman. Following, I designed a new UI and built the front-end with **React.js**, creating the pages and components with React Bootstrap, so that I could have a responsive website faster (differently from the class). On the third day, I built the mobile application using **React Native and Expo**, so that I could emulate the app with any smartphone while using the database. Finally, I added some validations and wrote unit and integration tests with **Jest** for the back-end.

Visit the final app at https://petrescue-frontend.herokuapp.com/.

## How to use

You'll need Node.js and npm installed on your computer.

### Setting up the server

```
git clone https://github.com/txago/pet-rescue.git
cd pet-rescue/backend
npm install
npm dev
```

### Running the web app

```
cd pet-rescue/frontend
npm install
npm start
```

### Running the mobile app

```
npm install -g expo-cli
cd pet-rescue/mobile
npm install
npm start
```
