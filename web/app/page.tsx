"use client"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div className="flex items-start min-h-screen w-full bg-white">
        <div className="flex py-[106px] gap-[124px] flex-col w-full h-full items-center justify-center">
          <span className="text-[80px] italic text-electric-sky font-title">
            EP Declaration
          </span>
          <div className="flex flex-col lg:w-[936px] gap-[124px]">
            {/* Row 1 */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-6 w-[456px]">
                <span className="font-medium text-[32px] text-dark">
                  The world needs change
                </span>
                <span className="text-shadow leading-[30px] font-normal tracking-looser text-[16px]">
                  {`Today’s world seems to be defined by its problems. Climate
                  change, income inequality, systematic racial oppression,
                  political polarization, menestural rights—the list goes on and
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
            {/* Row 2 */}
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
          </div>
        </div>
      </div>
    </main>
  )
}
