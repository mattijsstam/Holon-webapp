import Sentiment from "./Sentiment";
import SubscriptionForm from "./SubscriptionForm";

export default function FeedbackBlock() {
  return (
    <div className="flex-col items-start text-white">
      <div className="flex flex-col items-center justify-center">
        <Sentiment />
        <h1 className="w-full pb-6 text-center text-5xl font-semibold">
          Schrijf je in voor updates
        </h1>
        <SubscriptionForm />
      </div>
    </div>
  );
}
