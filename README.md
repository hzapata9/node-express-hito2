<a name="readme-top"></a>

# node-express-hito2. For Hito 4 use branch: node-express-hito4

> Aplicacion Node y Express con Sequelize

## Built With

- Node
- Express
- Typescript
- Sequelize
- Postgres


## Live Demo

 No Available

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
 
--Npm 

--Postgres 

--Text editor (VsCode) 

--DBeaver (database manager) 

### Install

1. Clone the repo
   ```sh
   git clone https://github.com/hzapata9/node-express-hito2.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Script for create Tables
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--DROP TABLE IF EXISTS users; 

CREATE TABLE TEAM (
    NAME	VARCHAR(100) PRIMARY KEY UNIQUE,
    CITY	VARCHAR(100) NOT NULL,
    OWNER	VARCHAR(100) NOT null,
    PASSWORD VARCHAR(200) NOT null
);

CREATE TABLE PLAYER (
	IDPLAYER 	UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    NAME 		VARCHAR(100) NOT NULL,
    NUMBER		smallint NOT NULL,
    ADDRESS 	VARCHAR(200) NOT null,
    TEAM 		VARCHAR(100) NOT null REFERENCES TEAM(NAME)
);
```

3. Json for Team
```Json
[
  {
    "name": "Lakers",
    "city": "Los Angeles",
    "owner": "Jerry Buss",
    "password": "purpleandgold"
  },
  {
    "name": "Celtics",
    "city": "Boston",
    "owner": "Wycliffe Grousbeck",
    "password": "greenandwhite"
  },
  {
    "name": "Knicks",
    "city": "New York",
    "owner": "James Dolan",
    "password": "blueandorange"
  },
  {
    "name": "Jazz",
    "city": "Utah",
    "owner": "Pepe Mario",
    "password": "whitebrown"
  },
  {
    "name": "Bronx",
    "city": "Santiago",
    "owner": "Oscar Oscar",
    "password": "greenwhite"
  }
]
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage

1.Run project

```sh
 npm run dev
```

2.Test Endpoint file collection for Thunder Client 
(Import in Visual Code, Tab Collection, use option import)

https://github.com/hzapata9/node-express-hito2/blob/node-express-hito4/data/thunder-collection_Teams.json


3.Test Endpoint examples

Request "GetAllTeams"
URL: http://localhost:3000/api/v1/teams
Body: N/A


Request "DeleteTeamByName"  (Deleting Team "Jazz")
URL: http://localhost:3000/api/v1/teams/Jazz
Body: N/A


Request "CreateTeam" (Create Team "Jazz")
URL: http://localhost:3000/api/v1/teams/create
Body: ```Json
{
  "name": "Jazz",
  "city": "Utah",
  "owner": "Pepe Mario",
  "password": "whitebrown"
}
```


## Authors

👤 **Hector Zapata**

- GitHub: [@hzapata9] (https://github.com/hzapata9)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!



## Show your support

--

## Acknowledgments
