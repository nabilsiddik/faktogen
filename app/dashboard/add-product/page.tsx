'use client'

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { useFieldArray, useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

export const productZodSchema = z.object({
  title: z.string("Title is required"),
  featuredImage: z.string("Featured image is required"),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  category: z.string("Category is required"),
  oldPrice: z.number().optional(),
  price: z.number("Price is required"),
  features: z.array(
    z.object({
      key: z.string('Key Is Required'),
      value: z.union([z.string(), z.number()])
    })
  ).optional()
});
const AddProduct = () => {

  const form = useForm<z.infer<typeof productZodSchema>>({
    resolver: zodResolver(productZodSchema),
    defaultValues: {
      title: "",
      featuredImage: "",
      shortDescription: "",
      longDescription: "",
      category: "",
      oldPrice: 0,
      price: 0,
      features: [],
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'features'
  })

  // Add feature field
  const addFeature = () => {
    append({ key: '', value: '' })
  }

  // add product
  const addNewProduct = (values: z.infer<typeof productZodSchema>) => {
    console.log(values)
  }

  return (
    <div>
      <h1 className="px-5 font-bold text-center text-3xl">Add Products</h1>

      <div className='w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addNewProduct)}>
            {/* product title  */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl className='mb-5'>
                    <Input className='py-5' placeholder="Product Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex items-center gap-5'>
              {/* product old Price  */}
              <FormField
                control={form.control}
                name="oldPrice"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Regular Price</FormLabel>
                    <FormControl className='mb-5'>
                      <Input type='number' className='py-5' placeholder="Regular Price" {...field} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* product new Price  */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Sale Price</FormLabel>
                    <FormControl className='mb-5'>
                      <Input type='number' className='py-5' placeholder="Sale Price" {...field} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* product short description  */}
            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl className='mb-5'>
                    <Textarea {...field} placeholder="Short Description..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* product long description  */}
            <FormField
              control={form.control}
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl className='mb-5'>
                    <Textarea {...field} placeholder="Long Description..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <hr />

            <div className='flex items-center justify-between mt-10 mb-5'>
              <h3 className='text-xl font-bold'>Add Features</h3>
              <Button className='cursor-pointer' type='button' onClick={addFeature}>+</Button>
            </div>

            <div>
              {fields.map((field, index) => {
                return <div className='flex items-center gap-3 mb-5'>
                  <div className='flex items-center gap-5'>
                    <Input type='text' placeholder='Feature Name' />
                    <Input type='text' placeholder='Feature Value' />
                  </div>

                  <Button variant='destructive' type='button' className='cursor-pointer' onClick={() => remove(index)}>X</Button>
                </div>
              })}
            </div>

            <Button type='submit' className="w-full">Add Product</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AddProduct
