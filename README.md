InvoiceAgam - Easy Invoicing Application
InvoiceAgam is a modern, full-stack web application built with Next.js that simplifies the process of creating, managing, and tracking invoices. It provides a user-friendly dashboard to get a quick overview of your finances, manage clients, and ensure you get paid on time.

✨ Features
Secure Authentication: Magic link login using NextAuth.js and Nodemailer.

Onboarding Flow: A simple setup process for new users to enter their details.

Intuitive Dashboard: At-a-glance view of key metrics:

Total Revenue

Total Invoices Issued

Paid vs. Pending Invoices count

Interactive Graph: Visualize paid invoices over the last 30 days with a clean line chart.

Full Invoice Management (CRUD):

Create: An easy-to-use form to create detailed invoices with items, rates, and quantities.

Read: View all your invoices in a clean, sortable table.

Update: Edit existing invoices with ease.

Delete: Safely delete invoices with confirmation.

Status Tracking: Mark invoices as "Paid" to keep your records up-to-date.

PDF Generation: Dynamically generate and download professional-looking PDF versions of your invoices.

Email Reminders: Send payment reminders to clients for pending invoices directly from the app.

Responsive Design: A clean, responsive UI that works seamlessly on desktop and mobile devices.

🛠️ Tech Stack
Framework: Next.js (with App Router)

Styling: Tailwind CSS

UI Components: shadcn/ui

Database ORM: Prisma

Database: PostgreSQL

Authentication: NextAuth.js

Form Handling: Conform

Schema Validation: Zod

Email Service: Mailtrap & Nodemailer

PDF Generation: jsPDF

Charting: Recharts

Notifications: Sonner

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running for development and testing purposes.

Prerequisites
Node.js (v20.x or later recommended)

pnpm (or your preferred package manager like npm or yarn)

A PostgreSQL database

Installation
Clone the repository:

git clone [https://github.com/agamlatiff/invoice-app.git](https://github.com/agamlatiff/invoice-app.git)
cd invoice-app

Install dependencies:

pnpm install

Set up the database:

Create a PostgreSQL database.

Copy the .env.example file to a new file named .env:

cp .env.example .env

Update the DATABASE_URL in your .env file with your PostgreSQL connection string.

Set up environment variables:
Fill in the rest of the required variables in your .env file, including your email server credentials for NextAuth and your Mailtrap token.

Push the database schema:
This command will sync your Prisma schema with your database.

pnpm prisma db push

Generate Prisma Client:

pnpm prisma generate

Running the Development Server
Start the Next.js development server:

pnpm dev

Open http://localhost:3000 in your browser to see the application.

📂 Project Structure
The project uses the Next.js App Router. Here's a brief overview of the key directories:

/src/app/: Contains all the routes, pages, and core application logic.

/api/: API routes for authentication, PDF generation, and email.

/dashboard/: Protected routes for the main application dashboard and invoice management.

/components/: Reusable React components used throughout the application.

/utils/: Utility functions for authentication (auth.ts), database (db.ts), formatting, etc.

/prisma/: Includes the schema.prisma file which defines the database models.

/public/: Static assets like images and fonts.

🚢 Deployment
The easiest way to deploy this Next.js application is with the Vercel Platform.

For more details on deployment, see the Next.js deployment documentation.

🤝 Contributing
Contributions are welcome! If you have suggestions for improving the application, feel free to fork the repository and submit a pull request.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request
