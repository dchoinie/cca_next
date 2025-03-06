import { client } from "./client";
import { NavItem } from "@/types/navigation.types";
import { PortableTextBlock } from "@portabletext/types";

export type StaffMember = {
  _id: string;
  title: "Pr" | "Mr" | "Mrs" | "Ms";
  name: string;
  position: string;
  email: string;
  phone: string;
  headshot: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  order: number;
};

export type SupplyList = {
  _id: string;
  grade: string;
  order: number;
  content: PortableTextBlock[];
};

export type Resource = {
  _id: string;
  title: string;
  link: string;
  category: "lutheran" | "educational";
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
};

export type Club = {
  _id: string;
  clubName: string;
  ages: string;
  meetingDays: string;
  startTime: string;
  endTime: string;
  details: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
};

export type HandbookSection = {
  _id: string;
  section: string;
  description: string;
  extraContent: PortableTextBlock[];
};

export async function getNavigationItems(): Promise<NavItem[]> {
  const query = `
    *[_type == "navItem"] | order(order asc) {
      _id,
      label,
      link,
      order,
      external,
      "subLinks": subLinks[] {
        _key,
        label,
        link,
        external
      }
    }
  `;

  const items = await client.fetch(query);
  return items;
}

export async function getAllStaffMembers(): Promise<StaffMember[]> {
  const query = `
    *[_type == "staffMember"] | order(order asc) {
      _id,
      title,
      name,
      position,
      email,
      phone,
      "headshot": {
        "asset": {
          "_ref": headshot.asset._ref,
          "url": headshot.asset->url
        }
      },
      order
    }
  `;

  const staff = await client.fetch(query);
  return staff;
}

export async function getAllSupplyLists(): Promise<SupplyList[]> {
  const query = `
    *[_type == "supplyList"] | order(order asc) {
      _id,
      grade,
      order,
      content
    }
  `;

  const supplyLists = await client.fetch(query);
  return supplyLists;
}

export async function getAllResources(): Promise<Resource[]> {
  const query = `
    *[_type == "resources"] {
      _id,
      title,
      link,
      category,
      "image": {
        "asset": {
          "_ref": image.asset._ref,
          "url": image.asset->url
        }
      }
    }
  `;

  const resources = await client.fetch(query);
  return resources;
}

export async function getAllClubs(): Promise<Club[]> {
  const query = `
    *[_type == "clubs"] {
      _id,
      clubName,
      ages,
      meetingDays,
      startTime,
      endTime,
      details,
      "image": {
        "asset": {
          "_ref": image.asset._ref,
          "url": image.asset->url
        }
      }
    }
  `;

  const clubs = await client.fetch(query);
  return clubs;
}

export async function getHandbookSections(): Promise<HandbookSection[]> {
  const query = `
    *[_type == "handbook"] | order(section asc) {
      _id,
      section,
      description,
      extraContent
    }
  `;

  const sections = await client.fetch(query);
  return sections;
}
