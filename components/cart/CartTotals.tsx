import { formatCurrency } from "@/utils/format"
import { Cart } from "@prisma/client"
import { Separator } from "../ui/separator"
import { Card, CardContent, CardTitle } from "../ui/card"
import FormContainer from "../form/FormContainer"
import { CreateOrderAction } from "@/utils/actions"
import { SubmitButton } from "../form/Buttons"

function CartTotals({cart}:{cart:Cart}) {
    const {cartTotal,tax,shipping,orderTotal} = cart
  return (
    <div>
      <Card className="p-4">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={CreateOrderAction}>
        <SubmitButton text="place order" className="w-full mt-8"/>
      </FormContainer>
    </div>
  );
}

function CartTotalRow ({amount,label,lastRow}:{
    amount:number,
    label:string,
    lastRow?:boolean
}){
return <>
<p className="text-sm flex justify-between">
<span>{label}</span>
<span>{formatCurrency(amount)}</span>
</p>
{lastRow?null:<Separator className="my-2"/>}
</>
}
export default CartTotals