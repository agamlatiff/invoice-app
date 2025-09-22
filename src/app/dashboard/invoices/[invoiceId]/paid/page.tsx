import { MarkAsPaidAction } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Params = Promise<{ invoiceId: string }>;

async function Authorize(invoiceId: string, userId: string) {
  const data = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
      userId,
    },
  });

  if (!data) {
    return redirect("/dashboard/invoices");
  }
}

const MarkAsPaid = async ({ params }: { params: Params }) => {
  const { invoiceId } = await params;
  const session = await requireUser()
  await Authorize(invoiceId, session.user?.id as string);


  return (
    <div className=" flex flex-1 justify-center items-center">
      <Card className="max-w-[500px] w-full">
        <CardHeader>
          <CardTitle>Mark as Paid?</CardTitle>
          <CardDescription>
            Are you sure you want to mark this invoice as paid?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CircleDollarSign className="w-full size-10 text-green-500" />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link
            href={"/dashboard/invoices"}
            className={buttonVariants({ variant: "outline" })}
          >
            Cancel
          </Link>
          <form action={MarkAsPaidAction.bind(null, invoiceId)}>
            <SubmitButton variant={"default"} text="Mark as Paid" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MarkAsPaid;
