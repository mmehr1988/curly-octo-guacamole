# curly-octo-guacamole

Assignment Summary: Portfolio Website Update #2

Developer: Mehdi Mehrabani

Portfolio Link: [Portfolio](https://mmehr1988.github.io/curly-octo-guacamole/)

For this weeks assignment, we were tasked with updating our initial portfolio website. The first time around, I was at the beginning of my bootcamp journey and there weren’t any actual projects I could highlight. Since then, I’ve learned many lessons that have resulted in frustration on some nights, but also exhilaration on other nights. The biggest lesson has been not to give up and just continue to research the problem until you have found a solution or a creative detour. It’s in these scenarios that I’ve learned the most.

The accumulation of all these late nights have resulted in the completion of multiple projects that I’m proud of and want future employers to view. Looking back, I fully understand the importance of each assignment and how each one contributes to the learning of coding fundamentals.

Before attempting to build the first iteration of what my potential portfolio will look like, I went online to research the importance of a web developers’ portfolio. I took this assignment as an opportunity to test the things I’ve learned from both the bootcamp and self-study.

In summary, a web developers’ portfolio should at minimum have 3 sections:

1. About Me: Who are you?
2. Projects: What can you do?
3. Contact Me: How can we reach?

For more information, check out [Ultimate Guide to Creating a Programmer Portfolio](https://www.springboard.com/blog/careersmithing/programmer-portfolio/).

Applying the same methodology as I did the first time, I wanted to use this opportunity to allow myself to try out the new skills that I’ve acquired since then.

It should be noted that I could have simply kept my portfolio very similar to the first iteration but that would be playing it safe. These assignments are testing ground for new ideas and I wanted to make sure no matter what, I stay true to who I am.

# Summary of Assignment

## Resources used to complete this assignment:

1. Bootcamp
2. Udemy
3. GoogleDev Tools
4. Bootstrap
5. Jquery
6. Youtube
7. Ableton [Digital Audio Workstation]
8. Stackoverflow

# Steps Taken to Complete Assignment

## Initial Steps

1. Find Inspiration
2. Choose CSS Framework
3. Choose Fonts & Color Theme
4. Review Homework README.md
5. Gather Learning Material
6. Wireframing
7. Create Files & Structure Folder

## 1. Find Inspiration

What makes me get up and learn coding is the idea that one day I can utilize what I’ve learned to create things relate to audio / sound. More specifically, I want to learn how to use AI in the creation of sound. I know it’ll take some time until I feel comfortable to venture off into that domain, but if there is one book that has inspired me recently it’s “The Artist In The Machine” by Arthur I. Miller. The book essentially highlights the various moments in history where computers have been used to create art. It tries to answer the question of whether computers can be creative?

I’ll reserve my opinion for another time, but the important takeaway is to allow yourself to want to be surprised.

If you’re interested, here is the link to the about page [About The Artist in the Machine](https://www.artistinthemachine.net/about/).

For the reasons above, I wanted to use sound in some sort of fashion when building my portfolio.

Per my research on portfolio design, I did not come across many developers utilizing a loading page, but for me it fit perfect.

First, if someone decides to use a loading page, it better be creative or you’re just wasting time. Second, if it so happens to be creative and the employer viewing it doesn’t want to wait and watch, then you and that employer aren’t meant to be.

Working through some Udemy courses, there was a project that showed how to create a block of small squares to light up with a random color whenever the users mouse moved across the square. I must have spent a good half hour just moving my mouse over the squares before thinking if there was a way to trigger sounds along with the colors. I started researching and realized there actually are ways and began to figure out how to code the two together.

In summary, I used Ableton to trigger a midi piano instrument to record piano notes. Each recording would represent a square block. When user pulls my portfolio up for the first time, there is a button that user needs to click on in order to gain access to my portfolio. I then created a random triggering function to choose a number between 1 & 64. Whenever a square gets triggered the color and the piano note associated with the square will continue to play until all the 64 squares have lit up. The audio generated is listening to a piano when all keys are being hit together. This is when user automatically gets redirected to my portfolios main page. To some this might be nothing special, but for me, this was everything.

See below GIF showcasing the music square color landing page.

### Portfolio Landing Page GIF

![alt text](./assets/gifs/Portfolio-Landing-Page.gif)

## CSS Framework: Bootstrap 5.0

Up until recently, I’ve forced myself to use pure CSS styling for all my work just to learn the blueprint of styling with pure CSS. However, with each passing week the assignments are demanding more time to be spent on the Javascript side and as a result I’ve had to start utilizing CSS frameworks to make up for the lost time.

For this iteration of my portfolio I’ve decided to go with Bootstrap 5.0. On their website getting started page, they have a download package with a bunch of templates that users can utilize as a starting point. Links below.

Bootstrap Website [Build fast, responsive sites with Bootstrap](https://getbootstrap.com/)

Bootstrap Getting Started Page [Download Page](https://getbootstrap.com/docs/5.0/getting-started/download/)

Bootstrap Template Download Link [Bootstrap Templates]]( https://github.com/twbs/bootstrap/releases/download/v5.0.2/bootstrap-5.0.2-dist.zip)

I initially thought these types of CSS Frameworks would be able to solve any problem, however I soon learned that not everything is handed to you. Mistakes have been made when creating certain elements, and I’m ok with that. I know with time I will get better at using these frameworks, but the point is to force yourself to learn.

## Choose Fonts & Color Theme

I’ve been using google fonts family “Suez One” styling for the past couple of assignments and for me it just gives a playful feel that I relate to. In terms of color, I really enjoy playing around with color combo’s.

1. NAV: For the Nav Bar, I used a purple color. I didn’t want to go with the usual black or white and for me purple just did the job.

2. Section Titles: mustard yellow

3. About Content: I used a combo of pink and green. Green just signifies peace and pink just takes you back to a childish like feeling.

4. Dark & Light Mode: I’ve seen on many websites where they’ve used a button to allow users to either view their webpage in dark or light mode. I wanted to learn how they did this so I decided the best way to learn is to try to implement it. For this reason, at the end of the nav bar, I incorporated a button to allow users to switch between dark and light mode.

5. Icon Colors vs. Contact Page: Instead of using plain writing to provide contact information. I decided to utilize icons to take user to my contact information pages. For each icon I researched the color code. For example, LinkedIn hex code is #006192.
