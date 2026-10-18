# Technical Documentation

## Project Overview

This project is a personal portfolio website developed using HTML, CSS, and JavaScript. It builds on Assignment 1 by adding interactive features and improving the user experience. The website includes information about me, my projects, my interests, and a contact form.

## Project Structure

`index.html` contains the structure and content of the website.

`css/styles.css` contains the styling, responsive design, and transitions.

`js/script.js` contains the JavaScript for the greeting, Show More / Show Less button, and contact form validation.

`assets/images` contains the images used for the projects.

`docs` contains the project documentation.

## HTML

The website is divided into About Me, Projects, Interests, and Contact sections. Navigation links are used to move between sections.

The About Me section includes a button that displays or hides additional information. The Projects section contains two projects with titles, descriptions, and images. The Contact section contains fields for name, email, and message, along with an area for displaying feedback.

## CSS and Responsive Design

CSS is used to style the navigation bar, sections, project cards, contact form, and buttons. Flexbox is used for the navigation bar and contact form.

Media queries are used to adjust the layout for different screen sizes. Smooth transitions were also added to buttons and project cards to improve the appearance when hovering over them.

## JavaScript and Interactive Features

JavaScript displays a greeting based on the current time. It also controls the Show More / Show Less button, allowing visitors to view additional information about my interests and goals.

The contact form uses JavaScript to check whether all fields are filled in and whether the email address has a valid format. If the input is invalid, an error message appears. If the input is valid, a confirmation message is displayed and the form fields are cleared. The form does not send messages to a server.

## Testing

I tested the Show More / Show Less button to make sure the additional information appeared and disappeared correctly. I also tested the contact form with empty fields, invalid email addresses, spaces, and valid inputs to check the feedback messages.

I checked the button and project card transitions and resized the browser to test the layout on smaller screens. I also checked that the new features worked without reloading the page unnecessarily.