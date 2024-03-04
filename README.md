# ACS Trassir API

![GitHub last commit](https://img.shields.io/github/last-commit/Nickitas/ACS_Trassir_API)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Nickitas/ACS_Trassir_API)

This application allows you to control Trassir Server via API.

<hr/>

<div id="header" align="center">
  <img src="https://github.com/Nickitas/Nickitas/ACS_Trassir_API/preview.jpg" width="100%"/>
</div>

## 🗂 About system :
Methods of interaction with the tracer database to manage and control access to the classroom.
The source files represent a program tool for working with Trassir Server (postgres) database.
All necessary functions can be found and activated in the root file src/index.ts.


## ⚙️ Project Deployment Instructions
1. Clone the repository:
```bash
git clone <url_репозитория>
```

2. Go to the project directory:
```bash
cd project-directory
```

3. Establish dependencies:
```bash
npm install
```

4. Create an .env file in the root of your project and add connection parameters to your PostgreSQL database:
```DATABASE_URL="postgres://<your_username>:<your_password>@<ip-addres>:<port>/<database_name>?schema=public"```

5. Запустите миграции для создания таблиц базы данных, если вы ее создаете сами:
```bash
npx prisma migrate dev
```
или 
```bash
npx prisma db pull
```
если таблицы уже созданы.

6. Generate Prisma Client:
```bash
npx prisma generate
```

7. Start the project:
```bash
npm run dev
```

8. The script will execute the database connection and the scripts specified in src/index.ts file.

## 💡 More info

- Check the prisma/schema.prisma file to define models and basic database configuration.
- Examine the project structure in the src/ folder to understand the application logic.
- Modify routes, controllers and services according to your needs.


### 📃 License
This project is distributed under the MIT license. More information can be found in the LICENSE file.