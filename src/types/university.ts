export type PolicyStatus = "yes" | "partial" | "no" | "unknown";

export interface LgbtqPolicy {
  preferredName: PolicyStatus;
  samePartner: PolicyStatus;
  genderNeutralRestroom: PolicyStatus;
  genderFormConsideration: PolicyStatus;
  sogiTraining: PolicyStatus;
  antiOutingPolicy: PolicyStatus;
}

export interface SupportSystem {
  dedicatedConsultation: PolicyStatus;
  counselorSogiTraining: PolicyStatus;
  harassmentCooperation: PolicyStatus;
}

export interface StudentGroup {
  name: string;
  description: string;
}

export interface Declaration {
  diversityDeclaration: boolean;
  publicPolicy: boolean;
  actionPlan: boolean;
  relatedUrls: { label: string; url: string }[];
}

export interface Source {
  label: string;
  url: string;
}

export type Region =
  | "hokkaido"
  | "tohoku"
  | "kanto"
  | "chubu"
  | "kinki"
  | "chugoku_shikoku"
  | "kyushu_okinawa";

export type UniversityType = "national" | "public" | "private";

export interface University {
  slug: string;
  name: string;
  region: Region;
  type: UniversityType;
  prefecture: string;
  website: string;
  lgbtqPolicies: LgbtqPolicy;
  supportSystem: SupportSystem;
  studentGroups: StudentGroup[];
  declaration: Declaration;
  notes: string;
  sources: Source[];
  updatedAt: string;
}

export const REGION_LABELS: Record<Region, string> = {
  hokkaido: "北海道",
  tohoku: "東北",
  kanto: "関東",
  chubu: "中部",
  kinki: "近畿",
  chugoku_shikoku: "中国・四国",
  kyushu_okinawa: "九州・沖縄",
};

export const TYPE_LABELS: Record<UniversityType, string> = {
  national: "国立",
  public: "公立",
  private: "私立",
};

export const POLICY_STATUS_LABELS: Record<PolicyStatus, string> = {
  yes: "○",
  partial: "△",
  no: "×",
  unknown: "不明",
};
