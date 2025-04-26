'use client'
import { useState } from "react";
import { Button } from "../ui/button"
import { useAuth } from "@clerk/nextjs";
import SingleProductAmount from "./SingleProductAmount";
import { Mode } from "./SingleProductAmount";
import { ProductSignInButton, SubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";
import { addToCartAction } from "@/utils/actions";
function AddToCart({productId}:{productId:string}) {
  const [amount,setAmount] = useState(1)
  const {userId} = useAuth()
  return <div className="mt-4">
    <SingleProductAmount mode={Mode.SingleProduct} amount={amount} setAmount={setAmount}/>
    {userId?<FormContainer action={addToCartAction}>
    <input type="hidden" name="productId" value={productId} />
    <input type="hidden" name="amount" value={amount} />
    <SubmitButton text="add to cart" className="mt-4 w-[150px]"/>
    </FormContainer>:<ProductSignInButton className='w-[150px]'/>}
  </div>
}
export default AddToCart