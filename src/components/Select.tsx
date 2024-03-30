import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type CustomSelectProps = {
  title: string;
  optionOne: string;
  optionTwo: string;
  optionThird: string;
  optionFourth: string;
};

const CustomSelect = ({
  optionOne,
  optionTwo,
  optionThird,
  optionFourth,
  title,
}: CustomSelectProps) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={optionOne}>{optionOne}</SelectItem>
          <SelectItem value={optionTwo}>{optionTwo}</SelectItem>
          <SelectItem value={optionThird}>{optionThird}</SelectItem>
          <SelectItem value={optionFourth}>{optionFourth}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
