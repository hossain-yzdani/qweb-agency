import Image from "next/image";

type TProps = {
  title: string,
  imageSrc: string,
  imageAlt: string,
  description: string
}

const ClientsPreviewItem = ({ title , imageSrc , imageAlt , description }: TProps) => {
  return (  
    <div className="text-white flex lg:flex-row-reverse flex-col p-2">
      <div className="flex justify-center lg:justify-end  items-center flex-1">
        <Image width={30} height={30} className="w-20 rounded-lg" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="flex-2 p-2 flex flex-col gap-2">
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
 
export default ClientsPreviewItem;