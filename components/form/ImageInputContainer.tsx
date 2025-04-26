"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer({
  image,
  name,
  action,
  text,
  children,
}: ImageInputContainerProps) {
  const [isUpdateImageVisible, setUpdateImageVisibie] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        height={200}
        width={200}
        className="rounded-md object-cover mb-4 w-[200px] h-[200px]"
      />
      <Button variant='outline' size='sm'
      onClick={()=>
        setUpdateImageVisibie(!isUpdateImageVisible)
      }
      className="capitalize">
        {text}
      </Button>
      {isUpdateImageVisible&&(
        <div className="max-w-md mt-4">
            <FormContainer action={action}>
                {children}
                <ImageInput/>
                <SubmitButton size="sm" text={text}/>
            </FormContainer>

        </div>
      )}
    </div>
  );
}
export default ImageInputContainer;
