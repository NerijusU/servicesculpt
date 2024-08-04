import * as z from 'zod';
import { Models } from 'appwrite';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { OfferValidation } from '@/lib/validation';
import { useToast } from '@/components/ui/use-toast';
import { useUserContext } from '@/context/AuthContext';
import { useCreateOffer, useUpdateOffer } from '@/lib/react-query/offer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';
import Loader from '../shared/Loader';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import FileDropper from '../shared/FileDropper';

type OfferFormProps = {
  offer?: Models.Document;
  action: 'Create' | 'Update';
};

const OfferForm = ({ offer, action }: OfferFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUserContext();
  const form = useForm<z.infer<typeof OfferValidation>>({
    resolver: zodResolver(OfferValidation),
    defaultValues: {
      title: offer ? offer?.title : '',
      description: offer ? offer?.description : '',
      price: 0,
      subtitle: offer ? offer?.subtitle : '',
      duration: 0,
    },
  });

  // Query
  const { mutateAsync: createOffer, isPending: isLoadingCreate } =
    useCreateOffer();
  const { mutateAsync: updateOffer, isPending: isLoadingUpdate } =
    useUpdateOffer();

  // Handler
  const handleSubmit = async (value: z.infer<typeof OfferValidation>) => {
    console.log('handleSubmit', value);
    // ACTION = UPDATE
    if (offer && action === 'Update') {
      const updatedPost = await updateOffer({
        ...value,
        offerId: offer.$id,
        userId: user.username,
        imageMap: offer.files,
      });

      if (!updatedPost) {
        toast({
          title: `${action} offer failed. Please try again.`,
        });
      }
      return navigate(`/offers/${offer.$id}`);
    }

    // ACTION = CREATE
    const newoffer = await createOffer({
      ...value,
      userId: user.id,
      imageMap: value.imageMap,
    });

    if (!newoffer) {
      toast({
        title: `${action} offer failed. Please try again.`,
      });
    }
    navigate(`/profile/${user.username}/offers`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-9 w-full  max-w-5xl"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Title</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Title"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Subtitle</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Subtitle"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Description</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageMap"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Photos</FormLabel>
              <FormControl>
                <FileDropper
                  fieldChange={field.onChange}
                  mediaUrl={offer?.ImageMap[0]?.imageUrl}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Duration</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Duration"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Price"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <div className="flex gap-4 items-center justify-end">
          <Button
            type="button"
            className="shad-button_dark_4"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap"
            disabled={isLoadingCreate || isLoadingUpdate}
          >
            {(isLoadingCreate || isLoadingUpdate) && <Loader />}
            {action} Offer
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OfferForm;
