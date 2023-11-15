<div align="center">
<img src="https://github.com/aidrecabrera/mapuan-liberate/assets/61798731/e86a9cca-40d2-4409-9de4-886b24364f24" style="height: 50vh" />
<h1>Liberated Mapuan</h1>
<p>It is a fundamental human right to express, but there is a risk of consequences when identity is known.</p>
</div>

Liberated Mapuan is a unique online platform tailored for the Mapúa Malayan Colleges Mindanao community, providing a space for students to connect, share thoughts, and engage in discussions anonymously. Inspired by the concept of 4chan, an anonymous imageboard website, Liberated Mapuan encourages free expression without the constraints of identity.

## Tenatative Features
1. **Anonymous Interaction:**
   - Mapuans can post and interact without revealing their identities, fostering open and honest communication.
2. **Discussion Threads:**
   - Structured boards cover diverse topics, from academics, campus life, personal, love-life, and the like, facilitating meaningful (or even dumb) conversations.
3. **Image Sharing:**
   - Anonymously share images (a key feature inspired by 4chan)
4. **User Moderation:**
   - Moderation tools ensure a safe environment, allowing users to report inappropriate content for admins to delete certain abusive contents.
     
## Purpose
Liberated Mapuan aims to break down barriers, providing a digital space where Mapúa Malayan Colleges Mindanao students can express themselves freely. Embracing anonymity, the platform encourages genuine connections, open discussions, and contributes to a vibrant online community. The idea behind this is driven by the pervasive use of anonymous freedom wall (e.g., NGL.link, MMCM Confessions, etc) from various school wherein students use it as a way to communicate with their community without sacrificing their identity. This project will adopt a MERN stack, a web development framework made up of the stack of MongoDB, Express.js, React.js, and Nodejs [1](https://www.mongodb.com/languages/mern-stack-tutorial).

## Technical Stack

![Technical Stack](https://github.com/mmcm-css/project-freedom/assets/61798731/9e8d0787-0cab-4dd2-87d3-00c81ff829b6)


# Project Structure

```powershell
Liberated-Mapuan
├───client <-- Frontend
│   ├───node_modules
│   ├───public
│   └───src
│       └───assets
└───server <-- Backend
├───bin
├───controllers
├───models
├───node_modules
├───public
│   ├───images
│   ├───javascripts
│   └───stylesheets
├───routes
└───views
```

### Frontend Dependencies
- vite
- react
  
### Backend Dependencies
- bcrypt: 5.1.1
- cookie-parser: 1.4.6
- express: 4.16.4
- jade: 1.11.0
- morgan: 1.9.1
- bcryptjs: 2.4.3
- debug: 2.6.9
- express-jwt: 8.4.1
- jsonwebtoken: 9.0.2
- body-parser: 1.20.2
- dotenv: 16.3.1
- http-errors: 1.6.3
- mongoose: 8.0.0

## Database Collection Schema
=======
```powershell
# Test login feature
Invoke-RestMethod -Uri http://localhost:3000/mapuan/login -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"identifier":"aidre@mmcm.com","password":"12345"}'
# Test register feature
Invoke-RestMethod -Uri http://localhost:3000/mapuan/register -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"username":"mmcm","email":"aidre@mmcm.com","password":"12345","isAdmin":false}'
# Test logout feature (Existing BUG in jsonwebtoken to be fixed)
Invoke-RestMethod -Uri http://localhost:3000/mapuan/logout -Method Post -Headers @{'Content-Type'='application/json'; 'Authorization'="Bearer $Token"}
```

### Fields

- **`username`**
    - Type: `String`
    - Required: Yes
    - Unique: Yes
    - Description: The username of the user.
- **`email`**
    - Type: `String`
    - Required: Yes
    - Unique: Yes
    - Description: The email address of the user.
- **`password`**
    - Type: `String`
    - Required: Yes
    - Description: The hashed password of the user.
- **`isAdmin`**
    - Type: `Boolean`
    - Default: `false`
    - Description: Indicates whether the user has administrator privileges.
- **`tokens`**
    - Type: `Array of Strings`
    - Description: An array to store multiple authentication tokens for the user.

### Implementation of the Model

```javascript
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  tokens: [{ type: String }],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
```

_Documentation and README.md is still in writing. It will be updated overtime per reiteration of SDLC._
