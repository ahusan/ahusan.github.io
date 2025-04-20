# Personal Portfolio Website

This is my personal portfolio website built with React 19 and Tailwind CSS 4.

## Technologies Used

- React 19
- Tailwind CSS 4
- React Router 7
- Headless UI 2.2
- Heroicons 2.2
- Google Blogger API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ahusan/ahusan.github.io.git
   cd ahusan.github.io
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm start
   ```

4. Build for production

   ```bash
   npm run build
   ```

5. Deploy to GitHub Pages
   ```bash
   npm run deploy
   ```

## Features

- Responsive design
- Modern UI with Tailwind CSS 4
- Fast performance with React 19
- Component-based architecture
- Blog integration with Google Blogger API

## Blog Integration Setup

### Basic Setup (with API Key)

1. Create a Google API Key with Blogger API access
2. Add the API key and your blog ID to your `.env` file:

   ```
   REACT_APP_BLOGGER_API_KEY=your_api_key_here
   REACT_APP_BLOGGER_BLOG_ID=your_blog_id_here
   ```

### Enhanced Setup (with Service Account)

For more secure access and ability to access private blogs:

1. Create a Google Service Account in the Google Cloud Console
2. Enable the Blogger API for your project
3. Generate a service account key (JSON format)
4. Add the service account as a reader or author on your blog
5. Add the service account key to your deployment environment:

   Option A: As an environment variable (recommended for security)

   ```
   GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"..."}
   ```

   Option B: As a file (development only)

   ```
   GOOGLE_SERVICE_ACCOUNT_KEY_PATH=./path/to/service-account-key.json
   ```

6. Deploy the API endpoint in the `/api` directory to your serverless provider

## License

This project is licensed under the MIT License.
