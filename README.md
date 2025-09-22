# InvoiceAgam

InvoiceAgam is a web application designed to simplify the invoicing process. It allows users to easily create, manage, and track their invoices, ensuring timely payments. This project is built with Next.js and utilizes a range of modern technologies to provide a seamless user experience.

## Features

  - **User Authentication**: Secure login and user management system using NextAuth.js for email-based authentication.
  - **Dashboard Overview**: An intuitive dashboard that provides a summary of total revenue, number of invoices issued, and the status of paid and pending invoices.
  - **Invoice Management**:
      - **Create, Edit, and Delete Invoices**: A comprehensive set of tools for complete invoice lifecycle management.
      - **Dynamic Invoice Generation**: Invoices are created with detailed information, including client details, item descriptions, rates, quantities, and totals.
      - **Status Tracking**: Invoices can be marked as 'Paid' or 'Pending', with visual indicators for easy tracking.
  - **Financial Insights**:
      - **Revenue Tracking**: The dashboard displays the total revenue generated from all invoices.
      - **Graphical Representation**: A line graph shows paid invoices over the last 30 days, providing a visual representation of income trends.
      - **Recent Invoices List**: A list of recent invoices is available on the dashboard for quick access and review.
  - **Email Functionality**:
      - **Payment Reminders**: Users can send reminder emails for pending invoices directly from the application.
  - **PDF Generation**:
      - **Downloadable Invoices**: Invoices can be downloaded as PDF files for record-keeping or for sending to clients.
  - **User-Friendly Interface**:
      - **Onboarding Process**: A simple onboarding process for new users to set up their accounts.
      - **Responsive Design**: The application is designed to be fully responsive and accessible on various devices.
      - **Customizable UI Components**: Utilizes shadcn/ui for a set of reusable and customizable UI components.

## Tech Stack

  - **Framework**: Next.js
  - **Styling**: Tailwind CSS
  - **UI Components**: shadcn/ui
  - **Authentication**: NextAuth.js
  - **Database**: Prisma with PostgreSQL
  - **Form Management**: Conform
  - **Schema Validation**: Zod
  - **Email Service**: Mailtrap
  - **PDF Generation**: jsPDF
  - **Charting Library**: Recharts

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  - Node.js (version 20 or higher)
  - pnpm (or your preferred package manager)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/agamlatiff/invoice-app.git
    ```
2.  Install NPM packages
    ```sh
    pnpm install
    ```
3.  Set up your environment variables by creating a `.env` file in the root of the project and adding the necessary variables (e.g., `DATABASE_URL`, `EMAIL_SERVER_HOST`, etc.).

### Running the Application

Once the installation is complete, you can run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a standard Next.js `app` directory structure. Key directories include:

  - `src/app/`: Contains the core application logic, including pages, layouts, and components.
      - `(auth)`: Authentication-related pages.
      - `dashboard/`: The main dashboard and invoice management pages.
      - `api/`: API routes for handling server-side logic such as authentication, email, and PDF generation.
      - `components/`: Reusable React components used throughout the application.
      - `utils/`: Utility functions for authentication, database connection, and data formatting.
  - `prisma/`: Contains the database schema.
  - `public/`: Static assets such as images and fonts.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome\!
