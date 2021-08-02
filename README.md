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

## Find Inspiration

What makes me get up and learn coding is the idea that one day I can utilize what I’ve learned to create things relate to audio / sound. More specifically, I want to learn how to use AI in the creation of sound. I know it’ll take some time until I feel comfortable to venture off into that domain, but if there is one book that has inspired me recently it’s “The Artist In The Machine” by Arthur I. Miller. The book essentially highlights the various moments in history where computers have been used to create art. It tries to answer the question of whether computers can be creative?

I’ll reserve my opinion for another time, but the important takeaway is to allow yourself to want to be surprised.

If you’re interested, here is the link to the about page [About The Artist in the Machine](https://www.artistinthemachine.net/about/).

For the reasons above, I wanted to use sound in some sort of fashion when building my portfolio.

Per my research on portfolio design, I did not come across many developers utilizing a loading page, but for me it fit perfect.

First, if someone decides to use a loading page, it better be creative or you’re just wasting time. Second, if it so happens to be creative and the employer viewing it doesn’t want to wait and watch, then you and that employer aren’t meant to be.

Working through some Udemy courses, there was a project that showed how to create a block of small squares to light up with a random color whenever the users mouse moved across the square. I must have spent a good half hour just moving my mouse over the squares before thinking if there was a way to trigger sounds along with the colors. I started researching and realized there actually are ways and began to figure out how to code the two together.

In summary, I used Ableton to trigger a midi piano instrument to record piano notes. Each recording would represent a square block. When user pulls my portfolio up for the first time, there is a button that user needs to click on in order to gain access to my portfolio. I then created a random triggering function to choose a number between 1 & 64. Whenever a square gets triggered the color and the piano note associated with the square will continue to play until all the 64 squares have lit up. The audio generated is listening to a piano when all keys are being hit together. This is when user automatically gets redirected to my portfolios main page. To some this might be nothing special, but for me, this was everything.

### Portfolio Landing Page GIF

![alt text](./assets/gifs/Portfolio-Landing-Page.gif)
