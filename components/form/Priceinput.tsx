import { Label } from "../ui/label";
import { Input } from "../ui/input";

type PriceInputProps = {
    defaultValue?:number
}

function PriceInput({defaultValue}:PriceInputProps) {
    const name = 'price'
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type='number'
        defaultValue={defaultValue||100}
        min={0}

        required
      />
    </div>
  );
}
export default PriceInput