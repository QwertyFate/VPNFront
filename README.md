# Overview Document

# Task: Responsive page with popup

## Technologies Used

### - **Frontend Framework - React JS**
-   I used this framework because, first its easy to use when there is a repetitive component, then its for the mobile part wherein you tapped then logos to show their details react's useState is great for this kind of functions, also in countdown in popup, I used react's hooks for it to function without the need to re-render the page every second. 

### - **CSS Framework - Tailwindcss**
- I am used to using tailwind because you can troubleshoot and adjust items faster also i sucked at naming classes 

### - **Icons - react-icons library**
- using this library because it compiled all the free icons in the net from font awesome to bootstrap icons

## Key Decisions and Optimizations

### - **Card Component for Desktop/Tablet**
- since its almost the same minus the visit website being below the details, i create this component so that if the admin or client wanted to add another service, he can easily update the array in the data file to add another entry, having a reusable components makes it easier for the client to update the website without having the need of a developer

### - **Card Component for Mobile**
- i create a different component for mobile for easier troubleshooting and since im using tailwind makes it easier not having a 7 line classes,

### - **Rendering**
- I used react's hook useState to utilize reacts function to render only a certain part of the page this makes it easier to create the mobile version of the page

### - Popup Implementation
- I used react's hook useEffect

```javascript
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowpopup(true);
    },5000)

    return () => clearTimeout(timer);
  },[])
```
- This will count 5 seconds before showing the popup

### - Countdown
- I used javascript Date and String method to create the countdown effect computing the hours, minutes, seconds left in the timer then
i used setInterval inside the useEffect to change the value of a state that has the remaining time i used 1000ms for every second it updates

```javascript
useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        },1000);

        return () => clearInterval(timer);
    },[Timer]);
```
## Run the code

- use this command in the command propmt to start the app

``` npm start ```
- or go to this website

```https://vpn-front-two.vercel.app```
