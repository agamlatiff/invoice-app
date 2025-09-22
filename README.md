# InvoiceAgam: A Modern Invoicing Application

InvoiceAgam is a full-stack web application built with Next.js that simplifies the invoicing process for freelancers and small businesses. It provides an intuitive dashboard to manage clients, track payments, and generate professional invoices, ensuring a smooth and efficient workflow.

-----

## ✨ Key Features

  - **Seamless User Authentication**: Secure magic link login functionality powered by NextAuth.js and Nodemailer, providing a passwordless and hassle-free user experience.
  - **Effortless Onboarding**: A guided setup process for new users to quickly configure their account details.
  - **Comprehensive Dashboard**: A central hub providing an at-a-glance overview of your business health, including:
      - Total revenue collected.
      - A count of total, paid, and pending invoices.
      - A list of recent invoice activities.
  - **Financial Insights**: An interactive line graph visualizing paid invoices over the past 30 days, helping you track your income trends.
  - **Full Invoice Lifecycle Management**: Complete CRUD (Create, Read, Update, Delete) functionality for your invoices.
      - **Create**: A detailed yet simple form to generate new invoices.
      - **Update**: Easily edit any detail on existing invoices./page.tsx]
      - **Delete**: A confirmation step to safely remove invoices./delete/page.tsx]
  - **Dynamic PDF Generation**: Instantly generate and download professional PDF versions of your invoices for your records or to send to clients./route.ts]
  - **Email Reminders**: Send payment reminders for outstanding invoices directly from the application with a single click./route.ts]
  - **Modern & Responsive UI**: Built with Tailwind CSS and shadcn/ui for a clean, accessible, and responsive user experience across all devices.

-----

## 🛠️ Tech Stack

This project is built using a modern and powerful set of technologies:

  - **Framework**: [Next.js](https://nextjs.org/) (App Router)
  - **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  - **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
  - **Database ORM**: [Prisma](https://www.prisma.io/)
  - **Database**: PostgreSQL
  - **Authentication**: [NextAuth.js](https://next-auth.js.org/)
  - **Form Management**: [Conform](https://conform.guide/)
  - **Schema Validation**: [Zod](https://zod.dev/)
  - **Emailing**: [Mailtrap](https://mailtrap.io/) & [Nodemailer](https://nodemailer.com/)
  - **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
  - **Data Visualization**: [Recharts](https://recharts.org/)
  - **Notifications**: [Sonner](https://www.google.com/search?q=https://sonner.emilkowal.ski/)
  - **Language**: [TypeScript](https://www.typescriptlang.org/)

-----

## 🚀 Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

  - [Node.js](https://nodejs.org/en/) (v20.x or higher)
  - [pnpm](https://pnpm.io/) (or another package manager like npm or yarn)
  - A running PostgreSQL database instance

### Installation & Setup

1.  **Clone the Repository**

    ```sh
    git clone https://github.com/agamlatiff/invoice-app.git
    cd invoice-app
    ```

2.  **Install Dependencies**

    ```sh
    pnpm install
    ```

3.  **Set Up Environment Variables**

      - Create a `.env` file in the root of the project by copying the example file:
        ```sh
        cp .env.example .env
        ```
      - Fill in the required environment variables in the `.env` file, including your `DATABASE_URL`, email server credentials, and Mailtrap token.

4.  **Database Migration**

      - Apply the database schema to your PostgreSQL database using Prisma:
        ```sh
        pnpm prisma db push
        ```

5.  **Generate Prisma Client**

      - This step is usually handled automatically, but you can run it manually if needed:
        ```sh
        pnpm prisma generate
        ```

### Running the Application

Start the development server with Turbopack for the best performance:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

-----

## 📂 Project Structure

The project utilizes the Next.js App Router for a clear and organized file structure:

```
invoice-app/
├── prisma/
│   └── schema.prisma         # Database schema definition
├── public/                     # Static assets (images, fonts)
├── src/
│   ├── app/
│   │   ├── (auth)/             # Routes for authentication (login, verify)
│   │   ├── dashboard/          # Protected user dashboard routes
│   │   │   ├── invoices/       # Invoice management pages (create, edit, delete)
│   │   │   └── layout.tsx      # Dashboard layout with sidebar and header
│   │   ├── api/                # API routes for server-side logic
│   │   ├── components/         # Reusable React components
│   │   │   └── ui/             # UI components from shadcn/ui
│   │   ├── utils/              # Utility functions (auth, db, formatting)
│   │   └── layout.tsx          # Root layout
│   └── lib/                    # Library functions (e.g., cn for Tailwind Merge)
├── package.json
└── tsconfig.json
```

-----

## 🚢 Deployment

The recommended way to deploy this application is using the [Vercel Platform](https://vercel.com/new), created by the team behind Next.js. It offers seamless integration and a smooth deployment experience.

For more detailed instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

-----

## 🤝 Contributing

Contributions, issues, and feature requests are welcome\! Feel free to check the [issues page](https://www.google.com/search?q=https://github.com/agamlatiff/invoice-app/issues) if you want to contribute.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request
