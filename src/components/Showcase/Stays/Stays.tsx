import { DatePickerDemo } from "@/components/Popover";
import CustomSelect from "@/components/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

const Stays = () => {
  return (
    <div>
      <TabsContent
        value="stays"
        className="flex justify-center items-center gap-5 flex-wrap"
      >
        <Input
          className="border-solid border-black mt-5"
          placeholder="Goint to"
        />
        <DatePickerDemo title="Departing" />
        <DatePickerDemo title="Returning" />
        <CustomSelect
          title="Traveler"
          optionOne="1 traveler"
          optionTwo="2 traveler"
          optionThird="3 traveler"
          optionFourth="4 traveler"
        />
        <Button className="bg-[#1F4AA8] text-white rounded-xl">Search</Button>
      </TabsContent>
    </div>
  );
};

export default Stays;
