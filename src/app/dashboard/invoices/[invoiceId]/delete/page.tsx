import { DeleteInvoice } from "@/app/actions";
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
import { FileWarning, Link } from "lucide-react";
import { redirect } from "next/navigation";

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
type Params = Promise<{ invoiceId: string }>;

const DeleteInvoiceRoute = async ({ params }: { params: Params }) => {
  const session = await requireUser();
  const { invoiceId } = await params;

  await Authorize(invoiceId, session.user?.id as string);

  return (
    <div className="flex flex-1 justify-center items-center">
      <Card className="max-w-[500px] w-full">
        <CardHeader>
          <CardTitle>Delete Invoice</CardTitle>
          <CardDescription>
            Are you sure that you want to delete this invoice?
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center text-center w-full">
          <FileWarning className="size-10 text-red-500 w-full" />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link
            href="/dashboard/invoices"
            className={buttonVariants({ variant: "outline" })}
          >
            Cancel
          </Link>
          <form action={async () => {
            "use server";
            await DeleteInvoice(invoiceId)
          }}>
            <SubmitButton text="Delete Invoice" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeleteInvoiceRoute;
