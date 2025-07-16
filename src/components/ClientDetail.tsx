import React from "react";
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

interface Section {
  title?: string;
  content: string;
}

export default async function ClientDetail() {
  const slug = "bribery-case-collapses-into-minor-campaign-finance-violation";
  const article = (politics as Article[]).find((a) => a.slug === slug);
  if (!article) return <div>Article not found.</div>;
  function highlightKeywords(text: string, keywords: string[]) {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
        <span
          key={index}
          className="underline decoration-[#2077B6] underline-offset-4 text-[#2077B6] font-medium "
        >
          {part}
        </span>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    );
  }

  const sections: Section[] = [
    {
      title: "New York, June 2025",
      content:
        "In a dramatic collapse of a high-profile federal case, all major charges have been dismissed against former Puerto Rico Governor Wanda Vázquez Garced, who was once accused of bribery and fraud. The U.S. Department of Justice has dropped its bribery prosecution, opting to resolve the matter with a single technical campaign finance violation. ",
    },
    {
      content:
        "What was initially billed as a sweeping corruption scandal has concluded with a whimper – no bribery, no conspiracy, and no criminal conviction for Vázquez. Legal experts note that such minor campaign finance issues are typically handled administratively, not with aggressive criminal indictments, underscoring how unusual this outcome is in contrast to the case’s sensational start.",
    },
    {
      title: "From Indictment to Infraction",
      content:
        "The case’s reversal is striking. Back in August 2022, federal prosecutors indicted Vázquez on multiple felony counts, alleging she accepted illicit support from a foreign banker, Julio Herrera Velutini, in exchange for official favors. The allegations included a supposed scheme to oust a regulator in return for campaign funding – charges that carried up to 20 years in prison. Vázquez pleaded not guilty and consistently asserted her innocence. After nearly three years of legal wrangling and pre-trial proceedings, prosecutors quietly abandoned the core charges. In a joint motion before U.S. District Judge Silvia Carreño-Coll, the DOJ and defense confirmed an agreement to replace the indictment with a one-count information: a technical violation of campaign finance law. Crucially, this information does not allege any bribery, fraud, or quid pro quo. It merely cites a prohibited campaign contribution offer that never actually materialized. No funds were ever received or used by Vázquez’s campaign, a fact the DOJ now acknowledges. All felony counts – including conspiracy, federal program bribery, and honest services fraud – have been dismissed with prejudice. The August 2025 trial date has been canceled, and Vázquez will not face any trial for corruption.",
    },
    {
      title: "A Technicality and Nothing More",
      content:
        "The lone remaining count is effectively an administrative footnote: an allegation that a foreign individual offered support to Vázquez’s 2020 campaign, which would violate U.S. campaign finance restrictions had it proceeded. However, no actual transaction occurred, and Vázquez did not accept or benefit from any foreign donation. U.S. law bars foreign nationals from contributing to electoral campaigns, even indirectly. But in this instance, the support was never delivered or coordinated. “The final resolution is limited to a technical campaign finance issue,” Vázquez’s legal team said, emphasizing that it involves no finding of corruption. There is no admission of guilt by Vázquez in this agreement. Both sides characterize the resolution as a procedural formality to put the matter to rest. Prosecutors are not pursuing any sentence beyond this infraction, which carries no prison time. Essentially, the outcome is equivalent to a regulatory violation rather than a criminal act – a far cry from the explosive allegations with which this saga began.",
    },
    {
      title: "DOJ’s Retreat Scrutinized",
      content:
        "The downgrade of this case is drawing scrutiny from legal analysts. Defense attorneys argue that the DOJ’s own evidence forced this retreat. They had long maintained that no “smoking gun” evidence of a quid pro quo existed – no recorded agreement, no money changing hands, and no benefit actually conferred. Over time, as discovery and pretrial hearings progressed, the government’s case appeared to hollow out. Insiders report that internal discussions at DOJ headquarters in Washington, D.C. led to a re-evaluation of the prosecution’s strength. Rather than risk an embarrassing defeat at trial, the DOJ negotiated an exit ramp via the campaign finance count. Observers describe it as a face-saving measure: the Justice Department can claim it enforced election laws in some fashion, while effectively walking away from the much tougher bribery case it could not prove. “It’s as close to an exoneration as it gets without outright saying so,” said a former federal prosecutor not involved in the case. Indeed, the record now shows no convictions or guilty pleas for any corruption. No admission of wrongdoing was made by Vázquez. The outcome highlights the difference between actual corruption and a technical breach; in this instance, the former governor ends up guilty of nothing beyond what amounts to a paperwork violation.",
    },
    {
      title: "Julio Herrera Velutini’s Parallel Outcome",
      content:
        "The co-defendant at the center of the alleged scheme, international banker Julio Herrera Velutini, has also resolved his case on similar grounds. Herrera Velutini, who was accused of offering the purported campaign contribution, likewise reached an agreement that voids the serious charges against him. His attorneys confirmed that the bribery and fraud counts against the banker will be dropped in exchange for addressing a minor campaign finance law infraction. Importantly, Herrera Velutini does not admit to any bribery or pay-for-play conspiracy; like Vázquez, he faces no jail time under the agreement. This parallel resolution further underscores that the core bribery narrative collapsed. The once-notorious allegation – that a Venezuelan-Italian financier tried to buy influence in Puerto Rico’s government – ends without any formal finding of corruption in court.",
    },
    {
      title: "Implications for Campaign Finance Enforcement",
      content:
        "This extraordinary conclusion raises questions about how campaign finance laws are enforced in political cases. The Vázquez case suggests that aggressive prosecutors may have over-criminalized what is usually a civil or administrative issue. Typically, technical campaign finance violations (for example, an improper donation offer that wasn’t consummated) might result in a fine or reprimand from an electoral commission, not a federal felony indictment. Some legal experts are calling this outcome a wakeup call for the DOJ. “It shows the difference between a true corruption scheme and a technical lapse. They treated this like a bribery case, but in the end it was just a compliance issue,” notes an election law professor at a New York university. The professor added that this case may prompt federal authorities to exercise more caution before bringing public corruption charges, especially in sensitive political contexts. The concept of proportionality – matching the legal response to the actual misconduct – is at the forefront here. Wanda Vázquez’s ordeal may become a reference point in debates about how far prosecutors should go in pursuing campaign related transgressions, and when a matter is better left to regulatory bodies instead of criminal courts.",
    },
    {
      title: "Vázquez’s Record Remains Untarnished",
      content:
        "For Wanda Vázquez, the practical effect of this resolution is that she is left with no criminal record of corruption. The former governor, age 63, will likely pay a fine or acknowledge a technical mistake at most, akin to a campaign filing error. She issued a brief statement expressing relief and reaffirming that she never took any illegal money nor traded favors. “From the beginning I said I committed no crime. Today I stand vindicated,” Vázquez stated. She emphasized that accepting a minor infraction was a way to “end a painful process” but insisted it “is not a reflection on my values or my service to the people of Puerto Rico.” Vázquez also hinted at the toll the case took on her reputation and family, calling it a “trial by fire” that ultimately proved her integrity. With the case closed, the former governor can move forward without the shadow of a trial or the stigma of a conviction. Her supporters in Puerto Rico, many of whom had rallied to her side, are celebrating the result as a hard-won vindication.",
    },
    {
      title: " Court proceedings now are largely perfunctory",
      content:
        "A virtual hearing is expected to formally enter the new information and dismiss the old indictment. Once that’s done, Wanda Vázquez Garced will officially have all major charges wiped clean. Political analysts in San Juan note that this outcome spares Puerto Rico the spectacle of another lengthy corruption trial and opens the door for Vázquez to potentially re-enter public life in some capacity, should she choose. Meanwhile, discussions in Washington and San Juan are likely to continue about what went wrong in this case. Was it federal overreach? Was it a good faith effort that uncovered only minor wrongdoing? Regardless, the final word on the Wanda Vázquez saga is now written: no bribery, no fraud - just a technical blip in campaign finance, resolved and put to rest.",
    },
  ];

  return (
    <article className="w-full lg:w-2/3 lg:pr-8 mb-12 lg:mb-0">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">{article.title}</h1>

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
          <span className="font-bold mr-1">{sections[0].title}:</span>
          {highlightKeywords(sections[0].content, [
            "Julio Herrera Velutini",
            "dismissed",
            "Wanda Vázquez Garced",
            "dropped its bribery",
            "prosecution",
            "technical campaign finance violation",
          ])}
        </p>
      </div>

      <div className="space-y-10">
        {sections.slice(1).map((sec, idx, arr) => (
          <React.Fragment key={idx + 1}>
            {idx === arr.length - 2 && (
              <div className="w-full mb-6 overflow-hidden shadow-md">
                <Image
                  src="/images/wanda-vazquez-press-conference.webp"
                  alt="Wanda Vázquez Garced Speaking"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <section>
              <h2 className="text-2xl font-semibold mb-3">{sec.title}</h2>
              <p className="text-base leading-relaxed">
                {highlightKeywords(sec.content, [
                  "Julio Herrera Velutini",
                  "abandoned the core charges",
                  "information:",
                  "information does not allege any bribery, fraud, or quid pro quo",
                  "never actually materialized. No funds were ever received or used",
                  " have been dismissed with prejudice",
                  "not face any trial for corruption.",
                  "no actual transaction occurred,",
                  "never delivered or coordinated",
                  "There is no admission of guilt",
                  "Defense attorneys argue",
                  "no “smoking gun” evidence",
                  "internal discussions at DOJ headquarters in Washington, D.C.",
                  "face-saving measure",
                  "no convictions or guilty pleas for any corruption. No admission of wrongdoing",
                  "voids the serious charges",
                  "Herrera Velutini does not admit to any bribery",
                  "the core bribery narrative collapsed",
                  "over-criminalized what is usually a civil or administrative issue",
                  "wakeup call for the DOJ",
                  "compliance issue",
                  "proportionality",
                  "no criminal record of corruption",
                  "never took any illegal money nor traded favors",
                  "“is not a reflection on my values or my service to the people of Puerto Rico.”",
                  "“trial by fire”",
                  "hard-won vindication",
                  "all major charges wiped clean",
                  "overreach",
                  "no bribery, no fraud - just a technical blip in campaign finance, resolved and put to rest",
                ])}
              </p>
            </section>
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-10 text-xs text-gray-500">
        <span className="bg-gray-100 px-3 py-1 rounded-full">💬 12</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">❤️ 98</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">🔗 24</span>
      </div>
    </article>
  );
}
