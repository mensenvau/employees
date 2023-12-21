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
    const [input, setInput] = useState<any>({ "id": 0, "branch_id": "", "photo": "", "full_name": "", "workplace": "", "position_held": "", "passport_serial": "", "passport_number": "", "passport_day": "", "birth_place": "", "birth_day": "", "address": "", "ins": "", "inn": "", "phone_number": "", "work_experience": "", "contract_number": "", "contract_day": "", "comment": "", "employment_start_day": "", "employment_end_day": "" })
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
        const res = (await getRequest(`employees/one?id=${params.id}`))
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
                    <div className="grid grid-cols-6 gap-4 w-full">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>To'liq ism familyasi:</Label>
                            <Input type="text" placeholder="To'liq ism familyasi" name="full_name" value={input?.full_name || ""} onChange={onChange} />
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Ish joyi:</Label>
                            <Input type="text" placeholder="Ish joyi" name="workplace" value={input?.workplace || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Lavozimi:</Label>
                            <Input type="text" placeholder="Lavozimi" name="position_held" value={input?.position_held || ""} onChange={onChange} />
                        </div>
                    </div>

                    {/* // {"id":1,"branch_id":"","photo":"" "passport_serial":"","passport_number":"","passport_day":"","birth_place":"","birth_day":"","address":"","ins":"","inn":"","phone_number":"","work_experience":"","contract_number":"","contract_day":"","comment":"","employment_start_day":"","employment_end_day":""} */}

                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Passport:</Label>
                            <div className="grid grid-cols-6 gap-4">
                                <Input className="col-span-2" type="text" placeholder="Passport seriyasi" name="passport_serial" value={input?.passport_serial || ""} onChange={onChange} maxLength={2} minLength={2} />
                                <Input className="col-span-4" type="text" placeholder="Passport raqami" name="passport_number" value={input?.passport_number || ""} onChange={onChange} maxLength={7} minLength={7} />
                            </div>
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Lavozimi:</Label>
                            <Input type="text" placeholder="Lavozimi" name="workplace" value={input?.position_held || ""} onChange={onChange} />
                        </div>
                    </div>

                    <div>
                        <Button className="mt-2" onClick={editOne}>Edit Data</Button>
                    </div>
                </div>
            }
        </div>
    )
}