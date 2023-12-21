"use client"

import { postRequest } from "@/lib/request";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Separator } from "@/registry/ui/separator";
import { useToast } from "@/registry/ui/use-toast";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Label } from "@/registry/ui/label";

export function AddTab() {
    const router = useRouter()
    const { toast } = useToast()
    let [input, setInput] = useState<any>({ full_name: "", workplace: "" })

    let onChange = (e: any) => { setInput({ ...input, [e.target.getAttribute("name")]: e.target.value }) }

    let nextStep = async () => {
        const res = (await postRequest("employees/add", { ...input }))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" })
        router.push(`/dashboard/employees/${res?.id}`)
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Yangi xodim qo'shish. </p>
            </div>
            <Separator className="my-4" />

            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-2" >
                    <Label htmlFor='name'>To'liq ism familyasi:</Label>
                    <Input type="text" placeholder="To'liq ism familyasi" name="full_name" value={input?.full_name} onChange={onChange} />
                </div>
                <div className="col-span-2" >
                    <Label htmlFor='name'>Ish joyi:</Label>
                    <Input type="text" placeholder="Ish joyi" name="workplace" value={input?.workplace} onChange={onChange} />
                </div>
            </div>

            <div className="grid grid-cols-6 gap-4 mt-4">  <Button onClick={nextStep}>Next</Button>  </div>
        </div>
    )
}