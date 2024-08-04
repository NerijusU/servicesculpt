import OfferForm from '@/components/forms/OfferForm';

const CreateOffer = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            alt="create-post"
            width={24}
            height={24}
          />
          <h2 className="h-3-bold md:h2-bold text-left w-full">Create Offer</h2>
        </div>
        <OfferForm action="Create" />
      </div>
    </div>
  );
};

export default CreateOffer;
