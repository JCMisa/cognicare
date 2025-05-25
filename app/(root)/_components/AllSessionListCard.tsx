import Image from "next/image";
import React from "react";

const AllSessionListCard = () => {
  return (
    <div className="bg-light-100 dark:bg-dark-100 p-3 rounded-lg shadow-md flex items-center gap-4 w-full">
      <Image
        alt="sample"
        src="/empty-img.png"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/blur.jpg"
        width={1000}
        height={1000}
        className="rounded-md bg-light dark:bg-dark w-10 h-10"
      />

      <div className="flex flex-col items-start">
        <p className="text-sm font-semibold line-clamp-1">title</p>
        <span className="text-xs text-muted-foreground line-clamp-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
          provident. Autem veniam alias laborum natus non aliquid facilis
          consequatur, blanditiis cum minima ex, debitis soluta error excepturi,
          enim adipisci quidem ullam? Voluptatibus quis eius ullam aut quisquam
          sed asperiores repudiandae nemo blanditiis nostrum, voluptate quae
          labore sunt dicta reprehenderit doloribus.
        </span>
      </div>
    </div>
  );
};

export default AllSessionListCard;
