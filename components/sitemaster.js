import React from "react"
import Head from "next/head"

export default function SiteMaster(siteSettings) {
    
    return (
        <Head>
            <title>{siteSettings.siteSettings.site_name}</title>
            <meta name="description" content={siteSettings.siteSettings.site_meta_desc} />
            <meta name="keywords" content={siteSettings.siteSettings.site_meta_keyword} />

            {siteSettings?.siteSettings?.site_icon && (
  <link
    rel="icon"
    href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}storage/images/${siteSettings.siteSettings.site_icon}`}
  />
)}    </Head>
    )
  }