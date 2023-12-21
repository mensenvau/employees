"use client"

import { getRequest, postRequest } from "@/lib/request";
import { Separator } from "@/registry/ui/separator";
import { useToast } from "@/registry/ui/use-toast";
import { Key, useEffect, useState } from "react";
import { SkeletonV1 } from "@/components/skeleton";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { useParams } from 'next/navigation'

export function EditOneTab() {

    const params = useParams()
    const { toast } = useToast()
    const [input, setInput] = useState<any>({ id: "0", name: "" })
    const [load, setLoad] = useState(true)

    let onChange = (e: any,) => {
        setInput({ ...input, [e.target.getAttribute("name")]: e.target.value })
    }

    let editOne = async () => {
        setLoad(true);
        setInput({ id: "0", name: "" });
        const res = (await postRequest("branchs/one", { ...input }))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" })
        toast({ title: "Wow! News.", description: "Data success update!!!" })
        await getOne();
    }

    let getOne = async () => {
        const res = (await getRequest(`branchs/one?id=${params.id}`))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" })
        setInput(res?.arr || []);
        setLoad(false);
    }

    useEffect(() => { getOne(); }, [])

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Bita bo'lim ma'lumotlarni yangilash</p>
            </div>
            <Separator className="my-4" />
            {load && <SkeletonV1 />}
            {!load &&
                <div>
                    <div key={input?.id as Key} className="grid gap-4 grid-cols-1 mb-2">
                        <Label >Nomi: </Label>
                        <Input type="text" name="name" placeholder="Nomi" value={input?.name} onChange={onChange} />
                    </div>
                    <div>
                        <Button className="mt-2" onClick={editOne}>Edit Data</Button>
                    </div>
                </div>
            }
        </div>
    )
}