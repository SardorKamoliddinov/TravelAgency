import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import Stays from "./Showcase/Stays/Stays";
import Flight from "./Showcase/Flight/Flight";

const CustomTabs = () => {
  return (
    <div>
      <Tabs className="bg-white">
        <TabsList className="flex gap-5">
          <TabsTrigger value="stays">Stays</TabsTrigger>
          <TabsTrigger value="flight">Flight</TabsTrigger>
          <TabsTrigger value="cars">Cars</TabsTrigger>
          <TabsTrigger value="packages">Packages</TabsTrigger>
          <TabsTrigger value="things">Things to do</TabsTrigger>
        </TabsList>
        <TabsContent value="stays">
          <Stays />
        </TabsContent>
        <TabsContent value="flight">
          <Flight />
        </TabsContent>
        <TabsContent value="cars">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="packages">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="things">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
