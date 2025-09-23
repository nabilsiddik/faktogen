'use client'

import React, { useEffect, useState } from 'react'
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { productZodSchema } from '@/lib/validations/productZodSchema'
import { createProduct } from '@/actions/create'

const AddProduct = () => {
  const [categories, setCategories] = useState<any>()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/product-category");

        const data: any = await res.json()
        setCategories(data);
      } catch (error: any) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories()
  }, [])

  console.log(categories)


  const form = useForm<z.infer<typeof productZodSchema>>({
    resolver: zodResolver(productZodSchema),
    defaultValues: {
      title: "",
      // featuredImage: "",
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
  const addNewProduct = async (productData: z.infer<typeof productZodSchema>) => {
    const res = await createProduct(productData)

    if (res.success) {
      console.log('success dsfsd', res.data)
    } else {
      console.log('failed', res.error)
    }
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

            {/* select category  */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className='mb-5 w-full'>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>

                    {!loading &&
                      <SelectContent>
                        {categories?.data?.length > 0 && categories?.data?.map((category: any, index: number) =>
                          <SelectItem key={index} value={category.name}>{category.name}</SelectItem>
                        )}
                      </SelectContent>
                    }
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                  <div className='flex items-center gap-5 flex-6'>
                    <Input
                      {...form.register(`features.${index}.key`)}
                      type='text' placeholder='Feature Name' />
                    <Input
                      {...form.register(`features.${index}.value`)}
                      type='text' placeholder='Feature Value' />
                  </div>

                  <Button variant='destructive' type='button' className='cursor-pointer flex-1' onClick={() => remove(index)}>X</Button>
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
