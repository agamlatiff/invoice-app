"use server";

import { requireUser } from "./utils/hooks";
import { parseWithZod } from "@conform-to/zod";
import { invoiceSchema, onboardingSchema } from "./utils/zodSchemas";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { emailClient } from "./utils/mailtrap";

export async function onboardUser(prevState: any, formData: FormData) {
  const session = await requireUser();

  const submission = parseWithZod(formData, {
    schema: onboardingSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { firstName, lastName, address } = submission.value;

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      firstName,
      lastName,
      address,
    },
  });

  return redirect("/dashboard");
}

export async function createInvoice(prevState: any, formdata: FormData) {
  const session = await requireUser();

  const submission = parseWithZod(formdata, {
    schema: invoiceSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.invoice.create({
    data: {
      clientAddress: submission.value.clientAddress,
      clientEmail: submission.value.clientEmail,
      clientName: submission.value.clientName,
      currency: submission.value.currency,
      date: submission.value.date,
      duedate: submission.value.dueDate,
      fromAddress: submission.value.fromAddress,
      fromEmail: submission.value.fromEmail,
      fromName: submission.value.fromName,
      invoiceItemDescription: submission.value.invoiceItemDescription,
      invoiceItemQuantity: submission.value.invoiceItemQuantity,
      invoiceItemRate: submission.value.invoiceItemRate,
      invoiceName: submission.value.invoiceName,
      invoiceNumber: submission.value.invoiceNumber,
      note: submission.value.note,
      status: submission.value.status,
      total: submission.value.total,
      userId: session.user?.id,
    },
  });

  const sender = {
    email: "hello@example.com",
    name: "Agam Latifullah  ",
  };

  emailClient.send({
    from: sender,
    to: [{ email: "agamlatifullah123@gmail.com" }],
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  });

  return redirect("/dashboard/invoices");
}

export async function editInvoice(prevState: any, formdata: FormData) {
  const session = await requireUser();
  const submission = parseWithZod(formdata, {
    schema: invoiceSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.invoice.update({
    where: {
      id: formdata.get("id") as string,
      userId: session.user?.id,
    },
    data: {
      clientAddress: submission.value.clientAddress,
      clientEmail: submission.value.clientEmail,
      clientName: submission.value.clientName,
      currency: submission.value.currency,
      date: submission.value.date,
      duedate: submission.value.dueDate,
      fromAddress: submission.value.fromAddress,
      fromEmail: submission.value.fromEmail,
      fromName: submission.value.fromName,
      invoiceItemDescription: submission.value.invoiceItemDescription,
      invoiceItemQuantity: submission.value.invoiceItemQuantity,
      invoiceItemRate: submission.value.invoiceItemRate,
      invoiceName: submission.value.invoiceName,
      invoiceNumber: submission.value.invoiceNumber,
      note: submission.value.note,
      status: submission.value.status,
      total: submission.value.total,
    },
  });
  
  return redirect("/dashboard/invoices");
}


export async function DeleteInvoice(invoiceId: string) {
  const session = await requireUser();
  const data = await prisma.invoice.delete({
    where : {
      userId: session.user?.id,
      id: invoiceId
    }
  })
  
  return redirect("/dashboard/invoices");

}

export async function MarkAsPaidAction (invoiceId: string) {
  const session = await requireUser();
  const data = await prisma.invoice.update({
    where:{
      userId: session.user?.id,
      id: invoiceId
    },
    data : {
      status: 'PAID'
    }
  })
  
  return redirect('/dashboard/invoices');
}