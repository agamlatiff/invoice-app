"use server"

import { requireUser } from "./utils/hooks" 
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "./utils/zodSchemas";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import type z from "zod";


type OnboardingInput = z.infer<typeof onboardingSchema>;

export async function onboardUser(prevState: any , formData: FormData) {
  const session = await requireUser();
  
  const submission = parseWithZod(formData, {
    schema: onboardingSchema, 
  })
  
  if(submission.status !== 'success') {
    return submission.reply()
  }
  
  const {firstName, lastName, address} = submission.value as OnboardingInput;
  
  
  const data = await prisma.user.update({
    where: {
      id: session.user?.id
    },
    data: {
      firstName,
      lastName,
      address,
    }
  })
  
  return redirect('/dashboard')
}