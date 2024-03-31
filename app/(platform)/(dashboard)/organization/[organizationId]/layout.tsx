import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import OrgControl from "./_components/OrgControl";

interface OrganizationIdLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

export default function OrganizationIdLayout({
  children,
}: OrganizationIdLayoutProps) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
