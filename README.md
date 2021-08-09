# curly-octo-guacamole

Assignment Summary: Portfolio Website Update #2

Developer: Mehdi Mehrabani

Portfolio Link: [Portfolio](https://mmehr1988.github.io/curly-octo-guacamole/)

For this weeks assignment, we were tasked with updating our initial portfolio website. The first time around, I was at the beginning of my bootcamp journey and there weren’t any projects to showcase. Since then, we've completed a handful of assignments and 1 group project that I’m proud of and want future employers to view.

Before attempting to build the first iteration of what my potential portfolio will look like, I went online to research the importance of a web developers’ portfolio. I took this assignment as an opportunity to test the things I’ve learned from both the bootcamp and self-study.

# Summary of Assignment

## Resources used to complete this assignment:

1. Bootcamp
2. Udemy
3. GoogleDev Tools
4. Bootstrap
5. Jquery
6. Youtube
7. Stackoverflow
8. Ableton [Digital Audio Workstation]

# Steps Taken to Complete Assignment

### Initial Steps

1. Review Homework Requirements
2. Choose CSS Framework
3. Choose Fonts & Color Theme
4. Gather Learning Material
5. Wireframing
6. Create Files & Structure Folder

## Homework Requirements

Update Portfolio For Completed Projects

### Requirement #1: Update Portfolio To Showcase Bootcamp Coursework

1. Project 1: DAHM

   a. Summary Of Project: Digital mixer which uses four imported youtube and allows users to adjust video parameters to create unique sounds.

   b. Github Repo: symmetrical-waddle

   c. Github Repository Link: [symmetrical-waddle Repo](https://github.com/mmehr1988/symmetrical-waddle)

   d. Github App Link: [symmetrical-waddle App](https://mmehr1988.github.io/symmetrical-waddle/)

2. Assignment 1: Code Quiz

   a. Summary Of Project: An app that cycles through questions and records user answers and outputs a score based on the time taken to complete quiz.

   b. Github Repo: miniature-telegram

   c. Github Repository Link: [miniature-telegram Repo](https://github.com/mmehr1988/miniature-telegram)

   d. Github App Link: [miniature-telegram App](https://mmehr1988.github.io/miniature-telegram/)

3. Assignment 2: Weather App

   a. Summary: A weather dashboard created using third party API which allows users to input city in which they want to get weather data.

   b. Github Repo: legendary-meme

   c. Github Repository Link: [legendary-meme Repo](https://github.com/mmehr1988/legendary-meme)

   d. Github App Link: [legendary-meme App](https://mmehr1988.github.io/legendary-meme/)

### Requirement #2: Update Github Profile

1. Update Github Profile Picture – I decided to use an avatar as my profile picture.

2. Biography – I decided to state where in the coding world I place myself and what my passion in life is. The result being, “Full stack developer who loves telling stories with sound.”

3. Github Profile README – While researching unique profiles to get inspiration, I came across this process of using a README.md as a message board. I decided I wanted to implement the same for my project.

   a. Badges For Github README Profile: The below Github repo walks you through how to add badges to your profile page. Combining the badges with `<a>` links, you can create a clickable link that redirects users.

   b. [Welcome! Badges 4 README.md Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile)

4. Historical Assignment File Updates – gitignore + MIT LICENSE

   a. gitignore: I recently learned the purpose of a gitignore file and how to ignore the macOS specific .DS_Store upon pushing repository updates. Having only included the file for our group project, I decided for consistency purposes to do the same for all previous repositories.

   b. MIT LICENSE: For the same reason as the gitignore file, I decided to go back and include the license for all previous assignments.

## CSS Framework: Bootstrap 5.0

Up until recently, I’ve forced myself to use pure CSS styling for all my work just to learn the blueprint of styling with pure CSS. However, with each passing week the assignments are demanding more time to be spent on the Javascript side and as a result I’ve had to start utilizing CSS frameworks to make up for the lost time.

For this iteration of my portfolio I’ve decided to go with Bootstrap 5.0. On their website getting started page, they have a download package with a bunch of templates that users can utilize as a starting point. Links below.

Bootstrap Website [Build fast, responsive sites with Bootstrap](https://getbootstrap.com/)

Bootstrap Getting Started Page [Download Page](https://getbootstrap.com/docs/5.0/getting-started/download/)

Bootstrap Template Download Link [Bootstrap Templates]](https://github.com/twbs/bootstrap/releases/download/v5.0.2/bootstrap-5.0.2-dist.zip)

I initially thought these types of CSS Frameworks would be able to solve any problem, however I soon learned that not everything is handed to you. Mistakes have been made when creating certain elements, and I’m ok with that. I know with time I will get better at using these frameworks, but the point is to force yourself to learn.

## Choose Fonts & Color Theme

I’ve been using google fonts family “Suez One” styling for the past couple of assignments and for me it just gives a playful feel that I relate to.

1. NAV: For the NAV Bar, I used a purple color. I didn’t want to go with the usual black or white and for me purple just did the job.

2. Section Titles: Mustard yellow in my opinion looks good on both black and white backgrounds.

3. About Content: I used a combo of pink and green to highlight important text. For the main text, I used black when in light mode and white when in dark mode. See below.

4. Dark & Light Mode: I've seen the dark mode functionality be used on many websites. As a result, I wanted to learn how they did this so I decided the best way to learn is to try to implement it. For this reason, at the end of the NAV bar, I incorporated a button to allow users to switch between dark and light mode.

## File Structure

1. File: Index.html
2. File: LICENSE
3. File: README.md
4. Folder: assets

   a. Folder: audio

   - All piano audio file recording used for landing page

   b. Folder: css

   - File: style.css

   - File: queries.css

   c. Folder: documents

   - File: resume

   d. Folder: gifs

   - File: gif of portfolio

   e. Folder: img

   - Folder: avatar

     - File: A 200x200 avatar photo used in personal portfolio

   f. Folder: js

   - File: script.js

5. Folder: vendors

   - File: normalize.css

## Process Of Writing

1.  `<head>`

    - In the head of the document you will find the following `<link>`

      a. Bootstrap 5.0
      b. Jquery
      c. Google Fonts
      d. Normalize CSS
      e. style.css
      f. queries.css

2.  `<section>` | Page Load

    - The page load section is separated into two components. The first is related to the square and audio elements. The second is related to the buttons that allow for browser page switch.

3.  `<header>` + `<nav>`

    [A] NAV Link Color Change vs. Scroll Position

    a. For the first iteration of my portfolio, I failed at implementing a sticky navigation. At the time we had not learned any javascript and it made coding the navigation that much harder. However, this time around I'm proud to say I was able to code the changing of colors properly.

    b. Calculating Section Position Relative To Browser - I was able to pull the section heights and positiong in the browser to change the color of each link when the nav bar reach each section.

4.  `<figure>`

    - For the background image I used the same photo as last time which showcases my brother and I playing for our residency at the TheShed.

    - Check out link for more info (https://theshed.org/program/103-open-call-saint-abdullah)

5.  Section: About

    - The About section did not change much. I liked the way I had it before except that I moved the resume icon to the top right of the section. I also changed the avatar to be less pixelated.

6.  Section: Work

    - For this section I researched if there was a way to insert my project and assignments directly into my portfolio. For me this made the most sense in that user can directly test out the app without moving to a new webpage. I also used the github icon on the bottom left corner of each `<object>` just in case user wants to go to the repo page.

7.  Section Contact:

    - I wanted to implement a direct way for user to be able to contact me and landed on created a contact form to be filled out and sent to my personal email once submit button is clicked.

    - As of right now, it is not working, and this is due to time constraints and level of server knowledge. I will use this method in the future and have it working.

    - In addition, I used the same methodology as last time where I used Icons to link my online presence.

# GIF Of Final Portfolio Update #2

![alt text](./assets/gifs/Portfolio-Update-2.gif)
