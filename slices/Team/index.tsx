import { HexagonContainer, PageSection, PageSectionContent } from "@app//components/common";
import { Image, RichText, SectionTitle } from "@app//components/prismic";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="time"
    >
      <PageSection>
        <PageSectionContent className="gap-16 flex-col w-full">
          <SectionTitle title={slice.primary.title} />
          <div className="flex justify-between gap-3 w-full flex-wrap">
            {slice.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <HexagonContainer className="w-52 h-52">
                  <Image field={item.picture} className="w-48 h-48 object-cover" />
                </HexagonContainer>
                <div className="flex flex-col items-center">
                  <RichText field={item.name} className="font-bold  text-primary opacity-70" />
                  <RichText field={item.description} className="font-normal text-primary w-32 text-center" />
                </div>
              </div>
            ))}
          </div>
        </PageSectionContent>
      </PageSection>
    </section>
  );
};

export default Team;
