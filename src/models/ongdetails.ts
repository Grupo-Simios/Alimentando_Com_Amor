export interface BankDetails {
  ongName: string;
  CNPJ: string;
  key: string;
  qrCode: string;
  agency: string;
  operator: string;
  account: string;
  bankName: string;
}

export interface ContactDetails {
  tel1: string;
  tel2: string;
  volunteerEmail: string;
  linkWhatsapp1: string;
  linkWhatsapp2: string;
  formsLink: string;
}

export interface AddressDetails {
  mainAddress: string;
}

export interface SocialAddress {
  instagram: string;
  facebook: string;
}

export interface OngDetails {
  bankDetails?: BankDetails;
  contactDetails?: ContactDetails;
  addressDetails?: AddressDetails;
  socialAddress?: SocialAddress;
}

export const bankDetails: BankDetails = {
  ongName: "ASSOCIAÇÃO ALIMENTANDO COM AMOR",
  CNPJ: "51.753.476/0001-34",
  key: "00020126360014br.gov.bcb.pix0114517534760001345204000053039865802BR5910----------6005NATAL62070503***630476E4",
  qrCode: "",
  agency: "0035",
  operator: "003",
  account: "10381-6",
  bankName: "CAIXA ECONÔMICA FEDERAL",
};

export const contactDetails: ContactDetails = {
  tel1: "(84) 998713-6833",
  tel2: "(84) 998169-0141",
  volunteerEmail: "voluntario@alimentandocomamornatal.org",
  linkWhatsapp1: "https://wa.me/55849987136833",
  linkWhatsapp2: "https://wa.me/55849981690141",
  formsLink: "https://docs.google.com/forms/d/e/1FAIpQLSdSu6aNCrawHnwHdQC-71CT14mu25qC5IHfuEUvSguJsB5SiA/viewform?pli=1",
};

export const addressDetails: AddressDetails = {
  mainAddress: "Rua Santo Antônio, N° 731, Cidade Alta, Natal RN",
};

export const socialAddress: SocialAddress = {
  instagram: "https://www.instagram.com/alimentandocomamornatal/",
  facebook: "https://facebook.com/cyda.lima.35",
};
