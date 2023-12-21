
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { ChartOne } from "./home/chart-one";
import { ChartTwo } from "./home/chart-two";

export default async function Home() {
  return (
    <div className="col-span-4 lg:col-span-5 lg:border-l">
      <div className="h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue="list" className="h-full space-y-6">
          <div className="space-between flex items-center">
            <TabsList>
              <TabsTrigger value="list" className="relative"> Analiz </TabsTrigger>
              <TabsTrigger value="add" className="relative">  Anliz chart </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="list" className="border-none p-0 outline-none"> <ChartOne /> </TabsContent>
          <TabsContent value="add" className="border-none p-0 outline-none">  <ChartTwo /> </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
