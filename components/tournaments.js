import React from "react";
import Link from "next/link";
import { blogDate } from "@/helpers/helpers";
import Text from "@/components/text";
import { cmsFileUrl } from "@/helpers/helpers";


export default function Tournaments(tournament) {
  return (
    <>
      <div className="coll">
                <div className="inner">
                  <div className="text">
                    <span>{tournament.tournament.id}</span>
                    <h4>
                      <img src="/images/calendar.svg" />
                      {tournament.tournament.s_time} - {tournament.tournament.e_time} ({blogDate(tournament.tournament.blog_date)})
                    </h4>
                  </div>
                  <div className="image">
                    <img src={cmsFileUrl(tournament.tournament.image, 'tournament')} />
                  </div>
                  <div className="flex-heading">
                    <h4>{tournament.tournament.title}</h4>
                   <Text string={tournament.tournament.detail} />
                  </div>
                </div>
              </div>
    </>
  );
}
