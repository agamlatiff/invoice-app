"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import {Loader2} from 'lucide-react';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return <>
    {pending ? <Button className="w-full" disabled><Loader2 className="siez-4 mr-2 animate-spin"/> Please wait...</Button> : <Button type="submit" className=" w-full">Submit</Button>}
  </>;
};

export default SubmitButton;
