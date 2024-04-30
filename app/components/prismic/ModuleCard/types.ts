import { ImageField, LinkField, RichTextField } from "@prismicio/client"

export interface IModuleCardProps {
    image: ImageField
    title: RichTextField
    description: RichTextField
    link: LinkField
}