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
};

const CustomSelect = ({
  optionOne,
  optionTwo,
  optionThird,
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
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
