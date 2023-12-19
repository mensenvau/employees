"use client"

import { getRequest, postRequest } from "@/lib/request";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Separator } from "@/registry/ui/separator";
import { useToast } from "@/registry/ui/use-toast";
import { Key, useEffect, useState } from "react";
import { useRouter, useParams } from 'next/navigation'
import { Textarea } from "@/registry/ui/textarea";
import { Label } from "@/registry/ui/label";
import { Doctor, } from "@/lib/types"
import { SkeletonV1 } from "@/components/skeleton";

export function EditOneTab() {

    const params = useParams()
    const { toast } = useToast()
    const [input, setInput] = useState<Doctor[]>([])
    const [load, setLoad] = useState(true)

    let onChange = (e: any,) => {
        let nv = input.map((item) => {
            if (item.lang == e.target.getAttribute("lang")) return { ...item, [e.target.name]: e.target.value }
            return item
        })
        setInput(nv)
    }

    let editOne = async () => {
        setLoad(true);
        setInput([]);
        const res = (await postRequest("/doctors/one", { id: params.id, arr: input }))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't update data!"
            })
        }
        toast({
            title: "Wow! News.",
            description: "Data success update!!!"
        })
        await getOne();
    }

    let getOne = async () => {
        const res = (await getRequest("/doctors/one/" + params.id))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't get data!"
            })
        }
        setInput(res?.data?.arr || []);
        setLoad(false);
    }

    useEffect(() => { getOne(); }, [])

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.</p>
            </div>
            <Separator className="my-4" />
            {load && <SkeletonV1 />}
            {!load &&
                <div>
                    {input?.length > 0 && input.map((item) => (
                        <div key={item?.lang as Key} className="grid gap-4 grid-cols-1 mb-2">
                            <Label >for {item?.lang}: </Label>
                            <Input placeholder="Name ... " type="text" value={item?.name} name="name" lang={item?.lang} onChange={onChange} />
                            <Textarea placeholder="Type description here." value={item?.description || ""} name="description" lang={item?.lang} onChange={onChange} />
                        </div>
                    ))}
                    <div>
                        <Button className="mt-2" onClick={editOne}>Edit Data</Button>
                    </div>
                </div>
            }
        </div>
    )
}