import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import PriceInput from "@/components/form/Priceinput";
import TextAreaInput from "@/components/form/TextareaInput";
import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, price, description, image, featured, company } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-8">update product</h1>
      <div className="border p-8 rounded">
        {/* IMAGE */}
        <ImageInputContainer
          action={updateProductImageAction}
          name="image"
          image={image}
          text="update image"
        >
            <input type="hidden" name="id" value={id}/>
            <input type="hidden" name="url" value={image}/>
        </ImageInputContainer>
        {/* DETAILS */}
        <FormContainer action={updateProductAction}>
          <div className="grid md:grid-cols-2 my-4 gap-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              defaultValue={name}
              name="name"
              label="product name"
            />
            <FormInput
              type="text"
              defaultValue={company}
              name="company"
              label="company"
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            defaultValue={description}
            labelText="product description"
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-9" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProductPage;
