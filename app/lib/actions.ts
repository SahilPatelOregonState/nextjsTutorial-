'use server';
import * as z from 'zod'
import { date } from 'zod/v4';
import { id } from 'zod/v4/locales';

const FormSchema = z.object({
    id:z.string(),
    customerId: z.number(),
    amount:z.number(),
    status:z.enum(["pending", "paid"]),
    date: z.string()
})

const CreateInvoice = FormSchema.omit({id: true, date:true})



// export type Invoice = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   date: string;
//   status: 'pending' | 'paid';
// };
export async function createInvoice(formData: FormData){
    const rawFormData = {
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status")
    }
    //Test it out
    console.log(rawFormData)
    for (const [key, value] of Object.entries(rawFormData)){
        console.log(`typeof ${key}:${typeof value} `)


    }
}
