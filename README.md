<p align="center">
  <img src="https://user-images.githubusercontent.com/82476805/171954276-4b4a2bc8-07b6-45a5-8919-29d6b8da7f38.png" />
</p>

# Netflix API by Etho / McFadyen - Bootcamp
Project create with [Node.js](https://nodejs.org/en/docs/)

This project is the back-end made for this [Front-End](https://github.com/larissakoliveira/netflix-react-web), to make a full stack application.

### To install all required dependencies use <br>
```npm i```
<br>
### To start the app <br>
```npm start```<br>

### Table of Contents
=================
   * [Description](#Description)
   * [API](#API)
   * [Techs](#Techs)
   * [Status](#Status)
   * [Author](#Author)
 
### Description
# Netflix Project

This project is a simple clone of Netflix. It is being done during an incredible bootcamp by Etho / McFadyen. 
It is being developed in accordance with **best practices** of directory/files, structures and coding.

### API 
#### Diagram
![image](https://user-images.githubusercontent.com/82476805/174491343-a25bb97d-2ef0-48d6-bb9a-754d2f5e0947.png)

#### Endpoints

#### POST /user
<p>Correct request with all fields required</p>
![image](https://user-images.githubusercontent.com/82476805/174492787-b32abae3-9c23-41e8-8940-2d2e8f221ec7.png)
<p>Password does not meet minimum security requirements</p>
![image](https://user-images.githubusercontent.com/82476805/174492809-89abb621-51d2-41df-a19c-127fb303a8af.png)
<p>User already exists</p>
![image](https://user-images.githubusercontent.com/82476805/174494245-190074c1-c524-47a3-aafa-7058ab654c0e.png)

#### POST /auth 
<p>Correct request with all required fields</p>
![image](https://user-images.githubusercontent.com/82476805/174492843-25de9927-e1a3-4c4f-831f-ba5acf55385a.png)
<p>Incorrect password</p>
![image](https://user-images.githubusercontent.com/82476805/174492862-6626fb97-7d90-4fe1-9c56-6edbf5120ecd.png)

### **Authentication token required for all endpoins below**
#### POST /shows
<p>Correct request with all required fields</p>
![image](https://user-images.githubusercontent.com/82476805/174492967-20811844-649c-480e-bec7-bdb4a1875eca.png)
<p>Request missing any field</p>
![image](https://user-images.githubusercontent.com/82476805/174493512-bb8951e2-b638-46d4-bc10-d1388e0d83ca.png)

#### GET /shows
![image](https://user-images.githubusercontent.com/82476805/174493732-15dc3273-7cdd-4aaf-95cf-0e7f996e6bcb.png)

#### GET /shows/id
![image](https://user-images.githubusercontent.com/82476805/174493719-67f677dc-204a-4719-8188-c30319efa7a4.png)

#### PATCH /shows/id
<p>Show id exists</p>
![image](https://user-images.githubusercontent.com/82476805/174493996-782c75d9-1040-470e-a5f8-a412ed045270.png)

<p>Show id does not exist</p>
![image](https://user-images.githubusercontent.com/82476805/174493789-73f11fc5-f150-475d-865e-1fd2256bc5d9.png)


#### DELETE /shows/id
<p>Show id exists</p>
![image](https://user-images.githubusercontent.com/82476805/174494016-71dacf80-6622-481c-a6d8-5c397616ac3a.png)

<p>Show id does not exist</p>
![image](https://user-images.githubusercontent.com/82476805/174494004-10db31c6-2989-457e-86c3-d28d04f34ee2.png)

#### POST /list
<p>Add show by its id</p>
![image](https://user-images.githubusercontent.com/82476805/174494063-049b32bd-e665-476b-abee-a479c388bfc2.png)

<p>Show id does not exist</p>
![image](https://user-images.githubusercontent.com/82476805/174494035-6b3eba66-c327-4e32-a140-2aa735964a65.png)

#### GET /list
![image](https://user-images.githubusercontent.com/82476805/174494113-398ec4bc-6735-4004-891f-fd3e43092cfa.png)

#### DELETE /list
<p>Show deleted from user's list</p>
![image](https://user-images.githubusercontent.com/82476805/174494148-45ed71cf-7846-4178-83d9-5ab503d87f0d.png)

<p>Show id does not exist</p>
![image](https://user-images.githubusercontent.com/82476805/174494118-aaf01b4a-e0c2-48c5-84ea-b2290f32e569.png)

#### POST /episodes
<p>Correct request with all required fields</p>
![image](https://user-images.githubusercontent.com/82476805/174494210-d5f9e2bd-59cf-43fe-9875-3363e96ed844.png)
<p>Show id does not exist</p>
![image](https://user-images.githubusercontent.com/82476805/174494263-fc079a1f-b46b-49f3-bd00-8485c810ca65.png)
<p>Request missing any field</p>
![image](https://user-images.githubusercontent.com/82476805/174494289-18e1a85a-21d3-4aff-9d06-8af0ed6b5c95.png)


### Techs

**Server:** 
   * [Node.js](https://nodejs.org/en/docs/)
   * [Typescript](https://www.typescriptlang.org/docs/)
   * [Express.js](https://expressjs.com/pt-br/)
   * [Typescript](https://www.typescriptlang.org/docs/)
   * [MySQL2](https://www.npmjs.com/package/mysql2)
   * [JWT](https://jwt.io/)
   * [JOI](https://joi.dev/api/)
   * [TypeORM](https://typeorm.io/)
   * [Bcrypt](https://www.npmjs.com/package/bcrypt)
   * [Nodemon](https://www.npmjs.com/package/nodemon)
   * [Passport.js](https://www.passportjs.org/packages/passport-npm/)
   * [Eslint](https://eslint.org/)
   * [Morgan](https://expressjs.com/en/resources/middleware/morgan.html)
   * [Swagger](https://swagger.io/docs/)
   * [Jest](https://jestjs.io/pt-BR/)

 ### Status
 
 <h4 align="center"> 
	🚧  Project 🚀 under construction! coming soon...  🚧
</h4>

### Author
---
Made with ❤️ by Larissa Oliveira 👋🏽 Get in touch!

<a target="_blank" href="https://www.linkedin.com/in/larissakoliveira/"> Linkedin 
	
</a>
