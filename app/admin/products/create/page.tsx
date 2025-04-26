import {SubmitButton} from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/Priceinput";
import TextAreaInput from "@/components/form/TextareaInput";
import { Button } from "@/components/ui/button"
import { createProductAction } from "@/utils/actions";

import { faker } from "@faker-js/faker";

function CreateProductPage() {
    const name = faker.commerce.productName()
    const company = faker.company.name()
    const description = faker.lorem.paragraph({min:10,max:12})
  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-4">create product</h1>
      <div className="p-8 border rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid md:grid-cols-2 gap-4 my-4 ">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput/>
            <ImageInput/>
          </div>
          <TextAreaInput name="description" labelText="description" defaultValue={description}/>
          <div className="mt-4">
            <CheckboxInput name="featured" label='featured'/>
          </div>
          <SubmitButton className="mt-4" text="create product"/>
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage