import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
import { changeSearchTerm } from '../store/slices/carsSlice'

const formSchema = z.object({
  searchTerm: z.string(),
})

const SearchTermInput = () => {
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchTerm: useSelector((state: RootState) => state.cars.searchTerm),
    },
  })

  return (
    <Form {...form}>
      <form className="flex items-end space-x-4 mb-4">
        <FormField
          control={form.control}
          name="searchTerm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Search</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value)
                    dispatch(changeSearchTerm(e.target.value))
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SearchTermInput
