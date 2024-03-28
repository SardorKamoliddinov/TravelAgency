import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "./Popover";
import { Button } from "./ui/button";
import CustomSelect from "./Select";

const CustomTabs = () => {
  return (
    <div>
      <Tabs className="w-full bg-white h-full">
        <TabsList className="flex gap-5">
          <TabsTrigger value="stays">Stays</TabsTrigger>
          <TabsTrigger value="flight">Flight</TabsTrigger>
          <TabsTrigger value="cars">Cars</TabsTrigger>
          <TabsTrigger value="packages">Packages</TabsTrigger>
          <TabsTrigger value="things">Things to do</TabsTrigger>
        </TabsList>
        <TabsContent
          value="stays"
          className="flex justify-center items-center gap-5 h-40 flex-wrap"
        >
          <Input className="border-solid border-black" placeholder="Goint to" />
          <DatePickerDemo title="Departing" />
          <DatePickerDemo title="Returning" />
          <CustomSelect
            title="Traveler"
            optionOne="1 traveler"
            optionTwo="2 traveler"
            optionThird="3 traveler"
          />
          <Button className="bg-[#1F4AA8] text-white rounded-xl">Search</Button>
        </TabsContent>
        <TabsContent value="flight">Change your password here.</TabsContent>
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
