# React News App

A simple React app that fetches news articles from [NewsAPI](https://newsapi.org/). The app supports multiple categories including Business, Entertainment, General, Health, Science, Sports, and Technology. It also includes features like infinite scrolling and a loading bar with **ReactTopLoadingBar**.

## Features

- **ReactTopLoadingBar**: Shows a loading bar when fetching news.
- **Infinite Scroll**: Automatically loads more news as you scroll down.
- **Multiple News Categories**: Choose between Business, Entertainment, General, Health, Science, Sports, and Technology.

## Categories

- **Business**
- **Entertainment**
- **General**
- **Health**
- **Science**
- **Sports**
- **Technology**

## Requirements

Before starting, you need to have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

## Setup

### 1. Clone the repository
Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/react-news-app.git
cd react-news-app
```

### 2. Install dependencies
Install the required dependencies using npm or Yarn:

```
npm install
```
or
```
yarn install
```

### 3. Setup Environment Variables
Create a `.env` file in the root of your project and add your NewsAPI credentials:


```
REACT_APP_API_KEY=
REACT_APP_COUNTRY=us
```

### 4. Run the app
Start the development server:

```
npm start
```

or

```
yarn start
```

Visit `http://localhost:3000` in your browser to see the app running.

# Using News Categories
The app allows users to view news in various categories. You can change the category dynamically and view the corresponding articles.

Here’s how the categories work:

1. Business
2. Entertainment
3. General
4. Health
5. Science
6. Sports
7. Technology

You can switch between these categories in the app, and the news will update accordingly.

# Dependencies Used
- Axios: To fetch data from the NewsAPI.
- ReactTopLoadingBar: A top loading bar to show when data is being fetched.
- React-Infinite-Scroll-Component: To implement infinite scrolling functionality.
- React: Frontend library to build the app.

## 🤝 Like This Project? Connect With Me!

If you like this project and want to create more Telegram bots, feel free to connect with me on LinkedIn:  
🔗 [Your LinkedIn Profile](https://www.linkedin.com/in/sohitmishra/) 💼