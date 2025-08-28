import ReelCard from "@/components/shared/ReelCard";
import { TESTIMONIALS } from "@/constants/testimonials";
import { ICloudinaryVid } from "@/lib/fetch-cloudinary-videos";
import { IGoogleDriveVideo } from "@/types/google-drive";
import Image from "next/image";

export function TestimonialCard({
  testimonial,
  video,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  video: ICloudinaryVid;
}) {
  return (
    <div className="relative bg-[#E0AAFE] backdrop-blur-md rounded-lg p-6 overflow-hidden w-full flex-shrink-0 mx-3">
      <div className="flex items-center justify-center flex-col sm:flex-row gap-12">
        <div className="text-background ">
          <div className="flex items-center mb-4">
            <div className="flex">
              <Image
                src={"/images/avatar-1.png"}
                alt={testimonial.name}
                width={100}
                height={100}
                className="size-15 object-cover rounded-full"
              />
              <Image
                src={"/images/framer-motion.png"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="relative top-1.5 -left-6 shadow size-12 object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center -ml-2">
              <span className="font-semibold">{testimonial.name}</span>
              <span className="text-sm opacity-80">{testimonial.position}</span>
            </div>
          </div>
          <p className="text-xl font-clash-display font-[500] mb-6">
            {testimonial.quote}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div>
              <div className="relative font-clash-display text-3xl font-semibold">
                <span>{testimonial.engagement}</span>
                <Image
                  src="/svgs/happy.svg"
                  alt="Engagement"
                  width={35}
                  height={35}
                  className="absolute -top-2 -right-6"
                />
              </div>
              <div className="text-sm">Engagement lift</div>
            </div>
            <div>
              <div className="relative font-clash-display text-3xl font-semibold">
                <span>{testimonial.views}</span>
                <Image
                  src="/svgs/views.svg"
                  alt="Views"
                  width={35}
                  height={35}
                  className="absolute -bottom-6 sm:-bottom-1 -left-9 sm:-right-6"
                />
              </div>
              <div className="text-sm">Total Views</div>
            </div>
          </div>
        </div>
        <ReelCard
          reel={video}
          className="min-w-48 h-68 border-2 border-[#D8FF1E]"
        />
      </div>
    </div>
  );
}
