"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import {Loader2} from 'lucide-react';

interface iAppProps {
  text: string;
}

const SubmitButton = ({text}: iAppProps) => {
  const { pending } = useFormStatus();

  return <>
    {pending ? <Button className="w-full" disabled><Loader2 className="siez-4 mr-2 animate-spin"/> Please wait...</Button> : <Button type="submit" className=" w-full">{text}</Button>}
  </>;
};

export default SubmitButton;
