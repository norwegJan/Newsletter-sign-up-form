# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./assets/images/Screenshot%202026-02-13%20at%2019.24.02.png)

### Links

- Solution URL: [solution URL](https://github.com/norwegJan/Newsletter-sign-up-form)
- Live Site URL: [live site URL](https://norwegjan.github.io/Newsletter-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Custom JavaScript

### What I learned

The main focus of this challenge was to set up a simple sign-up form and implement input validation with JavaScript. Getting the input validation correct was of course the most challenging part here, as this was entirely new territory for me. So I spent some good amount of time reading up on MDN, as well as watching several tutorials, before I finally managed to wrap my mind around how input validation works (within the confines of client-side JS). But as always when struggling with new concepts, it's very satisfying when it finally clicks!

I won't claim that I understand everything 100%, but working out a solution on this challenge I did get a much better understanding of:

- How if-conditionals works
- How callback functions work
- How JS works well in concert with HTML attributes in order to dynamically manipulate the content and/or the styling
  (e.g.: adding/removing/toggling classes in order to change styling of elements).

On the CSS-side I also learned some new concepts, mainly how pseudo-elements works and how they can be very helpful when facing tricky layout situations. In this case I ended up adding the list-SVGs as pseudo-elements on the the <li>-items as this worked much better than having the SVGs as "default HTML-bullets".

Finally, working on this challenge really reinforced my understanding flexbox; how I can take advantage of this in order to get full controll on the responsivity on card components such as this!

### Useful resources

- [MDN Web form guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) - Helped me out with the basics of setting up forms in HTML, how to style them, as well as explaining client side validation.
- [Bro Code Learn HTML forms](https://www.youtube.com/watch?v=zIN54lhJtQU) - Also a very helpful resource for learning HTML forms.
- [Florin Pop JavaScript Client-side Form Validation](https://www.youtube.com/watch?v=rsd4FNGTRBw) - This tutorial by Florin Pop was of tremendous help for me, helping me understanding JavaScript Client-side Form Validation! I used his "recipe" as the main reference when working out my own solution.

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use: I use ChatGPT.
- I use ChatGPT to help me out with debugging and assistance when I get stuck; I always ask it to provide me with clear and concise ELI5-style explanations on WHY I'm stuck, WHAT need fixing, and HOW I can fix the problem. If I need I step out and read up on MDN and/or search up in-depth tutorials on any given topic/concept I need to understand better.

## Author

- Frontend Mentor - [@norwegJan](https://www.frontendmentor.io/profile/norwegJan)
