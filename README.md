# Employee Managment System

### Technology:

<b>Frontend:</b>
* React.js
* Typescript
* Material UI

<b>Backend:</b>
* Node.js
* Express.js
* MongoDB
* Socket.io



### Features:
* Login
* Role base authentication
* Change password
* Forget password
* View Personal Information Details
* Edit some insensitive personal information
* View All Project Information
* Claim leave request
* Show the all leave request details
* Download payslip
* Real time notification
    * If Admin change any employee's profile, then he/she get notification.
    * That employee must be logged in. 
* Can see all notice
    * Can see all general notice
    * can see his/her personal notice
    * Can't see any other employee's personal notice

<b>Only Admin Features</b>
* View All employee's personal information details
* Add, Edit, Acive, Deactive and Delete employee's profile
  * Deactive users can't login in this system with correct credientials
* View all project details
* Add, Edit, Acive, Inactive and Delete project details
* Admin can resolve leave request.
     * Admin can't resolve his/her own leave request.
* Create notice for employee
   * Admin can send notice for all employee
   * Admin can send notice for specific employee using his/her email.
 
Note: 
* We have to create first admin from Database. We can use post man or direct mongo alts for this.
* To receive forget password email, employee's email address should be real. ( I add my email address for demonstration. Change the email address)

### How to run:
* Clone this repo
* Go to the root folder and run `npm install`.
* Go to the frontend folder and run `npm install`
* Create a `.env` file and input your cridentials
* `.env` file example:
```
PORT=
MONGO_URL=
JWT_KEY=
```
* Go to the mongo alts and connected your project to the database
* Run the backend and frontend
* Backend command for run the project
```
npm run dev
```
* Frontend command for run the frontend
```
npm run start
```
* Typescript run command
```
npm run watch
```
<br/>
<b>Improvement Scope:</b> I build this project from scratch and according to my raw idea. So, there are lots of improvement scope.
<br/>

* I used typescript and used dynamic type `any` in many places.
* Real time notification can be more updated and optimized. Specialy we can save all notifications in the database.
* I explore material UI here. Material UI can be managed in more professional way.
* Handle errors in more effecient way.
* This app can be more optimized.
* Sorting the the data table.

### Overview:
* Admin features short overview
[Admin.webm](https://user-images.githubusercontent.com/57568263/205641831-dcfc940c-af77-4fbd-9866-94bc4c7307a9.webm)

* Emolyee features short overview
[Employee.webm](https://user-images.githubusercontent.com/57568263/205646130-8dce344c-ad40-404b-af19-53b3f4bc1d36.webm)

### Purpose:
Learning

### Key Learning: 
* Typescript project setup
* Project feature design
* Material UI
* Forget password Workflow
* Role base features
* File uploads techniques
* Middlewires
* Schema desgin and more




