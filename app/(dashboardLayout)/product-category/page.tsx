'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axiosInstance from '@/utils/axiosInstance'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

// Product Category zod schema
export const productCategorySchema = z.object({
  name: z.string("Category Name is required"),
})

const ProductCategory = () => {


  const form = useForm<z.infer<typeof productCategorySchema>>({
    resolver: zodResolver(productCategorySchema),
    defaultValues: {
      name: ""
    }
  })


  // add product category
  const addProductCategory = async(values: z.infer<typeof productCategorySchema>) => {

    const categoryData = values

    try{
      const result = await axiosInstance.post('/product-category', categoryData)

    }catch(error){
      console.log('Error while creating product category.')
    }
  }


  return (
    <div>
      <h1 className="px-5 font-bold text-center text-3xl mb-5">Add Product Category</h1>

      <div className='w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addProductCategory)}>
            {/* product title  */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl className='mb-5'>
                    <Input className='py-5' placeholder="Category Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' className="w-full">Add Category</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ProductCategory
