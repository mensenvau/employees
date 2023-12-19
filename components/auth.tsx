"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { useState } from "react";
import { Auth } from "@/lib/types";
import { useToast } from "@/registry/ui/use-toast";
import { useRouter } from "next/navigation";
import { postRequest } from "@/lib/request";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [input, setInput] = useState<Auth>({ username: "", password: "" })
  const [load, setload] = useState<boolean>(false);
  const { toast } = useToast()
  const router = useRouter()

  let onChange = (e: any) => { setInput({ ...input, [e.target.name]: e.target.value }) }

  let onSubmit = async () => {
    setload(true)
    let res = (await postRequest("auth", { ...input }));

    if (!res || res.err) {
      setload(false)
      return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the can't get data!" })
    }

    setload(false);
    localStorage.setItem('token', res?.token);
    router.push("/dashboard");
  }

  return (
    <div className="grid gap-6"
      {...props}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="username"> Username </Label>
          <Input id="username" placeholder="Username" type="text" disabled={load} name="username" onChange={onChange} />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password"> Password </Label>
          <Input id="password" placeholder="*********" type="password" disabled={load} name="password" onChange={onChange} />
        </div>
        <Button onClick={onSubmit} disabled={load}> {load && (<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />)} Sign In </Button>
      </div>
    </div >
  );
}
