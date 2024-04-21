interface BankDetails {
  CNPJ: string;
  qrCode: string;
  agency: string;
  operator: string;
  account: string;
  bankName: string;
}

interface ContactDetails {
  tel1: string;
  tel2: string;
  volunteerEmail: string;
}

interface AddressDetails {
  mainAddress: string;
}

interface OngDetails {
  bankDetails?: BankDetails;
  contactDetails?: ContactDetails;
  addressDetails?: AddressDetails;
}

export const ongDetails: OngDetails[] = [
  {
    bankDetails: {
      CNPJ: "51.753.476/0001-34",
      qrCode: '',
      agency: "0035",
      operator: "003",
      account: "10381-6",
      bankName: "CAIXA ECONÔMICA FEDERAL"
    }
  },
  {
    contactDetails: {
      tel1: '(84)998713-6833',
      tel2: '(84)998169-0141',
      volunteerEmail: 'voluntario@alimentandocomamornatal.org'
    }
  },
  {
    addressDetails: {
      mainAddress: 'rua Santo Antônio 731 Cidade Alta, Natal RN'
    }
  }
];


