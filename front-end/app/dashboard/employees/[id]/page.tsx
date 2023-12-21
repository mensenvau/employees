
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { EditOneTab } from "../tabs/one";
import { HelpTab } from "../tabs/help";
import EduTab from "../tabs/edu";

export default async function TabsLayout() {
    return (
        <div className="col-span-4 lg:col-span-5 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="one" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="one" className="relative">   Info </TabsTrigger>
                            <TabsTrigger value="edu" className="relative">   Educations </TabsTrigger>
                            <TabsTrigger value="help" className="relative"> Help </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="one" className="border-none p-0 outline-none"><EditOneTab />  </TabsContent>
                    <TabsContent value="edu" className="border-none p-0 outline-none"><EduTab /> </TabsContent>
                    <TabsContent value="help" className="border-none p-0 outline-none"><HelpTab />   </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
