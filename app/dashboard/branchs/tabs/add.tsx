"use client"

import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Separator } from "@/registry/ui/separator";
import { useToast } from "@/registry/ui/use-toast";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { postRequest } from "@/lib/request";

export function AddTab() {
    const router = useRouter()
    const { toast } = useToast()
    let [name, setName] = useState("")

    let onChange = (e: any) => { setName(e.target.value) }
    let createNew = async () => {
        const res = (await postRequest("branchs/add", { name }))
        if (res.err) { return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" }) }
        router.push(`/dashboard/branchs/${res?.id}`)
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Add a new doctor  </p>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-6 gap-4">
                <Input type="name" className="col-span-2" placeholder="Name ... " onChange={onChange} />
                <Button onClick={createNew}>Create new</Button>
            </div>
        </div>
    )
}