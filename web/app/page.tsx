"use client"
import Image from "next/image"
import { FC } from "react"

export default function Home() {
  return (
    <main>
      <div className="flex items-start min-h-screen w-full bg-white">
        <div className="flex py-[106px] gap-[124px] flex-col w-full h-full items-center justify-center">
          <span className="text-[80px] italic text-electric-sky font-title">
            EP Declaration
          </span>
          {/* Newsletter aspect ratio */}
          <div className="flex flex-col lg:w-[936px] gap-[124px]">
            {/* Section 1 */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-6 w-[456px]">
                <span className="font-medium text-[32px] text-dark">
                  The world needs change
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`Today’s world seems to be defined by its problems. Climate
                  change, income inequality, systematic racial oppression,
                  political polarization, menstrual rights—the list goes on and
                  on.`}
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`With so many concerns and no solutions in sight it’s easy
                  to feel like there’s no hope for change. But as the next
                  generation of leaders, we are the last stand for change.`}
                </span>
              </div>
              <div className="relative flex h-[411px] w-[376px]">
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src="/change-pose.png"
                  alt="change-pose"
                />
              </div>
            </div>
            {/* Section 2 */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-6 w-[535px] order-last">
                <span className="font-medium text-[32px] text-dark">
                  Who is Gen Z?
                </span>
                <span className="font-medium text-[18px] text-dark">
                  TL;DR: Born between 1997-2012
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`We're young — most of us born after 1997, not old enough to remember a pre-9/11 America or a time without smartphones and social media. Despite our youth, there's almost 65 million of us in just the United States and 2.47 billion across the globe—officially making Gen Z the largest demographic age group.`}
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`We're angry — who wouldn't when born into a world riddled environmental, political, and social problems? When you grow up seeing your parents lose their jobs to the recession, older siblings becoming straddled with crippling student loan debt, and fellow students shot within their own schools.`}
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`And we're tired — tired of being seen as just Tik Tok famous, Insta-obessed kids. We know we have the power to make change, we just have to unlock our potential.`}
                </span>
              </div>
              <div className="relative flex h-[563px] w-[376px]">
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src="/genz-march.png"
                  alt="genz-march"
                />
              </div>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col items-center gap-[48px]">
              <span className="text-[56px] font-title italic">
                We believe Gen Z is:
              </span>
              <div className="flex flex-wrap gap-[24px]">
                {Array(4)
                  .fill(0)
                  .map((x, i) => (
                    <ArticleSquare
                      key={i}
                      number={i + 1}
                      header={content[i].header}
                      p1={content[i].p1}
                      p2={content[i].p2}
                    />
                  ))}
              </div>
            </div>
            {/* Section 4 */}
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-6 w-[456px]">
                <span className="font-medium text-[32px] text-dark">
                  Leading a positively charged
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`That’s why we created Electric Potential - we genuinely believe in the power of our generation.`}
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`With a personalized action plan to help discover your path, in-depth awareness in critical issues, and a community of Gen Z changemakers on your side, we know there’s nothing you can’t do.`}
                </span>
              </div>
              <div className="relative flex h-[456px] w-[562.8px]">
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src="/hands-touching.png"
                  alt="hands-touching"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const content = [
  {
    header: "The key to breaking through the echo chamber",
    p1: `A new Pew Research Center analysis found that the “post-Millennial” generation is already the most racially and ethnically diverse group yet, with 48% of 6- to 21-year-olds identifying as non-white.`,
    p2: `Diversity of thought and background is the key to breaking down the walls of social media's rigid echo chamber and by reassessing, rebuilding, and diversifing our opinions on social issues, we can close the polarization gap.`,
  },
  {
    header: "Tackling historically-rooted, systemic issues",
    p1: `So many of the problems we as a society face today are rooted in not a singular "bad" apple, but long existant systems that have maintained.`,
    p2: `60% of Gen Z stated they want a job that will impact the world and that the top priority issues of our generation are these entrenched systemic issues like gun control, human rights, environmental/sustainability, homelessness, and healthcare reform.`,
  },
  {
    header: `Not "too young to make change"`,
    p1: `From the thousands of students who protested with Greta Thunberg to the hundreds of student-led organizations in our database, we've shown that we're more than capable of making a real difference.`,
    p2: `Moreover, 74% of surveyed Gen Zers said they wish they could do more to help support the causes they care about, but factors such as lack of money (54 %), lack of time (41 %), and lack of access (22 %) hold them back. Imagine what would happen if this potential for change was unleashed.`,
  },
  {
    header: "Providing a Diversified Opinion",
    p1: `Everyone provides a differing, valuable perspectives, but so often those differences are portrayed as a drawback, leading to the intense polarization and division in thought we see today.`,
    p2: `We at EP stand for not only taking a non-biased look at issues, but also encourage you to share your diverse perspective. That’s why we try to crowdsource from and focus our content on other Gen Zers as much as possible, and have a zero-toleralance policy on hate speech, violence, and bigamist language.`,
  },
]

const ArticleSquare: FC<{
  header: string
  p1: string
  p2: string
  number: number
}> = ({ header, p1, p2, number }) => (
  <div className="grid grid-flow-row gap-[16px] w-[48.7%]">
    <div className="gap-[24px] col-span-8 grid grid-flow-col auto-cols-fr items-center">
      <span className="text-shade italic text-[56px] font-title col-span-1">
        {number}.
      </span>
      <span className="text-dark-sky text-[24px] font-medium col-span-6 w-[392px]">
        {header}
      </span>
    </div>
    <div className="gap-6 col-span-9 grid grid-flow-col auto-cols-fr">
      <span className="col-span-1"></span>
      <div className="flex flex-col col-span-8 gap-[24px]">
        <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
          {p1}
        </span>
        <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
          {p2}
        </span>
      </div>
    </div>
  </div>
)
