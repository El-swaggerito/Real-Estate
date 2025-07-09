# Real Estate 

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/muhammad-zayyad-mukhtars-projects/v0-real-estate-p4ff5irjlx6)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/p4Ff5IRJLx6)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/muhammad-zayyad-mukhtars-projects/v0-real-estate-p4ff5irjlx6](https://vercel.com/muhammad-zayyad-mukhtars-projects/v0-real-estate-p4ff5irjlx6)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/p4Ff5IRJLx6](https://v0.dev/chat/projects/p4Ff5IRJLx6)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

---
## Project: RealEstate Pro

RealEstate Pro is a modern web application designed to help users find their dream properties. It offers a user-friendly interface to browse property listings, view property details, and calculate potential mortgage payments.

## Features

*   **Splash Screen:** An engaging animated entry point to the application.
*   **User Authentication:** Secure login functionality for users.
*   **User Profiles:** Allows users to manage their profile information.
*   **Property Listings:** Browse a comprehensive list of available properties.
*   **Detailed Property View:** View in-depth information for each property, including images and specifications.
*   **Mortgage Calculator:** An integrated tool to help users estimate mortgage payments.
*   **Responsive Design:** Adapts to various screen sizes for a seamless experience on desktop and mobile devices.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
*   **Animation:** [Framer Motion](https://www.framer.com/motion/), [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/)
*   **Schema Validation:** [Zod](https://zod.dev/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
*   **Date Utilities:** [date-fns](https://date-fns.org/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   pnpm (or npm/yarn)

### Installation

1.  **Clone the repository:**
    If you haven't already, clone the repository that contains this project.
    ```bash
    git clone <repository-url>
    cd <project-directory-name>
    ```
    *(Replace `<repository-url>` and `<project-directory-name>` with the actual URL and local directory name, likely `my-v0-project` or `v0-real-estate-p4ff5irjlx6`)*

2.  **Install dependencies:**
    This project uses `pnpm` as indicated by the `pnpm-lock.yaml` file.
    ```bash
    pnpm install
    ```
    If you prefer `npm` or `yarn`, you can delete `pnpm-lock.yaml` and run:
    ```bash
    npm install # or yarn install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    Or using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will start with a splash screen and then redirect to `/home`.

## Folder Structure

Here's a brief overview of the main project directories:

```
my-v0-project/
├── app/                  # Next.js App Router: contains all routes, layouts, and pages
│   ├── home/             # Home page
│   ├── login/            # Login page
│   ├── mortgage-calculator/ # Mortgage calculator page
│   ├── profile/          # User profile page
│   ├── properties/       # Property listings page
│   ├── property/[id]/    # Individual property detail page
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Root page (splash screen)
├── components/           # Reusable React components
│   └── ui/               # UI components (likely Shadcn/UI)
├── lib/                  # Utility functions and shared logic
│   ├── properties.ts     # Property-related utilities
│   └── utils.ts          # General utilities
├── public/               # Static assets (images, fonts, etc.)
├── styles/               # Global styles (additional to app/globals.css)
├── next.config.mjs       # Next.js configuration
├── package.json          # Project metadata and dependencies
└── tsconfig.json         # TypeScript configuration
```

## Available Scripts

The `package.json` includes the following scripts:

*   `pnpm dev`: Starts the Next.js development server.
*   `pnpm build`: Builds the application for production.
*   `pnpm start`: Starts the Next.js production server.
*   `pnpm lint`: Runs Next.js's built-in ESLint checks.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository (if you are an external contributor).
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add some amazing feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request against the main branch.

---

_The upper part of this README is automatically managed by v0.dev. The sections from "Project: RealEstate Pro" onwards provide detailed project information._
