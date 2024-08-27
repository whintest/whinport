import { cn } from "@/lib/utils";
import { string } from "three/webgpu";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

type Data = {
  id: Number,
  des: String,
};
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  data,
  index,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  data: Data[];
  index: Number;
}) => {
  console.log(data)
  return (
    <div
      className={cn(
        "flex-wrap row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className={`grid ${index == 4 ? "grid-cols-1" : "grid-cols-2"} group-hover/bento:translate-x-2 transition duration-200`}>
        {icon}
        <div className={`${index == 4 ? "" : "col-span-2"} md:text-2xl text-xl sfont-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 pb-4`}>
          {title}
        </div>
        {data.map((d) =>
          <div className="md:text-lg text-base font-sans font-normal text-neutral-600 dark:text-neutral-300">
          {d.des}
          </div>
        )}
      </div>
    </div>
  );
};
