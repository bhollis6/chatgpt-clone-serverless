# ChatGPT Clone (Netlify Functions Version)

This version of the ChatGPT Clone leverages Netlify Functions to host the server, providing a serverless architecture for deploying the application. Users can have interactive conversations with an AI-powered assistant using OpenAI's GPT-3.5 Turbo model.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Introduction
The ChatGPT Clone (Netlify Functions Version) is a user-friendly web application that simulates conversations with an AI assistant. Users can create new chats, switch between existing conversations, and clear chat history. The assistant, powered by GPT-3.5 Turbo, provides responses to user messages and can handle code blocks for more complex interactions. This version is deployed using Netlify Functions for the backend server, ensuring a scalable and easy-to-manage infrastructure.

## Features
1. **Interactive Conversations**: Users can create new chats and switch between existing conversations.
2. **Code Block Handling**: The assistant can handle code blocks for more technical discussions.
3. **Chat History**: The application maintains chat history for each conversation.
4. **Sidebar**: The sidebar displays the list of conversations and options to create new chats and clear chat history.
5. **Help and FAQ**: Users can access help and frequently asked questions from the sidebar.

## Getting Started
1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file and add your OpenAI API key: `API_KEY=YOUR_API_KEY`
4. Deploy the application to Netlify.
5. Access the deployed application at [https://chatgpt-clone6.netlify.app](https://chatgpt-clone6.netlify.app).

## Project Structure
The project is organized into components. The main components include:
- `App.tsx`: The entry point of the application, managing chats and interactions.
- `ChatSidebar.tsx`: The sidebar component displaying conversation history and options.
- `ChatMainSection.tsx`: The main chat section, showing chat messages and handling user input.
- `ChatBottomSection.tsx`: The bottom section of the chat, enabling users to type messages.
- `SplashScreen.tsx`: The initial splash screen for creating a new chat.
- `index.css`: The styles for the application.

## Contact
For any inquiries or feedback, feel free to reach out at [blh04co@gmail.com](mailto:blh04co@gmail.com).
