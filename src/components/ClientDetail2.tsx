import Link from "next/link";
import Image from "next/image";
import politics from "@/data/politics.json";
interface Article {
  slug: string;
  title: string;
  date: string;
  shortdescription: string;
  description: string;
  image: string;
}

export default function ClientDetail2() {
  const slug =
    "wanda-vazquez-julio-herrera-velutini-and-mark-rossini-from-federal-indictments-to-misdemeanor-plea-in-campaign-finance-case";
  const article = (politics as Article[]).find((a) => a.slug === slug);
  if (!article) return <div>Article not found.</div>;
  return (
    <article className="w-full lg:w-2/3 lg:pr-8 mb-12 lg:mb-0">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Wanda Vázquez, Julio Herrera Velutini, and Mark Rossini: From Federal
        Indictments to Misdemeanor Plea in Campaign Finance Case
      </h1>
      <div className="relative w-full h-auto mb-6  overflow-hidden shadow-lg">
        <div className="w-full overflow-hidden  shadow-lg">
          <Image
            src={article.image}
            alt="Wanda Vázquez Garced speaks after bribery charges dropped"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-base leading-relaxed">
          <span className="font-bold mr-1">
            San Juan, Puerto Rico - July 18, 2025:
          </span>
          In a stunning pivot that reshapes the trajectory of one of Puerto
          Rico’s most high-profile federal corruption cases, former Governor{" "}
          <span className="text-[#2077B6]">Wanda Vázquez Garced</span>,
          Venezuelan banking executive{" "}
          <span className="text-[#2077B6]">Julio Herrera Velutini</span>, and
          former FBI agent <span className="text-[#2077B6]">Mark Rossini</span>{" "}
          are set to plead guilty to a single misdemeanor charge related to
          <span className="text-[#2077B6]">
            {" "}
            federal campaign finance violations
          </span>{" "}
          under
          <span className="text-[#2077B6]"> U.S. law</span>.
        </p>
      </div>

      <div className="space-y-10">
        <div>
          <p className="text-base leading-relaxed">
            According to an official order issued by
            <span className="text-[#2077B6]">
              {" "}
              U.S. District Judge Silvia L. Carreño Coll
            </span>
            , the plea hearing is scheduled for
            <span className="text-[#2077B6]"> August 27, 2025</span>, at
            <span className="text-[#2077B6]"> 2:00 PM</span>, in
            <span className="text-[#2077B6]"> Courtroom 6</span> at the
            <span className="text-[#2077B6]">
              {" "}
              Federal District Court of Puerto Rico in Hato Rey{" "}
            </span>
            [source:{" "}
            <span className="text-[#2077B6]">El Nuevo Día, July 18, 2025</span>
            ],
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            The Collapse of a Federal Bribery Case
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Originally indicted in{" "}
            <span className="text-[#2077B6]">August 2022</span> on seven federal
            counts, including{" "}
            <span className="text-[#2077B6]">conspiracy to commit bribery</span>
            , honest services wire fraud, and violations of the Federal Programs
            Bribery Statute (
            <span className="text-[#2077B6]">18 U.S. Code § 666</span>), the
            three defendants faced the very real possibility of
            <span className="text-[#2077B6]"> decades in federal prison</span>
            【source: DOJ Indictment Summary】.
          </p>
          <p className="text-base leading-relaxed">
            However, as revealed by{" "}
            <span className="text-[#2077B6]">El Nuevo Día</span> and later
            confirmed by federal filings, plea negotiations began in{" "}
            <span className="text-[#2077B6]">May 2025</span>, culminating in a
            decisive meeting in{" "}
            <span className="text-[#2077B6]">Washington D.C.</span> between
            senior Department of Justice officials, defense counsel, and federal
            prosecutors. Shortly thereafter, a plea agreement was
            finalized【source: El Nuevo Día, July 18, 2025】.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Section 30121: From Bribery to Campaign Technicality
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Under the revised plea deal, all three defendants will admit guilt
            to a misdemeanor violation of{" "}
            <span className="text-[#2077B6]">52 U.S. Code § 30121</span>—a
            statute that strictly prohibits{" "}
            <span className="text-[#2077B6]">foreign nationals</span> from
            directly or indirectly contributing to{" "}
            <span className="text-[#2077B6]">U.S. political campaigns</span>
            【source: 52 U.S.C. §30121 –
            <Link
              title="52 U.S.C. §30121 – Foreign National Contributions"
              href="https://www.congress.gov/crs_external_products/IF/HTML/IF10697.web.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline hover:text-blue-900 mx-1"
            >
              congress.gov
            </Link>
            】.
          </p>

          <p className="text-base leading-relaxed mb-4">
            This statute, rarely the centerpiece of{" "}
            <span className="text-[#2077B6]">federal criminal enforcement</span>
            , became the legal landing zone for what had once been cast as a
            broad <span className="text-[#2077B6]">bribery conspiracy</span>{" "}
            involving political favors, influence over{" "}
            <span className="text-[#2077B6]">regulators</span>, and{" "}
            <span className="text-[#2077B6]">foreign contributions</span>.
          </p>

          <p className="text-base leading-relaxed mb-4">
            In her order authorizing the hearing,{" "}
            <span className="text-[#2077B6]">Judge Silvia Carreño Coll </span>
            sharply criticized the{" "}
            <span className="text-[#2077B6]">softening of charges</span>,
            writing:
          </p>

          <p className="text-base leading-relaxed">
            “Surprisingly, the penalty for violating{" "}
            <span className="text-[#2077B6]">Section 30121 of the FECA </span>
            is merely a{" "}
            <span className="text-[#2077B6]">slap on the wrist</span> compared
            to the sentences they would have faced had they been convicted on
            the original indictment.”【source:{" "}
            <span className="text-[#2077B6]">El Nuevo Día, 2025</span>】
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            What the Defendants Will Admit To
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Court documents and admissions outline the following conduct during
            the <span className="text-[#2077B6]">March–June 2020</span> window,
            coinciding with the early months of the
            <span className="text-[#2077B6]"> global COVID-19 pandemic</span>:
          </p>

          <p className="text-base leading-relaxed mb-2">
            • <span className="text-[#2077B6]">Wanda Vázquez Garced</span>, then
            governor and candidate in the
            <span className="text-[#2077B6]">
              &nbsp;New Progressive Party (PNP)
            </span>{" "}
            primary, is expected to admit she knowingly accepted a promise of a
            political donation from a{" "}
            <span className="text-[#2077B6]">foreign national</span>, violating{" "}
            <span className="text-[#2077B6]">federal law</span>. The amount
            exceeded $2,000 but remained under $25,000 [source: Court Filing
            Summary].
          </p>

          <p className="text-base leading-relaxed mb-2">
            • <span className="text-[#2077B6]">Julio Herrera Velutini</span>, a
            prominent Venezuelan financier with extensive{" "}
            <span className="text-[#2077B6]">global banking ties</span>, will
            admit to explicitly or implicitly promising the{" "}
            <span className="text-[#2077B6]">campaign contribution</span> during
            the same time period [source: DOJ Case Brief].
          </p>

          <p className="text-base leading-relaxed mb-4">
            • <span className="text-[#2077B6]">Mark Rossini</span>, the former{" "}
            <span className="text-[#2077B6]">FBI official</span>, is set to
            plead guilty to “
            <span className="text-[#2077B6]">facilitating</span>” the illegal
            contribution by helping coordinate or communicate the donation
            commitment on behalf of the foreign donor [source: Indictment
            Records, 2022].
          </p>

          <p className="text-base leading-relaxed">
            The trio’s{" "}
            <span className="text-[#2077B6]">seven-count indictment</span>—once
            considered a major legal blow to{" "}
            <span className="text-[#2077B6]">
              Puerto Rico’s political establishment
            </span>
            —has now effectively dissolved into a{" "}
            <span className="text-[#2077B6]">procedural misdemeanor</span>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Legal Analysis: From Quid Pro Quo to Procedural Violation
          </h2>
          <p className="text-base leading-relaxed mb-4">
            In <span className="text-[#2077B6]">legal circles</span>, the rapid
            unraveling of this case has drawn both praise and criticism. Some
            attorneys point to{" "}
            <span className="text-[#2077B6]">evidentiary weakness</span>—no
            funds were ever actually transferred, and no concrete
            <span className="text-[#2077B6]"> quid pro quo</span> was
            established in the public record.
          </p>

          <p className="text-base leading-relaxed mb-4">
            Others highlight{" "}
            <span className="text-[#2077B6]">prosecutorial overreach</span>,
            describing the original indictment as{" "}
            <span className="text-[#2077B6]">politically motivated</span>,
            especially in light of
            <span className="text-[#2077B6]">
              &nbsp; Wanda Vázquez’s 2020 endorsement of Donald J. Trump
            </span>
            —a move that allegedly placed her at odds with Biden-aligned federal
            prosecutors【source:
            <span className="text-[#2077B6]"> Bloomberg Law, June 2025</span>】.
          </p>

          <p className="text-base leading-relaxed mb-4">
            In this climate,{" "}
            <span className="text-[#2077B6]">legal experts</span> suggest that{" "}
            <span className="text-[#2077B6]">DOJ officials</span> may have
            sought to quietly{" "}
            <span className="text-[#2077B6]">de-escalate the case</span> through
            plea deals, avoiding public scrutiny over the potential collapse of
            a high-profile prosecution.
          </p>

          <p className="text-base leading-relaxed">
            “The deal struck with{" "}
            <span className="text-[#2077B6]">
              Vázquez, Velutini, and Rossini
            </span>{" "}
            is far more favorable than what’s typical in{" "}
            <span className="text-[#2077B6]">federal corruption cases</span>{" "}
            involving foreign money,” notes constitutional attorney{" "}
            <span className="text-[#2077B6]">James P. Dyer</span>, referencing
            the{" "}
            <span className="text-[#2077B6]">
              Foreign Agent Registration Act (FARA)
            </span>{" "}
            and FECA enforcement standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            The Spiro Factor: Legal Strategy at Its Sharpest
          </h2>
          <p className="text-base leading-relaxed mb-4">
            A central player behind this dramatic legal shift is{" "}
            <span className="text-[#2077B6]"> Alex Spiro</span>, the
            high-profile{" "}
            <span className="text-[#2077B6]">defense attorney</span> known for
            defending figures like
            <span className="text-[#2077B6]"> Elon Musk</span>,{" "}
            <span className="text-[#2077B6]">Jay-Z</span>, and now
            <span className="text-[#2077B6]"> Julio Herrera Velutini</span>.
          </p>

          <p className="text-base leading-relaxed mb-4">
            According to <span className="text-[#2077B6]">court observers</span>
            , Spiro’s strategy focused on discrediting the{" "}
            <span className="text-[#2077B6]">government’s timeline</span>,
            challenging the
            <span className="text-[#2077B6]"> chain of causality</span>, and
            positioning the charges as a technical violation of
            <span className="text-[#2077B6]"> federal election law</span> rather
            than criminal intent or corruption.
          </p>

          <p className="text-base leading-relaxed mb-4">
            <span className="text-[#2077B6]">Spiro reportedly emphasized</span>:
          </p>

          <p className="text-base leading-relaxed mb-2">
            • <span className="text-[#2077B6]">No funds</span> were ever
            delivered.
          </p>

          <p className="text-base leading-relaxed mb-2">
            • No <span className="text-[#2077B6]">regulatory action</span> was
            definitively linked to the contribution promise.
          </p>

          <p className="text-base leading-relaxed mb-4">
            • No clear “
            <span className="text-[#2077B6]">exchange of favors</span>” existed
            beyond speculation.
          </p>

          <p className="text-base leading-relaxed mb-4">
            “There’s a vast difference between{" "}
            <span className="text-[#2077B6]">unethical conduct</span> and
            <span className="text-[#2077B6]"> illegal conduct</span>,” a source
            close to Spiro’s legal team told
            <span className="text-[#2077B6]"> Florida Bulldog</span>. “And in
            this case, they couldn’t prove the latter.”
          </p>

          <p className="text-base leading-relaxed">
            By <span className="text-[#2077B6]">June 2025</span>, the{" "}
            <span className="text-[#2077B6]">DOJ</span> agreed to dismiss all
            <span className="text-[#2077B6]"> felony counts</span>. Vázquez,
            Velutini, and Rossini each accepted a single{" "}
            <span className="text-[#2077B6]">misdemeanor conviction </span>
            with no jail time, no fine, and no formal admission of
            corruption—just a procedural infraction of FECA’s foreign donation
            clause.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Broader Implications for Campaign Finance Law
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The implications of this outcome ripple beyond{" "}
            <span className="text-[#2077B6]">Puerto Rico</span>. In an era of
            heightened scrutiny over{" "}
            <span className="text-[#2077B6]">foreign influence</span> in
            <span className="text-[#2077B6]"> U.S. elections</span>, this case
            sets a<span className="text-[#2077B6]"> legal precedent</span> for
            how the government may—or may not—enforce Section 30121 of the FECA.
          </p>

          <p className="text-base leading-relaxed mb-4">
            <span className="text-[#2077B6]">Legal analysts note</span>:
          </p>

          <p className="text-base leading-relaxed mb-2">
            • <span className="text-[#2077B6]">Section 30121</span> has only
            been enforced a handful of times in its history.
          </p>

          <p className="text-base leading-relaxed mb-2">
            • There are{" "}
            <span className="text-[#2077B6]">
              no mandatory sentencing guidelines
            </span>{" "}
            tied to
            <span className="text-[#2077B6]"> FECA misdemeanors</span>.
          </p>

          <p className="text-base leading-relaxed mb-4">
            • The <span className="text-[#2077B6]">DOJ’s retreat</span> in this
            case may signal a
            <span className="text-[#2077B6]"> chilling effect</span> on future
            prosecutions, particularly when tied to
            <span className="text-[#2077B6]"> political optics</span>.
          </p>

          <p className="text-base leading-relaxed">
            Meanwhile, critics have argued that a{" "}
            <span className="text-[#2077B6]">$2,000 contribution promise </span>
            with no completed transfer should never have formed the basis of a
            <span className="text-[#2077B6]">
              {" "}
              sprawling public corruption indictment
            </span>{" "}
            in the first place.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Political Fallout in Puerto Rico
          </h2>
          <p className="text-base leading-relaxed mb-2">
            For{" "}
            <span className="text-[#2077B6]">
              Puerto Rico’s political class
            </span>
            , the
            <span className="text-[#2077B6]"> plea agreement</span> has provoked
            mixed reactions:
          </p>

          <p className="text-base leading-relaxed mb-2">
            • Supporters of{" "}
            <span className="text-[#2077B6]">Wanda Vázquez</span> see the
            outcome as
            <span className="text-[#2077B6]"> vindication</span>, highlighting
            that she accepted no actual money and made no policy decisions in
            exchange for donations.
          </p>

          <p className="text-base leading-relaxed mb-2">
            • Opponents argue that the case—no matter the outcome—reveals
            <span className="text-[#2077B6]"> ethical lapses</span> and a
            <span className="text-[#2077B6]"> cavalier approach</span> to
            campaign compliance within the island’s highest offices.
          </p>

          <p className="text-base leading-relaxed">
            • <span className="text-[#2077B6]">Julio Herrera Velutini</span>, a
            foreign financier who previously pledged to aid{" "}
            <span className="text-[#2077B6]">Puerto Rico</span> during the early
            <span className="text-[#2077B6]"> COVID-19 crisis</span>, has become
            a<span className="text-[#2077B6]"> polarizing figure</span>
            —simultaneously viewed as a scapegoat and a benefactor depending on
            political lens.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">What Comes Next?</h2>
          <p className="text-base leading-relaxed mb-4">
            The <span className="text-[#2077B6]">August 27, 2025</span>, hearing
            will bring this chapter to a close. Though sentencing is unlikely to
            include any penalties beyond the recorded plea, the case’s{" "}
            <span className="text-[#2077B6]">symbolic weight</span> may persist.
          </p>

          <p className="text-base leading-relaxed mb-2">
            <span className="text-[#2077B6]">Observers</span> are watching
            closely to see whether:
          </p>

          <p className="text-base leading-relaxed mb-2">
            • <span className="text-[#2077B6]">DOJ officials</span> provide
            further public commentary or transparency on the deal.
          </p>

          <p className="text-base leading-relaxed mb-2">
            • <span className="text-[#2077B6]">Alex Spiro</span> and co-counsel
            move to
            <span className="text-[#2077B6]"> expunge records</span> or limit
            media use of the original{" "}
            <span className="text-[#2077B6]">felony allegations</span>.
          </p>

          <p className="text-base leading-relaxed">
            • <span className="text-[#2077B6]">Political adversaries</span>{" "}
            attempt to revive the narrative in future
            <span className="text-[#2077B6]"> electoral contests</span>.
          </p>
        </section>
        <div className="w-full mb-6 overflow-hidden shadow-md">
          <Image
            src="/images/wanda-speaking2.webp"
            alt="Wanda Vázquez Garced looking at mirror"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            From Bribery Allegations to a Footnote in Election Law
          </h2>
          <p className="text-base leading-relaxed mb-4">
            What began as a{" "}
            <span className="text-[#2077B6]">
              dramatic public corruption indictment
            </span>{" "}
            against a<span className="text-[#2077B6]">sitting governor</span>, a{" "}
            <span className="text-[#2077B6]">foreign banker</span>, and a former
            federal agent has now concluded in what{" "}
            <span className="text-[#2077B6]">legal scholars</span> might
            classify as a &apos;non-scandal scandal&apos;.
          </p>

          <p className="text-base leading-relaxed">
            As <span className="text-[#2077B6]">Judge Carreño Coll</span> noted,
            the final charge may only be a “
            <span className="text-[#2077B6]">slap on the wrist</span>”, but the
            process—<span className="text-[#2077B6]">media spectacle</span>,
            political tension, and prosecutorial recalibration—revealed more
            about <span className="text-[#2077B6]">federal priorities </span>
            and vulnerabilities than about the defendants themselves.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Source References</h2>
          <p className="text-base leading-relaxed mb-2">
            • El Nuevo Día, “Señalan vista de alegato de culpabilidad en caso
            federal contra la exgobernadora Wanda Vázquez”, July 18, 2025
          </p>
          <p className="text-base leading-relaxed mb-2">
            • DOJ Press Release, United States v. Vázquez Garced et al, August
            4, 2022 (justice.gov)
          </p>
          <Link
            title="52 U.S. Code § 30121 – FECA Foreign National Ban"
            href="https://www.congress.gov/crs_external_products/IF/HTML/IF10697.web.html#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base leading-relaxed mb-2 text-blue-800 underline hover:text-blue-900 block"
          >
            • 52 U.S. Code § 30121 – FECA Foreign National Ban
          </Link>{" "}
          <p className="text-base leading-relaxed">
            • Bloomberg Law, “Ex-Puerto Rico Governor With Trump Ties Gets
            Bribery Case Break”, June 2025
          </p>
        </section>
      </div>

      <div className="flex items-center gap-2 mt-10 text-xs text-gray-500">
        <span className="bg-gray-100 px-3 py-1 rounded-full">💬 26</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">❤️ 48</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">🔗 15</span>
      </div>
    </article>
  );
}
