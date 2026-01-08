# JavaScript API Interaction — Country Search App (HW-10) 🌍

A web application that fetches data from a public REST API and dynamically renders information about countries based on user input.

---

### 📝 Project Overview
This project focuses on the fundamentals of network requests in JavaScript. The main task was to implement a search feature that interacts with the **REST Countries API**, handling different response states (single result, multiple matches, or no matches found).

### 🛠 Tech Stack
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Lodash](https://img.shields.io/badge/Lodash-3492FF?style=flat-square&logo=lodash&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

### 🔑 Key Implementations & My Work:
- **HTTP Requests:** Implemented the Fetch API to retrieve data from an external server.
- **Search Optimization:** Integrated **Lodash.debounce** to limit the frequency of API calls while the user is typing, optimizing network performance.
- **Dynamic Content Rendering:** Used template literals to build and inject HTML into the DOM based on the number of results found.
- **Error Handling:** Implemented a notification system (using **Notiflix** or **iziToast**) to inform users when a country is not found or when the search query is too broad.
- **Data Parsing:** Extracted and displayed specific information such as official names, flags, capital cities, population, and languages.

---

### 🚀 Learning Outcomes
* Understanding the **Request-Response** cycle.
* Managing **Asynchronous code** and Promise chains.
* Implementing **Debounce** to improve User Experience (UX) and prevent server overloading.
* Handling edge cases in API responses (e.g., status 404).

---

### 🛠 Installation & Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/VitaKoval27/goit-js-hw-10.git](https://github.com/VitaKoval27/goit-js-hw-10.git)
