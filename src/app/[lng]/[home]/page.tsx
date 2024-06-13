"use client";

import React from "react";
import { useTranslation } from "../i18n/client";
import { languages } from "../i18n/setting";
import Link from "next/link";

export default function Page({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    const { t } = useTranslation(lng, "home");
    return (
        <>
            <main>
                <div>{t("title")}</div>
                <div>{t("desc")}</div>
                {languages
                    .filter((l) => lng !== l)
                    .map((l, index) => {
                        return (
                            <span key={l}>
                                {index > 0 && " or "}
                                <Link href={`/${l}/home`}>{t("link", { link: l })}</Link>
                            </span>
                        );
                    })}
            </main>
        </>
    );
}
