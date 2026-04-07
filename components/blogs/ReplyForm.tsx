import React from "react";

const ReplyForm: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] sm:p-12.5 p-6 rounded-3xl mt-12">
      <div className="lg:mb-10 mb-6">
        <h3 className="2xl:text-5xl xl:text-4xl text-3xl font-medium mb-3">
          Leave a Reply
        </h3>
        <p className="text-secondary/60">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullname" className="block text-secondary font-medium">
              Full Name*
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              required
              placeholder="John Carter"
              className="w-full py-3 bg-transparent border-b-2 border-secondary/20 focus:border-primary focus:outline-none transition-colors text-lg"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-secondary font-medium">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="info@example.com"
              className="w-full py-3 bg-transparent border-b-2 border-secondary/20 focus:border-primary focus:outline-none transition-colors text-lg"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="comments" className="block text-secondary font-medium">
            Comments*
          </label>
          <textarea
            name="comments"
            id="comments"
            required
            rows={5}
            placeholder="Write your thoughts here..."
            className="w-full py-3 bg-transparent border-b-2 border-secondary/20 focus:border-primary focus:outline-none transition-colors text-lg resize-none"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-hover px-10 py-4">
          <span>Submit Reply</span>
        </button>
      </form>
    </div>
  );
};

export default ReplyForm;
