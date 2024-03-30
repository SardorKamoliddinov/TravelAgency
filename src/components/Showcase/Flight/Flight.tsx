import { DatePickerDemo } from "@/components/Popover";
import CustomSelect from "@/components/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TabsContent } from "@/components/ui/tabs";
import { ArrowRightLeft } from "lucide-react";

const Flight = () => {
  return (
    <div>
      <TabsContent value="flight">
        <div className="flex justify-between items-center flex-wrap">
          <RadioGroup
            defaultValue="option-one"
            className="flex justify-center items-center gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-way" id="one-way" />
              <Label htmlFor="one-way" className="text-xl">
                One-way
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="return" id="return" />
              <Label htmlFor="return" className="text-xl">
                Return
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="multi-city" id="multi-city" />
              <Label htmlFor="multi-city" className="text-xl">
                Multi-city
              </Label>
            </div>
          </RadioGroup>
          <div className="flex justify-center gap-4">
            <CustomSelect
              title="Traveler"
              optionOne="1 traveler"
              optionTwo="2 traveler"
              optionThird="3 traveler"
              optionFourth="4 traveler"
            />
            <CustomSelect
              title="Economy"
              optionOne="Premium"
              optionTwo="Business class"
              optionThird="First class"
              optionFourth="Economy"
            />
          </div>
          <div className="flex justify-center gap-5 w-full mt-3">
            <Input placeholder={"from"} className="border-solid border-black" />
            <div className="text-xl border border-solid border-black rounded-full flex justify-center items-center px-2 cursor-pointer">
              <ArrowRightLeft />
            </div>
            <Input placeholder="to" className="border-solid border-black" />
          </div>
          <div className="flex justify-center items-center gap-5 mt-5 w-full">
            <DatePickerDemo title="Departing" />
            <DatePickerDemo title="Returning" />
            <Button className="bg-[#1F4AA8] text-white rounded-xl text-xl">
              Search
            </Button>
          </div>
        </div>
      </TabsContent>
    </div>
  );
};

export default Flight;
