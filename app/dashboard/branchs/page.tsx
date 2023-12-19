
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { ListTab } from "./tabs/list";
import { AddTab } from "./tabs/add";

export default async function TabsLayout() {
    return (
        <div className="col-span-4 lg:col-span-5 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="list" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="list" className="relative"> Lists</TabsTrigger>
                            <TabsTrigger value="add" className="relative">  Add new </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="list" className="border-none p-0 outline-none">  <ListTab /> </TabsContent>
                    <TabsContent value="add" className="border-none p-0 outline-none">  <AddTab /> </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
