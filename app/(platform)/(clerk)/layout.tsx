interface ClerkLayoutProps {
  children: React.ReactNode;
}

export default function ClerkLayout({ children }: ClerkLayoutProps) {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  );
}
