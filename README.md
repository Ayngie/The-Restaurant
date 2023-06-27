# Restaurangen

## Short description:

This was a group assignment in the Javascript (advanced course) at the front-end developer program at Medieinstitutet. The assignment was to build a fullstack booking app for a restaurant.

Collaborators were: Lisa Månsson Lindblom, Per Berge, Angelica Reuterswärd

## Techniques used (shields/badges)
![Git badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white/to/img.png) 
![VSCode badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white/to/img.png)
![Vite badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E/to/img.png) 
![ESLint badge](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white/to/img.png)
![Prettier badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E/to/img.png)
![HTML5 badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white/to/img.png)
![JavaScript badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E/to/img.png)
![TypeScript badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white/to/img.png)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB/to/img.png) 
![React Router badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white/to/img.png) 
![Styled Components badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white/to/img.png) 
![Axios badge](https://img.shields.io/badge/-AXIOS-yellow?style=for-the-badge&logo=appveyor/to/img.png) 
![NodeJS badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white/to/img.png) 
![Postman badge](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white/to/img.png) 
![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white/to/img.png) 
![Mongoose badge](https://img.shields.io/badge/-MONGOOSE-blue?style=for-the-badge&logo=appveyor/to/img.png) 
![Express badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white/to/img.png) 
![Nodemon badge](https://img.shields.io/badge/-NODEMON-orange?style=for-the-badge&logo=appveyor/to/img.png) 
![dotenv badge](https://img.shields.io/badge/-DOTENV-lightgrey?style=for-the-badge&logo=appveyor/to/img.png) 
![GitHub badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white/to/img.png)


---

## Git commit convention:
- :sparkles: (feat): - *introduces a new feature to the codebase*
- :memo: (docs): - *documentation / README*
- :recycle: (refactor): - *refactoring of code*
- :construction_worker: (build): - *project build-up*
- :bug: (fix): - *patches a bug in your codebase*
- :lipstick: (style): - *css/scss styling*
- :rewind: (revert): - *revert to previous code*

---

## Screenshot of project:
![Demonstration of project](/fed22s-therestaurant/src/assets/Restaurant.png?raw=true "Restaurant - screenshot of group project")

---


## Run locally:

### Clone the project

```terminal
  git clone https://github.com/Medieinstitutet/the-restaurant-grupp5
```


### Go to the project directory

```terminal
  cd the-restaurant-grupp5
```


### Back-end
Go to back-end directory:
```terminal
  cd fed22s-backend
```

Install dependencies:
```terminal
  npm i
```

Create .env file + contents:
```
Don't forget to create your own .env file in the root of the fed22s-backend folder, containing:

CONNECTION_STRING = <your mongoDb connection string>
PORT = 5000
```

Start back-end server:
```terminal
  npm run dev
```

### Front-end
Go to front-end directory
```terminal
  cd..
  cd fed22s-therestaurant
```
Install dependencies:
```terminal
  npm i
```
Start front-end server:
```terminal
  npm run dev
```

---

## Routes
Restaurant API routes are as follows:

### Admin Routes 

##### GET /api/v1/bookings/?s - Get all bookings by date

##### GET /api/v1/bookings/:bookingId - Get booking by id

##### PUT /api/v1/bookings/:bookingId - Update booking by id

##### DEL /api/v1/bookings/:bookingId - Delete booking by id


### Booking Routes (for guests)

##### GET /api/v1/bookings/?s - Get all bookings by date

##### GET /api/v1/bookings/:bookingId - Get booking by id

##### POST /api/v1/bookings - Create new booking

##### DEL /api/v1/bookings/:bookingId - Delete booking by id

---


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hi08v2nl)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11259596&assignment_repo_type=AssignmentRepo)
