import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(request: Request, {
  params,
}: {
  params: Promise<{ invoiceId: string }>;
}) {
  try {
    const session = await requireUser();

  const { invoiceId } = await params;
  const invoiceData = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
      userId: session.user?.id,
    },
  });

  if (!invoiceData) {
    return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
  }

  const sender = {
    email: "hello@example.com",
    name: "Agam Latifullah  ",
  };

  emailClient.send({
    from: sender,
    to: [{ email: "johndoe@gmail.com" }],
    subject: "Reminder Invoice Payment",
    text: "Hey you forgot to pay the invoice",
  });
  
  return NextResponse.json({success: true})
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
