import { PageSection, PageSectionContent } from "@app//components/common";
import { RichText, SectionTitle } from "@app//components/prismic";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="sobre"
    >
      <PageSection className="bg-primary pb-64">
        <PageSectionContent className="gap-16 flex-col relative w-full">
          <SectionTitle title={slice.primary.title} color="text-neutral-100" />
          <div className="flex gap-6 wrap absolute bottom-[-420px] w-6xl">
            {slice.items.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 shadow-base rounded-lg py-4 px-4 bg-neutral-100 w-full">
                <RichText field={item.concept} className="font-normal text-neutral-50" />
                <RichText field={item.description} className="font-light text-xl text-neutral-50" />
              </div>
            ))}
          </div>
        </PageSectionContent>
      </PageSection>
      <PageSection className="pb-12" />
    </section>
  );
};

export default About;
