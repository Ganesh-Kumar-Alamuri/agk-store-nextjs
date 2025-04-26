'use client'
import { FaStar,FaRegStar } from "react-icons/fa";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { useState } from "react";

function RatingInput({ name, labelText }: { name: string; labelText?: string }) {
  const [starVal,setStarVal ] = useState(5)
  return <div className="mb-2 max-w-xs">
    <Label htmlFor={name} className="capitalize">
        {labelText||name}
    </Label>
    <RadioGroup defaultValue={starVal.toString()} name={name} required className="flex space-x-1 items-center">
        {[1,2,3,4,5].map((star)=>{
            return (
              <>
              <RadioGroupItem value={star.toString()} key={star} id={star.toString()} className="peer sr-only"/>
              <Label htmlFor={star.toString()}>
                <Button size="icon" variant='ghost' asChild onClick={()=>setStarVal(star)} className="h-6 w-6 hover:disabled:bg-current">
                  {star>starVal?<FaRegStar />:<FaStar/>}
                </Button>
              </Label>
              </>
                
              

            );
        })}
    </RadioGroup>
  </div>;
}

export default RatingInput;
