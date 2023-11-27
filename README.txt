PDF MERGER APP

STEP 1:- CREATE A FRONTEND WEBSITE WITH HTML,CSS AND ENSURE THAT ITS A BUILD FOR PRODUCTION FOLDER

STEP 2:- NOW "ASSETS" FOLDER MOVED OUT FROM ITS DEFAULT FOLDER "DIST" AND CHANGE THE NAME OF THE "DIST" FOLDER TO "TEMPLATES"

step 3:- now for backend server create a file named "server.js" in which express is used and also install nodemon for reloading of server automatically

step 4:- now make changes in form if you want to send data to the server like "method = post","action = /(untitled)","enctype =multipart/form-data "

step 5:- now create a app.(method) syntax in "server.js" and run all required functions you want to do with data 
            note:- to display data "console.log(req.data)" and also use multur express middleware to upload data in this pc


step 6:- now make another file "merge.js" for merging the files like this in this project using any js tool like pdf-merger-js

NOTE:- if CSS AND IMAGES ARE NOT DISPLAYING THEN MAKE A FOLDER IN WHICH ALL THE ASSSETS ARE USED Eg:-PUBLIC and make it static
 using syntax
    app.use('/static', express.static('assets'))
