# UsersManager
User management application. It allows you to display weather in Yahoo's user preview. Additionally, the user can generate a business card based on the profile. The application has a password generator, configurable.

**Demo:** [UsersManager](https://laughing-yalow-ac3b40.netlify.com)

## Instalacja
``` bash
# clone git repo
git clone https://github.com/sirmarbug/users-manager.git

# install dependencies
npm install

# Run local server
ng serve

# Build application
ng build
```

## Functionality
* adding, editing, deleting and previewing users
* generating passwords specifying whether characters should be repeated or not
* administrator account has the ability to set passwords to users
* weather preview in the user's profile based on the user's location
* weather preview available after entering the password
* weather is taken from Yahoo
* user data stored using Cloud Firestore
* after generating a new password by the admin, an email is sent to the user with a new password
* sending emails is done using SendGrid
* generating a business card in pdf format based on the profile view

## Technologies
* Angular 8
* Bootstrap 4
* Firebase
* NodeJS
* ExpressJS