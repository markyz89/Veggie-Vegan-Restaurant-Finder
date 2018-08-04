# Edinburgh Maps Project

This web based app helps you find the best vegan or vegetarian restaurants in the city of Edinburgh.

On the left hand side of the app is sidebar containing a list of locations, which can be filtered using the text input at the top of the sidebar. If you filter the locations, the marker icons on the map will also be filtered in real time.

Clicking on either the marker or the name of the restaurant in the list will bring up more details about the restaurant.

## Instructions

To install this web app, simply run 'npm install' in your terminal to install the project's dependencies, then enter 'npm start' (or 'yarn start' if you have yarn installed on your machine) to run the application.

The project includes a service worker, which will work in production build on port 5000, meaning parts of the project not dependant on retreiving fresh data from API calls should work.

## Contributing

This app uses the react-google-maps library to provide a wrapper to load the map.
The map is provided by the Google Maps API.
The locations and information about them come from the Foursquare API.

## Contributing 

This is an assessed project for the Udacity Nanodegree programme so I will most likely not be accepting pull requests as that would probably be considered cheating.

##Acknowledgements

Initial help loading the map from this article from Yelstin Fernandes on Medium
//https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb

Further help understaing the library and markers from
https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad

Help changing the title of the iframe from this slack thread
https://googledevndscholars.slack.com/archives/CA30LMHK8/p1533299284000145

Concept of Error boundaries learned here
https://stackoverflow.com/questions/36897434/error-handling-in-react-best-practices

Text filtering from Tyler McGennis, Udactiy React Fundamentals Course Lesson 3.7

And Udacity, for settting the criteria for this project.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



