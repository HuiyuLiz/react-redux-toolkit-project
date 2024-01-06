import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { addCar } from '../store/slices/carsSlice'
import { changeName, changeCost } from '../store/slices/formSlice'

const formSchema = z.object({
  name: z.string().min(1).max(10),
  cost: z.coerce.number(),
})

const CarForm = () => {
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: useSelector((state: RootState) => state.form.name),
      cost: useSelector((state: RootState) => state.form.cost),
    },
  })

  const submit = (values: z.infer<typeof formSchema>) => {
    dispatch(addCar({ name: values.name, cost: values.cost }))
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="w-full flex items-end"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mr-4">
              <FormLabel className="font-bold">Brand Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value)
                    dispatch(changeName(e.target.value))
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cost"
          render={({ field }) => (
            <FormItem className="mr-4">
              <FormLabel className="font-bold">Cost</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value.slice(0, 5))
                    dispatch(changeCost(+e.target.value))
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="ml-auto" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default CarForm
