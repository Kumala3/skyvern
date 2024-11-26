import { ProxyLocation } from "@/api/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  value: ProxyLocation | null;
  onChange: (value: ProxyLocation) => void;
  className?: string;
};

function ProxySelector({ value, onChange, className }: Props) {
  return (
    <Select value={value ?? ""} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Proxy Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ProxyLocation.Residential}>Residential</SelectItem>
        <SelectItem value={ProxyLocation.ResidentialES}>
          Residential (Spain)
        </SelectItem>
        <SelectItem value={ProxyLocation.ResidentialIE}>
          Residential (Ireland)
        </SelectItem>
        <SelectItem value={ProxyLocation.ResidentialIN}>
          Residential (India)
        </SelectItem>
        <SelectItem value={ProxyLocation.ResidentialJP}>
          Residential (Japan)
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export { ProxySelector };
