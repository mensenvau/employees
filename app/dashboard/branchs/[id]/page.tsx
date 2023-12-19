
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { EditOneTab } from "../tabs/edit-one";
import { EditInfoTab } from "../tabs/edit-info";
import { ContactsTab } from "../tabs/contacts";
import { ServicesTab } from "../tabs/services";

export default async function TabsLayout() {
    return (
        <div className="col-span-4 lg:col-span-5 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="edit1" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="edit1" className="relative">   Info </TabsTrigger>
                            <TabsTrigger value="edit2" className="relative">   Adress/time </TabsTrigger>
                            <TabsTrigger value="contacts" className="relative">Contacts</TabsTrigger>
                            <TabsTrigger value="services" className="relative">Services</TabsTrigger>
                            <TabsTrigger value="image" className="relative">   Image  </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="edit1" className="border-none p-0 outline-none"><EditOneTab />  </TabsContent>
                    <TabsContent value="edit2" className="border-none p-0 outline-none"><EditInfoTab /> </TabsContent>
                    <TabsContent value="contacts" className="border-none p-0 outline-none"><ContactsTab /> </TabsContent>
                    <TabsContent value="services" className="border-none p-0 outline-none"><ServicesTab /> </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
