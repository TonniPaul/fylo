interface FeaturesData {
  id: string;
  image: string;
  title: string;
  description: string;
  altText: string;
}

export const featureData: FeaturesData[] = [
  {
    id: crypto.randomUUID(),
    image: "/assets/icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    altText: "access icon",
  },
  {
    id: crypto.randomUUID(),
    image: "/assets/icon-security.svg",
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    altText: "security icon",
  },
  {
    id: crypto.randomUUID(),
    image: "/assets/icon-collaboration.svg",
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    altText: "collaboration icon",
  },
  {
    id: crypto.randomUUID(),
    image: "/assets/icon-any-file.svg",
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    altText: "file icon",
  },
];
