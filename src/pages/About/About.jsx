import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m Franklin, a full stack blockchain engineer with 10 years of experience in full-stack, core development, and Web3 development. I’ve been focused on smart contracts, DeFi systems, and zero-knowledge proofs. I’ve worked on gas-optimized Solidity contracts and privacy-preserving zk-SNARK/STARK integrations. I led frontend and smart contract work, helping scale to over 50,000 users.{" "}
              </p>
              <p className="text-white">
                My focus is on making EVM faster, easier, and
                accessible to all customers. Currently, I'm researching about scalable Layer 2.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Franklin Liu
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
