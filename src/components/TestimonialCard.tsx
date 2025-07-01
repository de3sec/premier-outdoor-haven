
interface TestimonialCardProps {
  name: string;
  testimonial: string;
  imageUrl: string;
}

const TestimonialCard = ({ name, testimonial, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div>
        <p className="text-white text-base font-medium leading-normal">{name}</p>
        <p className="text-text-green text-sm font-normal leading-normal">"{testimonial}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
