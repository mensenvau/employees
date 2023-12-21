
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { ChartOne } from "./home/chart-one";
import { HelpTab } from "./home/help";
import { ExportTab } from "./home/export";

export default async function Home() {
  return (
    <div className="col-span-4 lg:col-span-5 lg:border-l">
      <div className="h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue="list" className="h-full space-y-6">
          <div className="space-between flex items-center">
            <TabsList>
              <TabsTrigger value="list" className="relative"> Analiz </TabsTrigger>
              <TabsTrigger value="export" className="relative">  Export </TabsTrigger>
              <TabsTrigger value="help" className="relative">  Help </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="list" className="border-none p-0 outline-none"> <ChartOne /> </TabsContent>
          <TabsContent value="export" className="border-none p-0 outline-none"><ExportTab />   </TabsContent>
          <TabsContent value="help" className="border-none p-0 outline-none"><HelpTab />   </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
