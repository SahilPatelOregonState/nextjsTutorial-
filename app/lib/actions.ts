'use server';

// Because this is a server function/component it must be async
// customer_id UUID NOT NULL,
//       amount INT NOT NULL,
//       status VARCHAR(255) NOT NULL,
//       date DATE NOT NULL,

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
