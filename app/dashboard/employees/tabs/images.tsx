"use client"

import { getRequest, postImage } from "@/lib/request";
import { Input } from "@/registry/ui/input";
import { Separator } from "@/registry/ui/separator";
import { useToast } from "@/registry/ui/use-toast";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { SkeletonV1 } from "@/components/skeleton";
import { Label } from "@radix-ui/react-label";


export function ImageUploadTab() {
    const params = useParams()
    const { toast } = useToast()
    const [load, setLoad] = useState(true)
    const [image, setImage] = useState("")

    const uploadImage = async (e: any) => {
        setLoad(true)
        const fdata = new FormData()
        fdata.append('img', e.target.files[0])

        let res = await postImage(`/doctors/img?id=${params.id}`, fdata)
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't upload image!"
            })
        }

        getInfo()
        setLoad(false)
    };

    let getInfo = async () => {
        const res = await getRequest(`/doctors/info/${params.id}`)
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't get data!"
            })
        }

        setImage(`${process.env.apiURL}doctors/${res?.data?.arr?.img}`)
        setLoad(false);
    }

    useEffect(() => { getInfo(); }, [])

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Doctor image edit!  </p>
            </div>
            <Separator className="my-4" />
            {load && <SkeletonV1 />}
            {!load && <>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Avatar</Label>
                    <Input id="picture" type="file" onChange={uploadImage} />
                </div>
                <img src={`${image}?date=${new Date().getTime()}`} alt="?" className="mt-10 w-1/12" />
            </>}
        </div>
    )
}