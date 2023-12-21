"use client"

import { Key, useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/registry/ui/select";
import { getRequest, postImage, postRequest } from "@/lib/request";
import { Textarea } from "@/registry/ui/textarea";
import { Separator } from "@/registry/ui/separator";
import { useToast } from "@/registry/ui/use-toast";
import { SkeletonV1 } from "@/components/skeleton";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { useParams } from 'next/navigation'

export function EditOneTab() {

    const params = useParams()
    const { toast } = useToast()
    const [input, setInput] = useState<any>({ "id": 0, "branch_id": "", "full_name": "", "workplace": "", "position_held": "", "passport_serial": "", "passport_number": "", "passport_day": "", "birth_place": "", "birth_day": "", "address": "", "ins": "", "inn": "", "phone_number": "", "work_experience": "", "contract_number": "", "contract_day": "", "comment": "", "employment_start_day": "", "employment_end_day": "", "military": "", "passport_address": "", "nation": "" })
    const [branchs, setBranch] = useState<any>([])
    const [load, setLoad] = useState(true)

    let onChange = (e: any,) => {
        setInput({ ...input, [e.target.getAttribute("name")]: e.target.value })
    }

    let onSelect = (e: any) => {
        setInput({ ...input, "branch_id": e })
    }

    const getBranch = async () => {
        setBranch((await getRequest("branchs", {}))?.arr || []);
    }

    let editOne = async () => {
        setLoad(true);
        setInput({ id: "0", name: "" });
        const res = (await postRequest("employees/one", { ...input }))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" })
        toast({ title: "Wow! News.", description: "Data success update!" })
        await getOne();
    }

    const uploadImage = async (e: any) => {
        const fdata = new FormData()
        fdata.append('img', e.target.files[0])

        let res = await postImage(`employees/img?id=${params.id}`, fdata)
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the can't upload image!" })

        getOne()
    };

    let getOne = async () => {
        const res = (await getRequest(`employees/one?id=${params.id}`))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" })
        setInput(res?.arr || []);
        setLoad(false);
    }

    useEffect(() => { getOne(); getBranch(); }, [])

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Xodim ma'lumotlarni yangilash. </p>
            </div>
            <Separator className="my-4" />
            {load && <SkeletonV1 />}
            {!load &&
                <div>
                    <div className="grid grid-cols-6 gap-4 w-full">
                        <div className="col-span-2" ><img src={`${process.env.BASE_URL}/${input.photo}?date=${new Date().getTime()}`} alt="?" className="w-3/12" /></div>
                        <div className="col-span-2" ><Input id="picture" type="file" onChange={uploadImage} /></div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>To'liq ism familyasi:</Label>
                            <Input type="text" placeholder="To'liq ism familyasi" name="full_name" value={input?.full_name || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label> Bo'lim: </Label>
                            <Select value={input?.branch_id} onValueChange={onSelect}>
                                <SelectTrigger className="col-span-2" >
                                    <SelectValue placeholder="Select a Bo'lim" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Bo'lim:</SelectLabel>
                                        {branchs && branchs.map((item: any) => (<SelectItem key={item.id as Key} value={item.id as string}>{item?.name}</SelectItem>))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Ish ma'lumoti:</Label>
                            <Textarea placeholder="Ish joyi" name="workplace" value={input?.workplace || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Lavozimi:</Label>
                            <Input type="text" placeholder="Lavozimi" name="position_held" value={input?.position_held || ""} onChange={onChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Passporti:</Label>
                            <div className="grid grid-cols-6 gap-4">
                                <Input className="col-span-2" type="text" placeholder="Seriyasi" name="passport_serial" value={input?.passport_serial || ""} onChange={onChange} maxLength={2} minLength={2} />
                                <Input className="col-span-4" type="text" placeholder="Raqami" name="passport_number" value={input?.passport_number || ""} onChange={onChange} maxLength={7} minLength={7} />
                            </div>
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Passport olingan kuni:</Label>
                            <Input type="date" placeholder="Passport olingan kuni" name="passport_day" value={input?.passport_day || ""} onChange={onChange} />
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Passport olingan joyi:</Label>
                            <Input type="text" placeholder="Passport olingan joyi" name="passport_address" value={input?.passport_address || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Millati:</Label>
                            <Input type="text" placeholder="Millati" name="nation" value={input?.nation || ""} onChange={onChange} />
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Tug'ilgan joyi:</Label>
                            <Textarea placeholder="Tug'ilgan joyi" name="birth_place" value={input?.birth_place || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Tug'ilgan kuni:</Label>
                            <Input className="col-span-4" type="date" placeholder="Tug'ilgan kuni" name="birth_day" value={input?.birth_day || ""} onChange={onChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Yashash manzili:</Label>
                            <Textarea placeholder="Yashash manzili" name="address" value={input?.address || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-1" >
                            <Label htmlFor='name'>ИНПС:</Label>
                            <Input className="col-span-4" type="text" placeholder="ИНПС" name="ins" value={input?.ins || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-1" >
                            <Label htmlFor='name'>ИНН:</Label>
                            <Input type="text" placeholder="ИНН" name="inn" value={input?.inn || ""} onChange={onChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Telefon raqami:</Label>
                            <Input type="text" placeholder="Telefon raqami" name="phone_number" value={input?.phone_number || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Ish tajribasi:</Label>
                            <Input type="text" placeholder="Ish tajribasi" name="work_experience" value={input?.work_experience || ""} onChange={onChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Shartnoma raqami:</Label>
                            <Input type="text" placeholder="Shartnoma raqami" name="contract_number" value={input?.contract_number || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Shartnoma sanasi:</Label>
                            <Input type="date" placeholder="Shartnoma sanasi" name="contract_day" value={input?.contract_day || ""} onChange={onChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Ish boshlagan sana:</Label>
                            <Input type="date" placeholder="Ish boshlagan sana" name="employment_start_day" value={input?.employment_start_day || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Ogohlantirish sanasi (Ish tugash):</Label>
                            <Input type="date" placeholder="Shartnoma sanasi" name="employment_end_day" value={input?.employment_end_day || ""} onChange={onChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 w-full mt-4">
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Harbiy bilet:</Label>
                            <Input type="text" placeholder="Harbiy bilet" name="military" value={input?.military || ""} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Label htmlFor='name'>Izoh:</Label>
                            <Textarea placeholder="Izoh" name="comment" value={input?.comment || ""} onChange={onChange} />
                        </div>
                    </div>
                    <div><Button className="mt-4" onClick={editOne}>Edit Data</Button></div>
                </div>
            }
        </div>
    )
}